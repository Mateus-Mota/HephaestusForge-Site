---
title: Changelog
description: Release history and key improvements for HephaestusForge.
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
