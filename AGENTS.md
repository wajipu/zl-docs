# AGENTS.md

## Cursor Cloud specific instructions

This is a VuePress 2 documentation site using the Plume theme for 众流前端开发 (Crowdstream Front-end Development).

### Quick reference

- **Dev server**: `pnpm docs:dev` (serves on `http://localhost:8080/`)
- **Build**: `pnpm docs:build`
- **Preview build**: `pnpm docs:preview`
- See `README.md` for full command list.

### Non-obvious caveats

- The project has **no ESLint or tsconfig.json**. The build step (`pnpm docs:build`) is the primary validation for correctness.
- Optional chart/diagram packages (`chart.js`, `echarts`, `mermaid`, `flowchart.ts`) are not installed by default. Warning messages about these during build/dev are expected and harmless — they are only needed if chart/diagram features are used in docs content.
- The `.npmrc` sets `shamefully-hoist=true` and `shell-emulator=true`, which are required for correct dependency resolution.
- pnpm may warn about ignored build scripts for `@parcel/watcher` and `esbuild`. These packages ship prebuilt binaries and work without running their postinstall scripts.
