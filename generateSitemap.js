import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const initialPostData = [
  {
    id: 1,
    title: "This is title your title his title their title",
    description: "먼저 p리고 최대…",
    date: "2024-01-01",
    link: "/posts/1",
    tags: ["Spring", "Design Pattern"],
    markdownFile: "/posts/1.md",
  },

  {
    id: 2,
    title: "title2",
    description: "개발을 하다 보면 소다…",
    date: "2025-01-01",
    link: "/posts/2",
    tags: ["Kotlin"],
    markdownFile: "/posts/2.md",
  },
];

const generateSitemap = () => {
  const urls = initialPostData
    .map(
      (post) => `
      <url>
        <loc>https://siwoo-jung.github.io/posts/${post.id}</loc>
        <lastmod>${post.date}</lastmod>
        <priority>0.8</priority>
      </url>
    `
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://siwoo-jung.github.io/</loc>
        <priority>1.0</priority>
      </url>
      ${urls}
    </urlset>`.trim();

  const publicDir = path.resolve(__dirname, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);

  console.log("✅ Sitemap generated successfully at /public/sitemap.xml");
};

generateSitemap();
