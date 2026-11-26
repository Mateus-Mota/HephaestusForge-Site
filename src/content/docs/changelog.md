---
title: Changelog
description: Release history and key improvements for HephaestusForge.
---

## `v0.4.0` (November 2026) · AI integration

### New
- **AI agents inside the app**: Claude Code, Codex, OpenCode, Gemini and Antigravity run directly in the project, with live output, ongoing conversation, a review of what changed and per-file undo.
- **HephaestusForge as an MCP server**: agents read the GDD, tasks, assets, studios, search and graph, and move Kanban tasks.
- **Agent sign-in from the app** and an **AI panel** with its own top-bar button and full-screen mode.
- **Studios connected to Godot**: "Connect to Godot", HTML5 "Test in Preview" and a bridge between the RPG studios.
- Resizable side panels; the app opens maximized.

### Fixes
- Switching projects no longer mixes data from the previous one (Codex, Gallery, Map, Graph and FSM).
- Nova encomenda "Back" button, HTML5 previews in the installed app, the tour and the Ritual HUD.

---

## `v0.3.0` (November 2026)

### Highlights & UX
- **Fully customizable sidebar**: every module (including GDD, Kanban, Project Map, and Studios) can be pinned, unpinned, and reordered with live count badges and a *Restore default bar* action.
- **Native pointer-event Kanban drag-and-drop on Windows WebView2**: smooth manual card dragging across columns with target-lane highlighting.
- **Playable main scene wired to Starter Packs & 2D Studios**: Godot 2D projects created via the Ritual start with a playable scene and direct *"Use in main scene"* studio hooks.
- **Public Tools Radar**: renamed in Skills to cover both open-source and public developer tools.
- **Cleaner Asset Catalog**: removed 14 duplicated internal studio shortcuts from the catalog header in favor of a single *Open Studios →* button.

### Architecture & Quality
- **Zero `: any` in production code** (`0 errors, 0 warnings` across static lint and design-token checks).
- **Deep modularization** of core workspaces and studios (`PromptWorkspace`, `SkillsWorkspace`, `FlowWorkspace`, `SettingsWorkspace`, `AssetDetailModal`, `ProjectForgeWizardModal`, `TaskDetailModal`, `Navigator`, `CameraZoneStudioModal`, `Parallax2dStudioModal`).
- **Expanded unit test coverage** across frontend utilities and core Rust modules.

---

## `v0.2.5`
- Initial desktop release of the Tauri v2 Full-Rust host with CodeMirror 6 GDD editor, LexoRank Kanban, Cytoscape Knowledge Graph, Asset Catalog, and 2D/3D Studios.
