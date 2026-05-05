# Decisions

## 2026-05-04: Use Repo Memory plus Local Private Overlay

Shared project memory should live in `agent/memory/` so multiple computers can sync the wiki agent's context through GitHub. Private notes, secrets, and sensitive user data should live in `.wiki-agent/`, which is ignored by git.

## 2026-05-04: Treat This Repository as Public

All committed source notes, memory, and wiki pages must be safe for a public GitHub repository.

## 2026-05-04: Separate Reader Content From Maintenance Content

Reader-facing wiki pages should be visible in the default browser navigation. Agent skills, operating rules, and project maintenance pages should be marked as maintenance content and kept out of the default reader view.

## 2026-05-05: Use RepoMemoryTest As First Paper Seed

The first serious research direction is `RepoMemoryTest: Project-Memory-Guided Agentic Regression Testing`. Store its proposal, progress, and experiment design under the AI SE Testing column before starting detailed literature collection and prototype work.
