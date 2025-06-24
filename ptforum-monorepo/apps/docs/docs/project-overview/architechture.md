
# Monorepo Structure (Work in Progress)
## @ptforum/source
### Root Files                          .
                                        ├── .editorconfig
                                        ├── .gitignore
                                        ├── .nvmrc
                                        ├── .prettierrc
                                        ├── commitlint.config.cjs
                                        ├── eslint.config.mjs
                                        ├── nx.json
                                        ├── package.json
                                        ├── pnpm-lock.yaml
                                        ├── pnpm-workspace.yaml
                                        ├── postcss.config.mjs
                                        ├── tsconfig.base.json
                                        ├── tsconfig.json
                                        ├── vitest.workspace.ts
                                        ├── .env.example
                                        ├── README.md
                                        ├── CONTRIBUTING.md
                                        ├── LICENSE
                                        ├── CODEOWNERS
                                        │
                                        ├── .husky/
                                        │   ├── pre-commit
                                        │   └── commit-msg
                                        │
                                        ├── .github/
                                        │   └── workflows/
                                        │       ├── build.yml
                                        │       ├── lint.yml
                                        │       └── test.yml
                                        │
                                        ├── .nx/
                                        │   └── ...
                                        │
## Applications                         ├── apps/
### @ptforum/forum                      │   ├── forum/          # Next.js 15 - Public Website (App Router)
                                        │   │   ├── src/
                                        │   │   │   └── app/
                                        │   │   │       └── [locale]/
                                        │   │   │           ├── page.tsx
                                        │   │   │           ├── layout.tsx
                                        │   │   │           ├── about/
                                        │   │   │           │   └── page.tsx
                                        │   │   │           ├── events/
                                        │   │   │           │   └── page.tsx
                                        │   │   │           ├── news/
                                        │   │   │           │   └── page.tsx
                                        │   │   │           ├── membership/
                                        │   │   │           │   └── page.tsx
                                        │   │   │           ├── community/
                                        │   │   │           │   └── page.tsx
                                        │   │   │           ├── language/
                                        │   │   │           │   └── page.tsx
                                        │   │   │           ├── spotlight/
                                        │   │   │           │   └── page.tsx
                                        │   │   │           ├── contact/
                                        │   │   │           │   └── page.tsx
                                        │   │   │           └── error.tsx
                                        │   │   ├── .env.local
                                        │   │   ├── eslint.config.mjs
                                        │   │   ├── index.d.ts
                                        │   │   ├── next-env.d.ts
                                        │   │   ├── next.config.js
                                        │   │   ├── package.json
                                        │   │   ├── postcss.config.mjs
                                        │   │   ├── project.json
                                        │   │   ├── tsconfig.json
                                        │   │   ├── tsconfig.spec.json
                                        │   │   ├── vite.config.ts
                                        │   │   └── README.md
                                        │   │
