import assert from "node:assert/strict";
import {
  columnPages,
  extractWikiLinks,
  readerPages,
  markdownToHtml,
  searchPages,
  slugify,
} from "../app/wiki-core.js";

const pages = [
  {
    path: "wiki/index.md",
    title: "Index",
    tags: ["home"],
    text: "LLM Wiki compiles raw sources into durable markdown.",
  },
  {
    path: "wiki/concepts/compilation-over-retrieval.md",
    title: "Compilation Over Retrieval",
    tags: ["concept"],
    text: "RAG answers from chunks. LLM Wiki writes synthesis pages.",
  },
];

assert.equal(slugify("Compilation Over Retrieval!"), "compilation-over-retrieval");

assert.deepEqual(
  extractWikiLinks("See [[wiki/index.md|Home]] and [[wiki/concepts/test.md]]."),
  [
    { href: "wiki/index.md", label: "Home" },
    { href: "wiki/concepts/test.md", label: "wiki/concepts/test.md" },
  ],
);

assert.equal(searchPages(pages, "rag")[0].path, "wiki/concepts/compilation-over-retrieval.md");
assert.equal(searchPages(pages, "durable")[0].path, "wiki/index.md");
assert.deepEqual(searchPages(pages, "missing"), []);

assert.deepEqual(
  readerPages([
    { path: "wiki/index.md", audience: "reader" },
    { path: "agent/profile.md", audience: "maintenance" },
    { path: "wiki/overview.md" },
  ]).map((page) => page.path),
  ["wiki/index.md", "wiki/overview.md"],
);

assert.deepEqual(
  columnPages([
    { path: "wiki/columns/ai-se-testing/index.md", tags: ["column"] },
    { path: "wiki/columns/ai-se-testing/test-generation.md", tags: ["column"] },
    { path: "agent/skills/ingest-source.md", tags: ["column"], audience: "maintenance" },
    { path: "wiki/overview.md", tags: ["synthesis"] },
  ], "wiki/columns/ai-se-testing/").map((page) => page.path),
  ["wiki/columns/ai-se-testing/index.md", "wiki/columns/ai-se-testing/test-generation.md"],
);

const html = markdownToHtml("# Title\n\n- One\n- [[wiki/index.md|Index]]\n\nA **bold** note.");
assert.match(html, /<h1 id="title">Title<\/h1>/);
assert.match(html, /<li>One<\/li>/);
assert.match(html, /data-path="wiki\/index\.md"/);
assert.match(html, /<strong>bold<\/strong>/);
