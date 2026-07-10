<!--
Sync Impact Report
Version change: template placeholders -> 1.0.0
Modified principles:
- [PRINCIPLE_1_NAME] -> Type Safety First
- [PRINCIPLE_2_NAME] -> Server Components by Default
- [PRINCIPLE_3_NAME] -> Utility-First Accessibility
- [PRINCIPLE_4_NAME] -> Verified Changes
- [PRINCIPLE_5_NAME] -> Reviewable Git Workflow
Added sections:
- Technical Standards
- Development Workflow
Removed sections: none
Templates requiring updates:
- ✅ reviewed, no content changes required: .specify/templates/plan-template.md
- ✅ reviewed, no content changes required: .specify/templates/spec-template.md
- ✅ updated: .specify/templates/tasks-template.md
- ✅ reviewed, no stale references found: meal_craft/.specify/extensions/git/commands/*.md
Follow-up TODOs: none
-->

# MealCraftPlanner Constitution

## Core Principles

### Type Safety First
All application code MUST be written in TypeScript with strict mode enabled. `any` is
forbidden, including implicit `any`; use explicit types, `unknown`, generics, or
narrowable unions instead. Public props, data contracts, route params, and helper return
values MUST be typed at the boundary so type errors are caught before runtime.

### Server Components by Default
Server Components are the default for all Next.js App Router code. Client Components MAY
be used only when browser state, event handlers, or browser APIs are required. Data
fetching, validation, and composition SHOULD remain on the server unless client
interactivity clearly demands otherwise. `'use client'` boundaries MUST stay as small as
possible.

### Utility-First Accessibility
Tailwind utility classes are the standard styling method. All UI MUST use semantic HTML
first, then Tailwind utilities for layout and visual treatment. Interactive elements MUST
be keyboard reachable, have visible focus states, expose correct labels, and meet
color-contrast expectations. ARIA attributes MUST be used only when semantic HTML cannot
express the behavior.

### Verified Changes
Behavior changes, route changes, and UI changes MUST be covered by automated tests before
merge. Pure logic MUST have unit coverage, and user-facing flows MUST have integration or
component coverage when the behavior crosses component boundaries. Accessibility-sensitive
UI changes MUST include a focused accessibility check or test for the affected interaction.
Linting and build validation MUST pass for the touched scope before review.

### Reviewable Git Workflow
Work MUST be delivered on a feature branch with small, reviewable commits or a single
cohesive commit set. Commit messages and PR titles MUST describe the user-visible change.
Each PR MUST include a summary of what changed, the validation performed, and screenshots
or recordings for UI work when behavior or layout changed. Reviewers MUST be able to
evaluate correctness, accessibility, and test coverage without reading unrelated files.

## Technical Standards

MealCraftPlanner MUST follow these repository-level standards:

- File and folder names for app routes and shared modules MUST use lowercase kebab-case
	unless Next.js requires a reserved filename such as `page.tsx`, `layout.tsx`,
	`loading.tsx`, `error.tsx`, or `route.ts`.
- React component files that primarily export a component SHOULD use PascalCase filenames
	when that improves clarity, but route files keep the Next.js reserved names.
- State, effects, and browser-only logic MUST stay inside the smallest practical Client
	Component.
- Styling MUST use Tailwind utility classes; custom CSS is allowed only when a
	utility-first solution is not practical.
- New dependencies MUST be justified by a clear product need and kept minimal.

## Development Workflow

- Before implementation, identify the smallest affected server/client boundary and keep
	the change localized there.
- Prefer server data access and transformation, then pass typed results into client UI.
- Add or update tests alongside code changes so the changed behavior is exercised directly.
- Run the relevant validation commands for the scope of the change before opening or
	updating a PR.
- Keep PRs focused on one concern, and split unrelated changes into separate branches or
	PRs.

## Governance

This constitution supersedes informal habits and local conventions when they conflict.
Amendments require an updated constitution file, a clear version bump, and a migration
note if the change affects active work. Versioning uses semantic versioning: MAJOR for
incompatible governance changes, MINOR for added or expanded principles, and PATCH for
clarifications. Every PR and review MUST check the change against this constitution, and
exceptions MUST be documented with a reason and a follow-up plan.

**Version**: 1.0.0 | **Ratified**: 2026-07-10 | **Last Amended**: 2026-07-10
