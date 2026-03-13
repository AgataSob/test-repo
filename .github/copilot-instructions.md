# Commit Message Guidelines (Conventional Commits)

To keep our git history consistent and easier to understand, follow the **Conventional Commits** format for all commits.

## ✅ Commit message structure

```
<type>(<scope?>): <short summary>

<body?>

<footer?>
```

- **type** is required.
- **scope** is optional (e.g., `api`, `ui`, `tests`, `build`).
- **short summary** should be written in **imperative mood** (e.g., "add", "fix", "update").
- Keep the summary line under ~72 characters.

## 🔧 Common types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Formatting, missing semi-colons, white-space, etc; no production code change
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding or updating tests
- `build`: Changes that affect the build system or external dependencies
- `chore`: Other changes that don’t modify src or test files (e.g., tooling, config)

## 🧪 Test framework
- This repo uses **Playwright Test** for end-to-end testing.
- When adding or updating tests, review `playwright.config.ts` to ensure the configuration (baseURL, projects, reporters, etc.) matches the testing needs.

## ✍️ Examples

- `feat(ui): add new datepicker component`
- `fix(api): handle null response from auth endpoint`
- `test: add Playwright smoke test for home page`
- `chore: update dependency versions`

## 📝 Notes

- If a commit includes multiple unrelated changes, consider splitting it into multiple commits.
- Use the body section to explain **why** the change was made when it’s not obvious from the summary.
- Use the footer for breaking changes (e.g., `BREAKING CHANGE: ...`) or issue references (e.g., `Closes #123`).
