// fetch-notion.js
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import fs from "fs";

// Load secrets from env
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

const NOTION_PAGE_ID = process.env.NOTION_PAGE_ID || ""; // must set in GitHub secrets

async function updateReadme() {
  try {
    // Convert Notion Page → Markdown
    const mdBlocks = await n2m.pageToMarkdown(NOTION_PAGE_ID);
    const mdString = n2m.toMarkdownString(mdBlocks);

    // Wrap in section so only that part updates
    const newContent = `# My Project\n
<!-- NOTION-START -->
${mdString.parent}
<!-- NOTION-END -->
`;

    fs.writeFileSync("README.md", newContent);
    console.log("✅ README.md updated with Notion content!");
  } catch (err) {
    console.error("❌ Error updating README:", err.message);
    process.exit(1);
  }
}

updateReadme();
