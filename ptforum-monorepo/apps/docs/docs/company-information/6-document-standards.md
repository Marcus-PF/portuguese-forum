---
title: "Documentation Standards & Workflow"
description: "Internal documentation principles, formatting, and contributor workflow for the Portuguese Forum monorepo"
sidebar_position: 6
---

# 📚 Documentation Standards & Workflow

> 🧠 *Shared knowledge is empowered action.*

The **Portuguese Forum of South Africa** maintains its documentation using **Docusaurus v3.8.1**, integrated within the Nx monorepo (`apps/docs/`). This approach ensures consistent contributor experience, institutional transparency, and cross-functional collaboration — regardless of technical background.

---

## ✍️ Why We Document

- ✅ Enable **developer onboarding** and reduce silos  
- ✅ Preserve **institutional memory** for long-term efforts  
- ✅ Help volunteers and external stakeholders understand our systems  
- ✅ Improve **visibility**, planning, and alignment on deliverables  

---

## 🏗️ Docs Structure

All documentation is grouped by **logical domain** or **project scope**, including:

- `nx-monorepo/`
- `website/`
- `mobile-app/`
- `dashboard/`
- `company-information/`
- `tools/`, `server/`, and others

Each folder contains:

- 📘 A high-level **overview page**
- 📄 Task-based or concept-based `.md` files
- 📚 Sidebar metadata via `_category_.json`
- 🧾 Frontmatter for navigation and search

### 🗂 Example Directory

```bash
apps/docs/docs/
├── company-information/
├── nx-monorepo/
├── dashboard/
├── tools/
├── roadmap/
````

---

## 🧩 Formatting Standards

Every markdown file should follow this structure:

````md
---
title: "Clear, Descriptive Title"
description: "One-line summary (used in search and sidebar tooltips)"
---

# 📘 Title Heading with Emoji

## 🔹 Section Headings

- Use `##` for major sections  
- Use `###` for nested content  

## 💡 Callouts

> 📘 *Use this for insights, best practices, or important tips.*

## 📦 Code Blocks

```ts
// Example: TypeScript snippet
import { doSomething } from '@ptforum/utils'
```

## 📊 Tables

| Field | Description |
|-------|-------------|
| ID | Unique identifier |
| Name | Human-readable label |
````

---

## 🧪 Code & Diagrams

* ✅ Code blocks use Markdown fences (` ```ts `, ` ```bash `, etc.)
* ✅ Use **Mermaid** for flowcharts and system diagrams
* ✅ Prefer `ts`, `bash`, `json`, `md`, and `yaml` for language fences
* ❌ Avoid inline HTML unless required by Docusaurus plugins

---

## 🔍 Contributor Workflow

### ✅ 1. Clone the Monorepo

```bash
git clone git@github.com:nu-graphix/ptforum-monorepo.git
pnpm install
```

### 🛠 2. Create or Edit Docs

* Docs live under: `apps/docs/docs/`
* Use `.md` or `.mdx` depending on content needs
* Nest inside relevant subfolders (e.g., `dashboard/events.md`)

### 🔄 3. Preview Locally

```bash
nx serve docs
```

→ Local dev will run at: `http://localhost:3000`

### 🔁 4. Commit & PR

* Use **semantic commit messages**, e.g.:

  ```
  docs(nx-monorepo): add dependency strategy section
  ```

* Open a Pull Request and assign reviewers or labels

* PRs require approval from a team lead or maintainer

---

## 🧱 Versioning Strategy

* `main` branch = always latest production
* Future version folders may be introduced for:

  * 🛠 Major redesigns
  * 🔄 API version changes
  * 📱 Multi-platform expansion (e.g., mobile app, admin dashboard)

---

## ✏️ Content Review Process

| Stage      | Responsible                    |
| ---------- | ------------------------------ |
| ✍️ Draft   | Any contributor                |
| 🔍 Review  | Docs lead or maintainer        |
| ✅ Merge    | Docs team                      |
| 🚀 Publish | Via CI or Vercel build trigger |

---

## 🧠 Style & Tone Guide

* Use **clear, inclusive language**
* Keep paragraphs short and scannable
* Avoid jargon unless explained
* Emojis 🎉 are encouraged in headings for visual rhythm
* Write as if explaining to someone new — empower, don’t gatekeep

---

## 🛡 Legal & Attribution Guidelines

* All content is licensed and owned by **The Portuguese Forum of South Africa**
* Do not include copied content from proprietary sources
* Attribute external or reused frameworks where applicable (e.g., government docs)

---

## 🔗 Related Pages

* [⚙️ Operations & Processes](./operations.md)
* [📖 Company Overview](./company-overview.md)
* [🗂️ Monorepo Folder Structure](../nx-monorepo/folder-structure.md)

---