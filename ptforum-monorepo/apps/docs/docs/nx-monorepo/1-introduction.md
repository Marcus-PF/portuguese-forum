---
sidebar_position: 1
title: Introduction
description: Overview of the @ptforum Nx monorepo, rationale, and project structure
---

# 🧱 @ptforum Nx Monorepo – Full Documentation

Welcome to the documentation hub for the Portuguese Forum's Nx Monorepo. This space is built to support all contributors — technical or non-technical — in understanding how our codebase is structured, why Nx was chosen, and how to build, test, and scale features collaboratively.

---

## 🚀 1. Introduction to the Monorepo

### 1.1 🧩 What is a Monorepo?

A **monorepo** (short for *monolithic repository*) is a single Git repository that contains multiple projects. It enables:

- Unified tooling and shared configuration
- Efficient dependency management
- Code reuse across applications and libraries
- Better visibility across the development lifecycle

We use a **modular structure** to organize applications and reusable libraries into well-defined scopes.

---

### 1.2 ⚙️ Why We Chose Nx

Nx offers a mature monorepo framework designed for **developer productivity**, **scalability**, and **modular codebases**. Here's why it's central to our architecture:

| Feature | Benefit |
|--------|---------|
| 🧱 **Modular Architecture** | Enforces boundaries with `tags` and `project.json` metadata |
| 💡 **Developer Experience** | Powerful CLI, task caching, dependency graphs, and intelligent code generation |
| 🔧 **Standardized Tooling** | Centralized build, lint, test, and formatting pipelines |
| ⚡ **Incremental CI** | `affected:*` commands improve CI performance |
| 📊 **Visual Insights** | Interactive dependency graphs for better navigation |

> Nx’s opinionated structure supports our **multi-platform** ambitions, where **admin dashboards**, **community portals**, and **documentation** are all aligned within one scalable codebase.

---

### 1.3 🗂 Monorepo Layout Overview

The monorepo is organized by purpose:

#### 🧾 Applications (`/apps/`)

| App | Description |
|-----|-------------|
| `apps/forum` | The main **public-facing website** (built with Next.js 15, React 19) |
| `apps/admin` | **Multi-tenant admin dashboard** for internal operations |
| `apps/api` | **Backend API** powered by [Hono](https://hono.dev/) and TypeScript |
| `apps/docs` | The official **documentation site** using Docusaurus v3.8.1 |

#### 📦 Libraries (`/libs/`)

| Library | Purpose |
|---------|---------|
| `libs/shared` | Common utilities, TypeScript types, reusable components |
| `libs/forum`, `libs/admin`, `libs/membership` | Domain-specific logic grouped for clarity |
| `libs/content`, `libs/alerts`, `libs/integrations` | Feature-driven modules supporting apps |

> We apply **tags and boundaries** to every library to enforce architectural integrity.

---

### 🌍 Mission-Driven Architecture

This monorepo is not just technical — it's aligned with PFSA’s goals:

- 🇵🇹 Multilingual support (English + Portuguese)
- 🧑‍🤝‍🧑 Community-first development approach
- 📱 Accessible tools across web and mobile
- 🛠 Designed to scale from local events to national platforms

> *Every line of code supports our mission to connect and empower the Luso-South African community.*

---

## 🔗 Next Steps

Continue with:

- [📁 Folder Structure](./2-folder-structure.md)
- [🧰 Tooling & Environment](./3-environment.md)
- [📦 Dependency Management](./5-dependency.md)
