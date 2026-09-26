---
name: git-workflow
description: >
  Conventional commits, versioning with changelogen, and release workflow.
  Trigger: git commit, versioning, release, changelog.
---

# Git Workflow - Skill

## Conventional Commits

Format: `type(scope): message` (lowercase, no period at end)

| Type | When to use |
| ---- | ----------- |
| `feat` | New feature |
| `fix` | Bug fix |
| `chore` | Maintenance (deps, config, tooling) |
| `docs` | Documentation only |
| `refactor` | Refactor without behavior change |
| `test` | Adding or updating tests |
| `style` | Formatting, no logic change |
| `perf` | Performance improvement |

```bash
# ✅ Correct
feat(users): add role-based access control
fix(data-table): preserve filters after mutation
chore(deps): upgrade tanstack-query to v5.90

# ❌ Incorrect
Fixed bug in users
feat: Added new feature.
FIX(Users): Stuff
```

## Breaking Changes

```bash
# Append ! or add BREAKING CHANGE footer
feat!: remove legacy auth endpoints

# Or via footer
feat(auth): migrate to OAuth2

BREAKING CHANGE: removed /api/v1/login endpoint
```

## Semver Impact

| Commit type | Version bump |
| ----------- | ------------ |
| `fix`, `perf` | patch (1.0.0 → 1.0.1) |
| `feat` | minor (1.0.1 → 1.1.0) |
| `BREAKING CHANGE` | major (1.1.0 → 2.0.0) |
| `chore`, `docs`, `style`, `refactor`, `test` | no bump |

## Release Process

There is no release command: every push to `main` is a release, cut by GitHub Actions (`.github/workflows/deploy.yml`).

1. If the push has `feat`, `fix`, `perf` or a breaking change since the last tag, `changelogen` bumps `package.json` and `CHANGELOG.md`.
2. The bot commits `chore(release): vX.Y.Z` as a merge of the push into the previous release, so the graph shows each version as its own branch. It tags it and pushes to `main`.
3. The build goes to the `production` branch, which the server pulls on its own.

> Run `git pull` after each release, before the next commit. Never push a `chore(release)` commit by hand: the workflow skips those, so nothing would deploy.

While the version is `0.x`, changelogen bumps one step lower: `feat` → patch, breaking → minor.

## Commitlint (enforced via Husky)

The `commit-msg` hook runs `bunx commitlint` on every commit. Commits that don't follow conventional format are **rejected**.

```bash
# ✅ Passes
git commit -m "feat(auth): add two-factor authentication"

# ❌ Rejected by commitlint
git commit -m "added 2fa"
```

## Scopes (common)

Use the module or feature area as scope:

```
auth, users, roles, data-table, layout, ui, deps, config, migrations
```

Scope is optional but recommended for clarity.

## Keywords

git, commit, conventional-commits, changelogen, release, versioning, changelog, semver, commitlint