### @ptforum/api                        │   ├── api/            # Hono - Backend API
                                        │   │   ├── src/
                                        │   │   │   ├── index.ts
                                        │   │   │   ├── routes/
                                        │   │   │   │   ├── auth/
                                        │   │   │   │   │   └── auth.ts
                                        │   │   │   │   ├── user/
                                        │   │   │   │   │   └── user.ts
                                        │   │   │   │   ├── post/
                                        │   │   │   │   │   └── post.ts
                                        │   │   │   │   ├── event/
                                        │   │   │   │   │   └── event.ts
                                        │   │   │   │   ├── club/
                                        │   │   │   │   │   └── club.ts
                                        │   │   │   │   ├── spotlight/
                                        │   │   │   │   │   └── spotlight.ts
                                        │   │   │   │   ├── membership/
                                        │   │   │   │   │   └── membership.ts
                                        │   │   │   │   ├── upload/
                                        │   │   │   │   │   └── upload.ts
                                        │   │   │   │   ├── webhook/
                                        │   │   │   │   │   └── webhook.ts
                                        │   │   │   │   └── index.ts
                                        │   │   │   ├── middleware/
                                        │   │   │   │   ├── auth.ts
                                        │   │   │   │   ├── rateLimit.ts
                                        │   │   │   │   ├── cors.ts
                                        │   │   │   │   └── logger.ts
                                        │   │   │   ├── services/
                                        │   │   │   │   ├── user.service.ts
                                        │   │   │   │   ├── post.service.ts
                                        │   │   │   │   └── ...
                                        │   │   │   ├── db/
                                        │   │   │   │   ├── client.ts
                                        │   │   │   │   └── models/
                                        │   │   │   ├── schemas/
                                        │   │   │   │   └── ...
                                        │   │   │   ├── utils/
                                        │   │   │   │   └── ...
                                        │   │   │   ├── constants/
                                        │   │   │   │   └── ...
                                        │   │   │   └── config.ts
                                        │   │   ├── .env.local
                                        │   │   ├── eslint.config.mjs
                                        │   │   ├── index.d.ts
                                        │   │   ├── next-env.d.ts
                                        │   │   ├── next.config.js
                                        │   │   ├── package.json
                                        │   │   ├── postcss.config.mjs
                                        │   │   ├── project.json
                                        │   │   ├── tsconfig.json
                                        │   │   ├── tsconfig.spec.json
                                        │   │   ├── vite.config.ts
                                        │   │   └── README.md
                                        │   │
### @ptforum/docs                       │   ├── docs/           # Docusaurus - Documentation Site
                                        │   │   ├──
                                        │   │   └──
                                        │   │
### @ptforum/admin                      │   └── admin/          # Next.js 15 - Admin Dashboard (App Router)
                                        │       ├──
                                        │       └──
                                        │
## Libraries                            ├── libs/
### Shared Libraries                    │   ├── shared/
#### @ptforum/types                     │   │   ├── types/           # @ptforum/types - Branded types, DTOs
                                        │   │   │   ├── src/
                                        │   │   │   │   ├── index.ts
                                        │   │   │   │   ├── api/
                                        │   │   │   │   │   ├── user-public.dto.ts
                                        │   │   │   │   │   ├── post-public.dto.ts
                                        │   │   │   │   │   └── event-public.dto.ts
                                        │   │   │   │   ├── brand/
                                        │   │   │   │   │   ├── user-id.ts
                                        │   │   │   │   │   ├── post-id.ts
                                        │   │   │   │   │   ├── comment-id.ts
                                        │   │   │   │   │   ├── tag-id.ts
                                        │   │   │   │   │   ├── club-id.ts
                                        │   │   │   │   │   ├── event-id.ts
                                        │   │   │   │   │   ├── alert-id.ts
                                        │   │   │   │   │   └── membership-id.ts
                                        │   │   │   │   ├── club/
                                        │   │   │   │   │   └── club.ts
                                        │   │   │   │   ├── comment/
                                        │   │   │   │   │   └── comment.ts
                                        │   │   │   │   ├── common/
                                        │   │   │   │   │   ├── post.ts
                                        │   │   │   │   │   └── common.ts
                                        │   │   │   │   ├── tag/
                                        │   │   │   │   │   └── tag.ts
                                        │   │   │   │   ├── user/
                                        │   │   │   │   │   ├── role.ts
                                        │   │   │   │   │   └── user.ts
                                        │   │   │   │   ├── event/
                                        │   │   │   │   │   └── event.ts
                                        │   │   │   │   ├── alert/
                                        │   │   │   │   │   └── alert.ts
                                        │   │   │   │   └── membership/
                                        │   │   │   │       └── membership.ts
                                        │   │   │   ├── project.json
                                        │   │   │   ├── tsconfig.json
                                        │   │   │   ├── vite.config.ts
                                        │   │   │   └── README.md
                                        │   │   │
