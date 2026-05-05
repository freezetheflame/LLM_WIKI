# RepoMemoryBench / RepoMemoryTest: Project-Memory-Guided Agentic Regression Testing

## One-Line Pitch

RepoMemoryBench first measures whether current widely used software agents fail to preserve testing-specific project memory across repeated repository tasks. RepoMemoryTest then studies whether a testing-specific memory harness improves agentic regression testing.

## Motivation

Many AI testing systems focus on generating tests from a prompt. Real software projects need more than one-shot generation. They need an agent that remembers reliable test commands, recurring failure signatures, flaky tests, environment traps, module risk, and why previous generated tests were accepted or rejected.

## Research Agenda

This should be treated as a two-stage research program rather than a single method-first paper.

### Stage 1: RepoMemoryBench

RepoMemoryBench is a measurement and benchmark paper. It should ask whether current coding and SWE agents differ in project-memory-aware regression testing tasks.

Expected contribution:

- define project-memory-aware testing tasks,
- evaluate representative agents in repeated repository scenarios,
- identify failure modes around test command discovery, failure diagnosis, flaky tests, environment traps, regression selection, and repeated exploration,
- show why testing needs a memory harness rather than generic task history.

### Stage 2: RepoMemoryTest

RepoMemoryTest is the method paper. It should introduce a structured testing memory harness and agentic regression loop, then evaluate them on RepoMemoryBench.

Expected contribution:

- testing-specific memory schema,
- memory update and trust rules grounded in test execution,
- comparison against stateless agents and generic retrieval memory,
- analysis of when structured testing memory helps or hurts.

## Research Questions

- RQ1: How do current agents perform on repeated repository testing tasks that require project-specific memory?
- RQ2: Which testing-memory requirements are not captured by generic agent memory?
- RQ3: Can a structured testing memory harness improve test selection, failure diagnosis, regression detection, and generated-test quality?
- RQ4: What are the costs and risks of memory-guided testing agents?

## Core Hypothesis

A testing agent with structured project memory will outperform a stateless agent and a naive retrieval-memory agent on long-running regression tasks, especially when repositories contain repeated failure modes, non-obvious test commands, flaky tests, and environment-specific setup constraints.

## Proposed System

The system has three layers:

- **Testing Memory Harness**: structured memory for commands, failure signatures, flaky tests, module risk, environment traps, and generated-test provenance.
- **Agentic Regression Loop**: read memory, inspect a change or failure, select focused tests, run tests, interpret output, generate or repair tests, broaden validation, update memory.
- **Evaluation Harness**: compare memory strategies across repeated repository tasks and measure correctness, regression detection, test quality, cost, and stability.

## Baselines

- Stateless testing agent.
- Naive vector-memory testing agent.
- Structured project-memory testing agent.
- Hybrid memory testing agent that combines structured records with semantic retrieval.

## Agent Selection Principles

Agent choice should not be based on popularity alone. Agents should be:

- widely used or academically recognized,
- reproducible with fixed versions and configurations,
- scriptable enough for benchmark execution,
- capable of exposing logs and actions,
- comparable under a common task protocol,
- representative of different agent paradigms.

Candidate categories:

- stateless LLM baseline,
- CLI coding agent,
- open-source autonomous SWE agent such as SWE-agent or OpenHands,
- IDE-like agent if it can be scripted,
- retrieval-memory baseline,
- future structured testing-memory agent.

## Candidate Metrics

- Test command selection accuracy.
- Compilation and execution success.
- Regression detection rate.
- Coverage delta.
- Mutation score or fault-revealing signal.
- Flaky-test rate.
- CI pass rate after agent action.
- Token, time, and tool-call cost.
- Human review acceptability of generated tests.

## Target Venues

- Testing and software engineering: ISSTA, ICST, ASE, FSE, ICSE.
- AI conferences if the method and experiments become strong enough: ICLR, NeurIPS.

## Initial Related Work Anchors

- [[wiki/columns/ai-se-testing/testing-memory-related-work-map.md|Testing Memory Related Work Map]]
- [[wiki/columns/ai-se-testing/swe-agent-evaluation.md|SWE Agent Evaluation]]
- [[wiki/columns/ai-se-testing/ci-and-regression.md|CI And Regression]]
- [[wiki/columns/ai-se-testing/test-generation.md|Test Generation]]
- [[wiki/concepts/memory-harness.md|Memory Harness]]

## Current Status

This is a research seed. No experiment has been run yet. The next step is structured related-work collection around agent memory and testing-specific historical knowledge, followed by a small pilot benchmark.
