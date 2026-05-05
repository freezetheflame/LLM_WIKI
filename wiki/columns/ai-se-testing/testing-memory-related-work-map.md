# Testing Memory Related Work Map

## Summary

The core framing is that memory for testing should not be treated as a generic agent-memory variant. Testing memory has its own structure: it is execution-grounded, reliability-aware, and regression-oriented.

## General Agent Memory

General agent memory usually focuses on preserving context across tasks or conversations.

Typical memory targets:

- user preferences,
- past interactions,
- factual notes,
- task summaries,
- tool-use traces,
- retrieved documents,
- reusable skills.

Representative lines to investigate:

- long-term conversational memory,
- generative agents memory streams,
- Reflexion-style verbal feedback,
- skill libraries such as Voyager,
- MemGPT / Letta-style memory management,
- RAG-based agent memory,
- episodic, semantic, and procedural memory for agents.

Likely limitation for this project:

- Generic memory often lacks executable validation.
- Generic memory usually does not model test reliability, flakiness, command cost, or regression scope.
- Generic memory may retrieve similar text but fail to decide which test command should be trusted.

## Testing-Specific Historical Knowledge

Software testing has long used historical and structured signals, even without LLM agents.

Relevant areas:

- regression test selection,
- test prioritization,
- flaky test detection,
- CI failure diagnosis,
- fault localization,
- coverage-guided testing,
- mutation testing,
- test history and failure history mining.

Likely limitation for this project:

- Traditional testing history is not usually packaged as an agent-facing memory interface.
- It may optimize batch test selection but not multi-step interaction, explanation, or generated-test provenance.
- It often assumes fixed pipelines rather than exploratory agent behavior.

## Gap

The research gap is at the intersection:

- Existing agent memory is too generic for testing.
- Existing testing history is not designed as a memory harness for LLM agents.
- Agentic testing needs memory that can guide action and be updated only after execution-backed evidence.

## Testing Memory Requirements

Memory for testing should be:

- **Execution-grounded**: observations should be tied to commands, outputs, and validation results.
- **Reliability-aware**: memory should distinguish real failures from flaky tests and environment failures.
- **Regression-oriented**: memory should help choose tests for future changes, not only summarize past tasks.
- **Cost-aware**: memory should record command scope and runtime cost.
- **Provenance-aware**: generated tests should record trigger, validation, and review status.
- **Trust-calibrated**: memory should preserve confidence and avoid overusing stale or weak evidence.

## Research Angle

- **RepoMemoryBench**: evaluate whether current agents fail on project-memory-aware regression testing tasks.
- **RepoMemoryTest**: propose a testing-specific memory harness and agent loop.

## Working Claim

Memory for testing must be execution-grounded, reliability-aware, and regression-oriented.