#### @ptforum/contracts                 │   │   ├── contracts/       # @ptforum/contracts - Zod schemas
                                        │   │   │   ├── src/
                                        │   │   │   │   ├── index.ts
                                        │   │   │   │   ├── user/
                                        │   │   │   │   │   ├── user.schema.ts
                                        │   │   │   │   │   ├── auth.schema.ts
                                        │   │   │   │   │   └── user-public.dto.ts
                                        │   │   │   │   ├── post/
                                        │   │   │   │   │   ├── post.schema.ts
                                        │   │   │   │   │   └── post-public.dto.ts
                                        │   │   │   │   ├── club/
                                        │   │   │   │   │   └── club.schema.ts
                                        │   │   │   │   ├── event/
                                        │   │   │   │   │   └── event.schema.ts
                                        │   │   │   │   ├── membership/
                                        │   │   │   │   │   └── membership.schema.ts
                                        │   │   │   │   ├── alert/
                                        │   │   │   │   │   └── alert.schema.ts
                                        │   │   │   │   ├── spotlight/
                                        │   │   │   │   │   └── spotlight.schema.ts
                                        │   │   │   │   ├── event/
                                        │   │   │   │   │   └── event.ts
                                        │   │   │   │   ├── alert/
                                        │   │   │   │   │   └── alert.ts
                                        │   │   │   │   └── shared/
                                        │   │   │   │       └── pagination.schema.ts
                                        │   │   │   ├── project.json
                                        │   │   │   ├── tsconfig.json
                                        │   │   │   ├── vite.config.ts
                                        │   │   │   └── README.md
                                        │   │   │
#### @ptforum/env                       │   │   ├── env/             # @ptforum/env - Zod env validation per runtime
                                        │   │   │   ├── src/
                                        │   │   │   │   ├── index.ts
                                        │   │   │   │   ├── node/
                                        │   │   │   │   │   ├── schema.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── browser/
                                        │   │   │   │   │   ├── schema.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── edge/
                                        │   │   │   │   │   ├── schema.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   └── utils/
                                        │   │   │   │       └── pagination.schema.ts
                                        │   │   │   ├── project.json
                                        │   │   │   ├── tsconfig.json
                                        │   │   │   ├── vite.config.ts
                                        │   │   │   └── README.md
                                        │   │   │
#### @ptforum/utils                     │   │   ├── utils/           # @ptforum/utils - Pure utilities
                                        │   │   │   ├── src/
                                        │   │   │   │   ├── index.ts
                                        │   │   │   │   ├── date/
                                        │   │   │   │   │   ├── format.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── string/
                                        │   │   │   │   │   ├── slug.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── error/
                                        │   │   │   │   │   ├── format.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── api/
                                        │   │   │   │   │   ├── response.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   └── classnames/
                                        │   │   │   │       ├── cn.ts
                                        │   │   │   │       └── index.ts
                                        │   │   │   ├── project.json
                                        │   │   │   ├── tsconfig.json
                                        │   │   │   ├── vite.config.ts
                                        │   │   │   └── README.md
                                        │   │   │
#### @ptforum/logger                    │   │   ├── logger/          # @ptforum/logger - Console/structured logging
                                        │   │   │   ├── src/
                                        │   │   │   │   ├── index.ts
                                        │   │   │   │   ├── config.ts
                                        │   │   │   │   ├── types.ts 
                                        │   │   │   │   └── utils.ts
                                        │   │   │   ├── project.json
                                        │   │   │   ├── tsconfig.json
                                        │   │   │   ├── vite.config.ts
                                        │   │   │   └── README.md
                                        │   │   │
#### @ptforum/metrics                   │   │   ├── metrics/         # @ptforum/metrics - Analytics abstraction
                                        │   │   │   ├── src/
                                        │   │   │   │   ├── index.ts
                                        │   │   │   │   ├── AnalyticsScript.tsx
                                        │   │   │   │   ├── core/
                                        │   │   │   │   │   ├── tracker.ts
                                        │   │   │   │   │   ├── event-types.ts
                                        │   │   │   │   │   └── types.ts
                                        │   │   │   │   ├── adapters/
                                        │   │   │   │   │   ├── plausible.ts
                                        │   │   │   │   │   ├── posthog.ts
                                        │   │   │   │   │   ├── console.ts
                                        │   │   │   │   │   └── noop.ts
                                        │   │   │   │   └── context/
                                        │   │   │   │       └── metrics-context.ts
                                        │   │   │   ├── project.json
                                        │   │   │   ├── tsconfig.json
                                        │   │   │   ├── vite.config.ts
                                        │   │   │   └── README.md
                                        │   │   │
