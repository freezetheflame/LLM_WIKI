# RepoMemoryTest Research Progress

## Current Stage

Stage: **idea captured / pre-literature-review**.

The working idea is [[wiki/columns/ai-se-testing/research-proposals/repomemorytest.md|RepoMemoryTest: Project-Memory-Guided Agentic Regression Testing]].

## What We Have

- A wiki column for AI-assisted automated software engineering testing.
- A first reading list covering SWE-bench, SWE-agent, SWE-bench Verified, TestGen-LLM, CODAMOSA, ChatUniTest, TestPilot, TestGenEval, and SWE-CI.
- A working thesis: useful AI testing systems should combine generation with verification and preserve validated project memory.
- A local wiki agent memory model: repo memory plus local private overlay.

## Immediate Next Work

- Expand related work around memory-augmented agents, CI-oriented SWE agents, test generation quality filters, and long-running repository maintenance.
- Define a minimal pilot dataset: a few small repositories with stable test commands and historical failures.
- Design memory schemas for commands, failure signatures, flaky tests, environment traps, module risk, and generated-test provenance.
- Build a first prototype loop that only selects and runs tests before attempting test generation.

## Open Risks

- The contribution may look too systems-oriented unless the evaluation is crisp.
- Benchmarks may be noisy if repositories are hard to set up.
- Generated test quality needs stronger signals than coverage alone.
- Long-running evaluation can become expensive in model calls and CI time.

## Next Milestone

Produce a two-page research note with:

- precise research questions,
- related-work table,
- pilot benchmark design,
- first memory schema,
- minimal prototype plan.
