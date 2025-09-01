const { Client } = require("@notionhq/client");
const fs = require("fs");

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const pageId = process.env.NOTION_PAGE_ID;

async function renderBlock(block) {
  switch (block.type) {
    case "heading_1":
      return `# ${block.heading_1.rich_text.map(t => t.plain_text).join("")}\n\n`;
    case "heading_2":
      return `## ${block.heading_2.rich_text.map(t => t.plain_text).join("")}\n\n`;
    case "paragraph":
      return `${block.paragraph.rich_text.map(t => t.plain_text).join("")}\n\n`;
    case "bulleted_list_item":
      return `- ${block.bulleted_list_item.rich_text.map(t => t.plain_text).join("")}\n`;
    case "table": {
      const rows = await notion.blocks.children.list({ block_id: block.id });
      let tableMd = "";
      rows.results.forEach((row, idx) => {
        if (row.type === "table_row") {
          const cells = row.table_row.cells.map(cell =>
            cell.map(t => t.plain_text).join(" ")
          );
          tableMd += `| ${cells.join(" | ")} |\n`;
          if (idx === 0) {
            tableMd += `| ${cells.map(() => "---").join(" | ")} |\n`; // header separator
          }
        }
      });
      return tableMd + "\n";
    }
    default:
      return "";
  }
}

async function fetchPage() {
  try {
    const blocks = await notion.blocks.children.list({ block_id: pageId, page_size: 100 });
    let mdContent = "# 📖 Project Page (Synced from Notion)\n\n";

    for (const block of blocks.results) {
      mdContent += await renderBlock(block);
    }

    fs.writeFileSync("README.md", mdContent, "utf8");
    console.log("✅ README.md updated from Notion!");
  } catch (err) {
    console.error("❌ Error fetching Notion page:", err.message);
    process.exit(1);
  }
}

fetchPage();