#### @ptforum/auth                      │   │   ├── auth/            # @ptforum/auth - Auth logic (JWT, TOTP, etc.)
                                        │   │   │   ├── src/
                                        │   │   │   │   ├── index.ts
                                        │   │   │   │   ├── core/
                                        │   │   │   │   │   ├── auth.ts
                                        │   │   │   │   │   ├── jwt.ts
                                        │   │   │   │   │   ├── totp.ts
                                        │   │   │   │   │   ├── session.ts
                                        │   │   │   │   │   ├── user.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── hono/
                                        │   │   │   │   │   ├── authHandler.ts
                                        │   │   │   │   │   ├── authMiddleware.ts
                                        │   │   │   │   │   ├── roleMiddleware.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   └── client/
                                        │   │   │   │       ├── authClient.ts
                                        │   │   │   │       └── index.ts
                                        │   │   │   ├── project.json
                                        │   │   │   ├── tsconfig.json
                                        │   │   │   ├── vite.config.ts
                                        │   │   │   └── README.md
                                        │   │   │
#### @ptforum/i18n                      │   │   ├── i18n/            # @ptforum/i18n - SSR-safe i18n provider
                                        │   │   │   ├── src/
                                        │   │   │   │   ├── index.ts
                                        │   │   │   │   ├── core/
                                        │   │   │   │   │   ├── i18n-config.ts
                                        │   │   │   │   │   ├── get-dictionary.ts
                                        │   │   │   │   │   ├── create-translator.ts
                                        │   │   │   │   │   ├── types.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── locales/
                                        │   │   │   │   │   ├── en/
                                        │   │   │   │   │   │   ├── common.json
                                        │   │   │   │   │   │   └── auth.json
                                        │   │   │   │   │   ├── pt/
                                        │   │   │   │   │   │   ├── common.json
                                        │   │   │   │   │   │   └── auth.json
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   └── hono/
                                        │   │   │   │       ├── authClient.ts
                                        │   │   │   │       └── index.ts
                                        │   │   │   ├── project.json
                                        │   │   │   ├── tsconfig.json
                                        │   │   │   ├── vite.config.ts
                                        │   │   │   └── README.md
                                        │   │   │
#### @ptforum/hooks                     │   │   ├── hooks/           # @ptforum/hooks - Shared React hooks
                                        │   │   │   ├── src/
                                        │   │   │   │   ├── index.ts
                                        │   │   │   │   ├── auth/
                                        │   │   │   │   │   ├── use-auth.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── api/
                                        │   │   │   │   │   ├── use-users.ts
                                        │   │   │   │   │   ├── use-news.ts
                                        │   │   │   │   │   ├── use-events.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── state/
                                        │   │   │   │   │   ├── use-toggle.ts
                                        │   │   │   │   │   ├── use-form-state.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── browser/
                                        │   │   │   │   │   ├── use-local-storage.ts
                                        │   │   │   │   │   ├── use-window-size.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── ui/
                                        │   │   │   │   │   ├── use-modal.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   └── i18n/
                                        │   │   │   │       ├── use-locale.ts
                                        │   │   │   │       └── index.ts
                                        │   │   │   ├── project.json
                                        │   │   │   ├── tsconfig.json
                                        │   │   │   ├── vite.config.ts
                                        │   │   │   └── README.md
                                        │   │   │
