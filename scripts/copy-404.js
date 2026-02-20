import { copyFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const indexPath = join(distDir, "index.html");
const notFoundPath = join(distDir, "404.html");

if (!existsSync(indexPath)) {
  console.error("dist/index.html not found. Run npm run build first.");
  process.exit(1);
}
copyFileSync(indexPath, notFoundPath);
console.log("Copied dist/index.html to dist/404.html for GitHub Pages SPA routing.");
