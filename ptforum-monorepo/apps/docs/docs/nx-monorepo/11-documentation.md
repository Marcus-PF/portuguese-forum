---
sidebar_position: 11
title: Documentation & Contribution
description: Contributor workflow, docs structure, and versioning strategy for the @ptforum Nx Monorepo
---

# 📂 11. Documentation & Contribution

This guide outlines how to contribute to the Portuguese Forum monorepo — including documentation conventions, code standards, versioning, and deprecation workflows.

---

## 🗂 11.1 Documentation Structure

The `@ptforum/docs` app is powered by **Docusaurus** and is structured into functional, modular files.

| File | Purpose |
|------|---------|
| `introduction.md` | Overview of the monorepo and motivation |
| `folder-structure.md` | File and project layout explanation |
| `environment-setup.md` | Local dev setup guide |
| `workspace-tooling.md` | Nx CLI, linting, and formatting tooling |
| `dependency-graph.md` | Visualizing Nx graph and affected workflows |
| `generators-and-libs.md` | Creating new apps and shared/domain libraries |
| `branching-and-ci.md` | CI/CD and branching strategy |
| `scripts.md` | Common Nx + pnpm commands and aliases |
| `troubleshooting.md` | Common issues and developer FAQs |
| `security-compliance.md` | Security, compliance, and auth strategy |
| `testing.md` | Unit, integration, and E2E test strategy |
| `api.md` | Public API reference (via Swagger/Redoc — planned) |

> 📘 Files are located under: `apps/docs/docs/nx-monorepo/`

---

## 🤝 11.2 Contribution Guidelines

Refer to the `CONTRIBUTING.md` at the repo root for complete onboarding and code style rules. Below is a quickstart checklist:

### ✅ Onboarding Checklist

1. **Clone the monorepo**

```bash
git clone https://github.com/portugueseforum/monorepo
cd monorepo
pnpm install
````

2. **Setup environment**

```bash
cp .env.example .env
# Populate values for Sanity, PayFast, etc.
```

3. **Explore project graph**

```bash
pnpm nx graph
```

4. **Run a dev server**

```bash
pnpm nx serve forum
```

5. **Connect third-party accounts**

> Needed for Sanity Studio, PayFast, Cloudflare Workers, and Vercel deployment preview

---

### 💬 Contributing Etiquette

* Use **conventional commit messages**:

  * `feat(auth): add TOTP support`
  * `fix(forms): correct Zod schema bug`
* Include **unit or integration tests** where applicable
* Update any **related documentation**
* Assign a reviewer as per `CODEOWNERS`

---

## 📦 11.3 Versioning Strategy

| Item                 | Method                                                                                          |
| -------------------- | ----------------------------------------------------------------------------------------------- |
| **Shared Libraries** | Semantic Versioning (e.g., `1.2.0`) with [Changesets](https://github.com/changesets/changesets) |
| **Applications**     | Deployed independently, tagged by CI (e.g., `forum@v1.5.3`)                                     |
| **Release Notes**    | Added to `CHANGELOG.md` on each tagged release                                                  |

### ✏️ Changeset Workflow

```bash
pnpm changeset         # Add a new changelog entry
pnpm changeset version # Apply versions to packages
```

> Changelogs are auto-published with GitHub Actions.

---

## ⛔ 11.4 Deprecation Strategy

| Step          | Practice                                                        |
| ------------- | --------------------------------------------------------------- |
| **Marking**   | Use `@deprecated` JSDoc comments and update related `.md` files |
| **Docs**      | Add a note in relevant documentation sections                   |
| **Removal**   | Remove deprecated features after **two minor releases**         |
| **Migration** | Offer migration paths or fallback guidance in docs              |

---

## 🧭 Related Pages

* [Testing](./10-testing.md)
* [Security](./9-security.md)
* [Tooling](./4-tooling.md)
* [CI/CD](./7-ci-cd.md)