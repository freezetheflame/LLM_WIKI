# RepoMemoryTest: Project-Memory-Guided Agentic Regression Testing

## One-Line Pitch

RepoMemoryTest studies whether a software testing agent becomes more effective when it carries structured project memory across repeated testing, CI, and regression tasks.

## Motivation

Many AI testing systems focus on generating tests from a prompt. Real software projects need more than one-shot generation. They need an agent that remembers reliable test commands, recurring failure signatures, flaky tests, environment traps, module risk, and why previous generated tests were accepted or rejected.

## Research Question

Can structured project memory improve an AI testing agent's ability to select tests, diagnose failures, generate useful regression tests, and maintain a repository over time?

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

- [[wiki/columns/ai-se-testing/swe-agent-evaluation.md|SWE Agent Evaluation]]
- [[wiki/columns/ai-se-testing/ci-and-regression.md|CI And Regression]]
- [[wiki/columns/ai-se-testing/test-generation.md|Test Generation]]
- [[wiki/concepts/memory-harness.md|Memory Harness]]

## Current Status

This is a research seed. No experiment has been run yet. The next step is structured related-work collection and a small pilot benchmark.
