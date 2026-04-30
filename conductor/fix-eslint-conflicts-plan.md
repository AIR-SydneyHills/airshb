# Implementation Plan: Fix ESLint Auto-Fix Conflicts with Astro Check

## Objective

Prevent `pnpm lint` (ESLint auto-fix) from reverting the code changes required by `pnpm astro check`.

## Background & Motivation

Currently, running `eslint --fix` silently reverts several type-safety fixes needed by `astro check`, leading to a cycle of breaking and fixing:

1. `unicorn/no-useless-undefined` removes the explicit `undefined` argument in `src/utils/search.test.ts`, causing TypeScript to complain about a missing argument.
2. `no-var` converts `declare var netlifyIdentity` to `declare let netlifyIdentity` in `src/env.d.ts`, which prevents the variable from being merged into `globalThis`, breaking the index page.
3. A previous attempt to remove an `as any` cast in `src/content.config.ts` to satisfy `@typescript-eslint/no-explicit-any` broke `astro check` because the raw `JSON.parse(text)` return type is `unknown`, which does not satisfy the `ParserOutput` requirement.

## Implementation Steps

1. **Tweak ESLint Configuration (`eslint.config.mjs`)**:
   - Add `'unicorn/no-useless-undefined': 'off'` to the base configuration to prevent the removal of explicit `undefined` arguments.
2. **Restore Unit Test Fix (`src/utils/search.test.ts`)**:
   - Restore `expect(cleanContent(undefined)).toBe('')` since `unicorn` will no longer remove it.

3. **Restore Global Type Fix (`src/env.d.ts`)**:
   - Change `declare let` back to `declare var` and add an `// eslint-disable-next-line no-var` comment so ESLint ignores it.

4. **Restore Content Config Fix (`src/content.config.ts`)**:
   - Reintroduce the `as any` type cast for `JSON.parse` to satisfy `astro check`.
   - Add `// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return` to ensure ESLint accepts it without warnings.

## Verification

- Run `pnpm run lint:eslint` followed by `pnpm check` to ensure both commands pass simultaneously without reverting each other's fixes.
