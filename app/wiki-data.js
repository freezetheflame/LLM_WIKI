export const wikiManifest = {
  title: "LLM Wiki Starter",
  updated: "2026-05-03",
  pages: [
    {
      path: "wiki/index.md",
      title: "Wiki Index",
      tags: ["home", "navigation"],
      summary: "Content catalog for the whole LLM-maintained wiki.",
    },
    {
      path: "wiki/overview.md",
      title: "Overview",
      tags: ["synthesis"],
      summary: "The standing synthesis of this vault and how it should evolve.",
    },
    {
      path: "wiki/log.md",
      title: "Log",
      tags: ["operations"],
      summary: "Append-only activity ledger for ingests, queries, and lint passes.",
    },
    {
      path: "wiki/sources/karpathy-llm-wiki.md",
      title: "Karpathy LLM Wiki Pattern",
      tags: ["source", "pattern"],
      summary: "A local synthesis of Andrej Karpathy's LLM wiki idea.",
    },
    {
      path: "wiki/concepts/compilation-over-retrieval.md",
      title: "Compilation Over Retrieval",
      tags: ["concept"],
      summary: "Why this wiki compiles durable knowledge instead of only retrieving chunks.",
    },
    {
      path: "wiki/workflows/ingest.md",
      title: "Ingest Workflow",
      tags: ["workflow"],
      summary: "How to add one new source and update the wiki coherently.",
    },
    {
      path: "wiki/workflows/query.md",
      title: "Query Workflow",
      tags: ["workflow"],
      summary: "How to answer questions from the wiki and file useful answers back.",
    },
    {
      path: "wiki/workflows/lint.md",
      title: "Lint Workflow",
      tags: ["workflow"],
      summary: "How to health-check links, contradictions, stale claims, and gaps.",
    },
  ],
};
