# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm test                  # Run all tests once
npm run test:watch        # Watch mode
npm run test:coverage     # Coverage report
npm run test:arrays       # Arrays tests only
npm run test:specific     # Run tests matching a name pattern (edit package.json testNamePattern)
npm run c                 # Clear Jest cache
```

To run tests for a single problem:
```bash
npx jest week5/NaryTreePostorderTraversal --watch
```

## Repository Structure

This is a curriculum-based LeetCode study plan organized by week and data structure topic:

| Week | Topic |
|------|-------|
| week0 | Intro / setup |
| week1 | Arrays |
| week2 | Linked Lists |
| week3 | Stacks & Queues |
| week4 | Hash Tables |
| week5 | Binary Trees |

Each problem lives in its own folder (PascalCase naming, e.g. `ThreeSum`, `NaryTreePostorderTraversal`). Shared utilities are in `utils/` (e.g. `MinHeap.js`).

## Problem Folder Pattern

Every problem folder follows this convention:

```
ProblemName/
├── question.md              # LeetCode problem statement
├── solution.js              # Primary solution
├── solution1.js             # Alternative solutions (optional)
├── solution2.js
├── testData.js              # Categorized test cases
├── problemName.spec.js      # Jest test file
└── complexity-analysis.md   # Time/space analysis (added after solutions)
```

**testData.js** — exports an object with category keys, each an array of `{ description, input, expected }` objects.

**solution.js** — CommonJS (`module.exports`), JSDoc `@param`/`@return`, single responsibility.

**complexity-analysis.md** — one `##` section per solution, time + space bullets, summary table, recommendation. See `week1/Shortest_Palindrome/complexity-analysis.md` as the reference format.

## Adding a New Problem

See `INSTRUCT.md` for the prompt template used to generate new problems. The reference implementation to mirror is `week5/ValidateBinarySearchTree`.

## Branch & PR Workflow

- Branch from `master`, name: `feature/<ProblemName>-<topic>`
- One PR per problem or analysis addition
- Squash merge, delete branch after merge
