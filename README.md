# Data Structure Study Plan - Test Environment

This project provides a Jest testing environment for practicing data structure problems during interview preparation.

## Project Structure

```
├── src/                    # Source code for solutions
│   ├── arrays/            # Array problems
│   ├── linkedLists/       # Linked list problems
│   ├── stacks/            # Stack problems
│   ├── queues/            # Queue problems
│   └── trees/             # Tree problems
├── tests/                 # Test files
│   ├── arrays/            # Array problem tests
│   └── ...                # Other test categories
├── plan/                  # Study plan documentation
├── jest.config.js         # Jest configuration
└── package.json           # Project dependencies
```

## Getting Started

### Installation
```bash
npm install
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (auto-rerun on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run only array tests
npm run test:arrays

# Run a specific test pattern
npm run test:specific -- "Two Sum"
```

### Test File Naming Convention

- Test files should end with `.spec.js` or `.test.js`
- Place test files in the `tests/` directory
- Mirror the source structure: `src/arrays/twoSum.js` → `tests/arrays/twoSum.spec.js`

## Example Usage

1. **Implement your solution** in `src/arrays/twoSum.js`
2. **Run the tests** with `npm test`
3. **See results** and iterate on your solution

## Available Test Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate coverage report |
| `npm run test:arrays` | Run only array-related tests |

## Study Workflow

1. Read the problem in your study plan
2. Implement the solution in the appropriate `src/` file
3. Run tests to verify your solution
4. Refactor and optimize based on test feedback
5. Move to the next problem

Happy coding! 🚀