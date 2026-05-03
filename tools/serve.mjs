import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(".");
const port = Number.parseInt(process.env.PORT || "4173", 10);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};

export function resolveRequestPath(baseRoot, pathname) {
  if (pathname === "/") {
    return resolve(join(baseRoot, "app/index.html"));
  }

  const decoded = decodeURIComponent(pathname);
  if (decoded.includes("..")) {
    return null;
  }

  const filePath = resolve(join(baseRoot, decoded.replace(/^[/\\]+/, "")));
  return filePath.startsWith(resolve(baseRoot)) ? filePath : null;
}

export function createWikiServer(baseRoot = root) {
  return createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://localhost:${port}`);
  const filePath = resolveRequestPath(baseRoot, url.pathname);

  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const info = await stat(filePath);
    const target = info.isDirectory() ? join(filePath, "index.html") : filePath;
    response.writeHead(200, { "content-type": types[extname(target)] || "application/octet-stream" });
    createReadStream(target).pipe(response);
  } catch {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  createWikiServer().listen(port, () => {
    console.log(`LLM Wiki running at http://localhost:${port}`);
  });
}