#### @ptforum/ui                        │   │   ├── ui/              # @ptforum/ui - ShadCN-based UI components
                                        │   │   │   ├── src/
                                        │   │   │   │   ├── index.ts
                                        │   │   │   │   ├── components/
                                        │   │   │   │   │   ├── atoms/
                                        │   │   │   │   │   │   ├── Button.tsx
                                        │   │   │   │   │   │   ├── Button.test.tsx
                                        │   │   │   │   │   │   └── test.tsx
                                        │   │   │   │   │   ├── molecules/
                                        │   │   │   │   │   │   │   ├── card/
                                        │   │   │   │   │   │   │   │   ├── Card.tsx
                                        │   │   │   │   │   │   │   │   └── auth.tsx
                                        │   │   │   │   │   │   │   ├── form/
                                        │   │   │   │   │   │   │   │   ├── Form.tsx
                                        │   │   │   │   │   │   │   │   └── auth.tsx
                                        │   │   │   │   │   │   │   └── last/
                                        │   │   │   │   │   │   │       ├── last.tsx
                                        │   │   │   │   │   │   │       └── auth.tsx
                                        │   │   │   │   │   │   └── index.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   └── theme/
                                        │   │   │   │       └── globals.css
                                        │   │   │   ├── project.json
                                        │   │   │   ├── tsconfig.json
                                        │   │   │   ├── vite.config.ts
                                        │   │   │   └── README.md
                                        │   │   │
#### @ptforum/api-client                │   │   ├── api-client/      # @ptforum/api-client - Typed HTTP & WS clients
                                        │   │   │   ├── src/
                                        │   │   │   │   ├── index.ts
                                        │   │   │   │   ├── client/
                                        │   │   │   │   │   ├── auth-client.ts
                                        │   │   │   │   │   ├── user-client.ts
                                        │   │   │   │   │   ├── post-client.ts
                                        │   │   │   │   │   ├── event-client.ts
                                        │   │   │   │   │   ├── membership-client.ts
                                        │   │   │   │   │   ├── club-client.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── context/
                                        │   │   │   │   │   ├── api-context.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── errors/
                                        │   │   │   │   │   ├── api-error.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── http/
                                        │   │   │   │   │   ├── fetch-client.ts
                                        │   │   │   │   │   ├── with-auth.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   ├── types/
                                        │   │   │   │   │   ├── client-options.ts
                                        │   │   │   │   │   └── index.ts
                                        │   │   │   │   └── utils/
                                        │   │   │   │       ├── query-builder.ts
                                        │   │   │   │       └── index.ts
                                        │   │   │   ├── project.json
                                        │   │   │   ├── tsconfig.json
                                        │   │   │   ├── vite.config.ts
                                        │   │   │   └── README.md
#### @ptforum/state                     │   │   └── state/      # @ptforum/state - 
                                        │   │       ├── src/
                                        │   │       │   ├── index.ts
                                        │   │       │   ├── query/
                                        │   │       │   │   ├── query-client.ts
                                        │   │       │   │   ├── queries/
                                        │   │       │   │   │   ├── user-queries.ts
                                        │   │       │   │   │   ├── post-queries.ts
                                        │   │       │   │   │   ├── event-queries.ts
                                        │   │       │   │   │   ├── membership-queries.ts
                                        │   │       │   │   │   ├── club-queries.ts
                                        │   │       │   │   │   └── index.ts
                                        │   │       │   │   ├── mutations/
                                        │   │       │   │   │   ├── user-mutations.ts
                                        │   │       │   │   │   ├── post-mutations.ts
                                        │   │       │   │   │   ├── event-mutations.ts
                                        │   │       │   │   │   ├── membership-mutations.ts
                                        │   │       │   │   │   ├── club-mutations.ts
                                        │   │       │   │   │   └── index.ts
                                        │   │       │   │   └── index.ts
                                        │   │       │   ├── stores/
                                        │   │       │   │   ├── auth-store.ts
                                        │   │       │   │   ├── ui-store.ts
                                        │   │       │   │   ├── filter-store.ts
                                        │   │       │   │   └── index.ts
                                        │   │       │   ├── types/
                                        │   │       │   │   ├── query-options.ts
                                        │   │       │   │   ├── store-options.ts
                                        │   │       │   │   └── index.ts
                                        │   │       │   └── utils/
                                        │   │       │       ├── query-keys.ts
                                        │   │       │       ├── hydration.ts
                                        │   │       │       └── index.ts
                                        │   │       ├── project.json
                                        │   │       ├── tsconfig.json
                                        │   │       └── README.md
