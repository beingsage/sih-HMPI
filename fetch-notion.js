import { Client } from "@notionhq/client";
import fs from "fs";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const pageId = process.env.NOTION_PAGE_ID;

// Fetch page content
async function fetchPage() {
  const blocks = await notion.blocks.children.list({ block_id: pageId });
  
  let mdContent = "# 📖 Project Page (Synced from Notion)\n\n";

  for (const block of blocks.results) {
    if (block.type === "heading_1") mdContent += `# ${block.heading_1.rich_text[0]?.plain_text}\n\n`;
    if (block.type === "heading_2") mdContent += `## ${block.heading_2.rich_text[0]?.plain_text}\n\n`;
    if (block.type === "paragraph") mdContent += `${block.paragraph.rich_text.map(t => t.plain_text).join("")}\n\n`;
    if (block.type === "bulleted_list_item") mdContent += `- ${block.bulleted_list_item.rich_text.map(t => t.plain_text).join("")}\n`;
  }

  fs.writeFileSync("README.md", mdContent, "utf8");
  console.log("✅ README.md updated from Notion!");
}

fetchPage();
