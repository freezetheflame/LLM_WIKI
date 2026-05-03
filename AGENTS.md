# LLM Wiki Operating Rules

This repository is a local LLM-maintained wiki inspired by Andrej Karpathy's public LLM wiki pattern.

## Directories

- `raw/` is immutable source storage. Add source material here, but do not rewrite it for style.
- `wiki/` is the compiled knowledge layer. Pages should be concise, cross-linked, and useful without rereading every source.
- `wiki/index.md` is the navigation root. Update it whenever adding, renaming, or deleting pages.
- `wiki/log.md` is append-only. Record important ingests, query-derived edits, and lint passes.
- `app/` is the static browser for reading the wiki locally.
- `tools/` contains local scripts.

## Maintenance Protocol

1. Start from `wiki/index.md`, then read the smallest set of pages needed.
2. When ingesting a source, preserve it under `raw/` first.
3. Compile durable claims into `wiki/`; do not leave isolated notes that only repeat the source.
4. Prefer wiki links like `[[wiki/concepts/compilation-over-retrieval.md|Compilation Over Retrieval]]`.
5. If a query produces a reusable answer, update or create a wiki page and append `wiki/log.md`.
6. Mark uncertain claims explicitly with source paths or links.
7. Keep pages focused. Split a page when it starts covering two different jobs.

## Page Template

Each concept page should include:

- Summary
- Why it matters
- Key details
- Related pages
- Sources

## Quality Bar

- The index can route a new maintainer to every important page.
- Source-backed pages name where important claims came from.
- No page should depend on invisible chat history.
- The browser app should pass `npm test` and `npm run check` after JavaScript edits.