### Domain Libraries                    │   └── domain/
#### @ptforum/forum-domain              │       ├── forum-domain/
                                        │       │   ├── src/
                                        │       │   │   ├── index.ts
                                        │       │   │   ├── components/
                                        │       │   │   │   ├── index.ts
                                        │       │   │   │   ├── home/
                                        │       │   │   │   │   ├── Hero.tsx
                                        │       │   │   │   │   └── index.ts
                                        │       │   │   │   └── about/
                                        │       │   │   │       ├── Hero.tsx
                                        │       │   │   │       └── index.ts
                                        │       │   │   ├── features/
                                        │       │   │   │   ├── index.ts
                                        │       │   │   │   ├── post/
                                        │       │   │   │   │   ├── post-create.ts
                                        │       │   │   │   │   ├── post-list.ts
                                        │       │   │   │   │   └── index.ts
                                        │       │   │   │   └── thread/
                                        │       │   │   │       ├── post-create.ts
                                        │       │   │   │       ├── post-list.ts
                                        │       │   │   │       └── index.ts
                                        │       │   │   ├── data-access/
                                        │       │   │   │   ├── post-queries.ts
                                        │       │   │   │   ├── thread-queries.ts
                                        │       │   │   │   ├── websocket.ts
                                        │       │   │   │   └── index.ts
                                        │       │   │   └── types/
                                        │       │   │       ├── forum-types.ts
                                        │       │   │       └── index.ts
                                        │       │   ├── project.json
                                        │       │   ├── tsconfig.json
                                        │       │   ├── vite.config.ts
                                        │       │   └── README.md
#### @ptforum/admin-domain              │       ├── admin-domain/
                                        │       │   ├── src/
                                        │       │   │   ├── index.ts
                                        │       │   │   ├── components/
                                        │       │   │   │   ├── index.ts
                                        │       │   │   │   ├── home/
                                        │       │   │   │   │   ├── Hero.tsx
                                        │       │   │   │   │   └── index.ts
                                        │       │   │   │   └── about/
                                        │       │   │   │       ├── Hero.tsx
                                        │       │   │   │       └── index.ts
                                        │       │   │   ├── features/
                                        │       │   │   │   ├── index.ts
                                        │       │   │   │   ├── user/
                                        │       │   │   │   │   ├── user-moderation.ts
                                        │       │   │   │   │   ├── user-list.ts
                                        │       │   │   │   │   └── index.ts
                                        │       │   │   │   ├── post/
                                        │       │   │   │   │   ├── post-moderation.ts
                                        │       │   │   │   │   └── index.ts
                                        │       │   │   │   └── event/
                                        │       │   │   │       ├── event-management.ts
                                        │       │   │   │       └── index.ts
                                        │       │   │   ├── data-access/
                                        │       │   │   │   ├── user-queries.ts
                                        │       │   │   │   ├── post-queries.ts
                                        │       │   │   │   ├── event-queries.ts
                                        │       │   │   │   ├── websocket.ts
                                        │       │   │   │   └── index.ts
                                        │       │   │   └── types/
                                        │       │   │       ├── admin-types.ts
                                        │       │   │       └── index.ts
                                        │       │   ├── project.json
                                        │       │   ├── tsconfig.json
                                        │       │   ├── vite.config.ts
                                        │       │   └── README.md
                                        │       │
#### @ptforum/member-domain             │       ├── member-lib/
                                        │       │   ├── components/
                                        │       │   ├── data-access/
                                        │       │   └── features/
                                        │       │
#### @ptforum/content                   │       ├── content/
                                        │       │   ├── news/
                                        │       │   └── ui/
                                        │       │
#### @ptforum/dist                      │       ├── distribution/
                                        │       │   ├── core/
                                        │       │   └── ui/
                                        │       │
#### @ptforum/alerts                    │       ├── alerts/
                                        │       │   ├── core/
                                        │       │   └── ui/
                                        │       │
#### Integrations                       │       ├── integrations/
##### @ptforum/cms                      │       │   ├── cms/
##### @ptforum/payments                 │       │   ├── payments/
                                        │       │   │   └── payfast/
##### @ptforum/email                    │       │   ├── email/
##### @ptforum/maps                     │       │   └── maps/