---
title: Godot 4 Integration & Troubleshooting
description: How to configure your Godot 4 executable, understand the generated project layout, and solve common Windows issues.
---

This guide explains how to connect your **Godot 4** executable to **HephaestusForge**, how generated projects are structured, and how to fix common Windows issues.

## 1. Configuring Godot 4 in HephaestusForge

1. Download **Godot 4.x** (Standard or .NET) from [godotengine.org](https://godotengine.org/).
2. Open **Settings** (bottom-left gear icon) → **Tools** tab.
3. Under **Godot Executable Path**, select `Godot_v4.x_win64.exe` (or `_console.exe` if you want verbose console logs).
4. Click **Save**. Now:
   - **Play (`F5`)** in the top bar or inside any Kanban task runs the game immediately.
   - **Open in Editor** opens the full project in the Godot 4 editor.

:::tip[Verbose logs with `_console.exe`]
On Windows, Godot ships with both `Godot_v4.x_win64.exe` and `Godot_v4.x_win64_console.exe`. Pointing HephaestusForge to the `_console.exe` binary makes runtime printouts and stack traces much easier to inspect when debugging.
:::

## 2. Generated Project Structure & Main Scene

Projects created through the **Creation Ritual** or **Project Forge Wizard** follow a clean, ready-to-run layout:

```text
my-game/
├── project.godot                # Engine config, viewport & Input Map
├── scenes/
│   └── main.tscn                # Playable main scene
├── scripts/                     # GDScript files (.gd)
├── assets/                      # Sprites, audio, fonts & 3D meshes
├── docs/
│   ├── gdd/                     # Game Design Docs (Markdown + WikiLinks)
│   └── coordination/            # Kanban tasks (.json) & ADRs (.md)
└── .forge/
    ├── config.json              # Project metadata
    ├── asset_spec.json          # Technical asset budgets
    └── starter_assets.json      # Applied Starter Pack manifest
```

## 3. Common Windows Troubleshooting

### "Play (F5) does not launch the game"
- Confirm under **Settings → Tools** that the Godot path points to the `.exe` binary (not the folder).
- Make sure `project.godot` exists at the root of the active workspace.

### "Starter Pack assets did not appear in my new project"
- Starter Packs read `.zip` archives from your local library folder configured in **Settings → Asset Library**.
- Follow [Local Assets & Starter Packs](/guide/assets-and-starter-packs/) for the exact folder layout.

### "Dragging Kanban cards does not respond"
- Starting in `v0.3.0`, Kanban uses native pointer-event dragging built specifically for Windows WebView2. Click and hold on the card body (outside action buttons) and drag over the target column.

### "How do I restore the default sidebar modules?"
- Click **More (`⋯`)** at the bottom-left and choose **Restore default bar** to reset to `GDD`, `Kanban`, `Project Map`, and `Studios`.

:::caution[Avoid cloud-synced folders for active Git + Godot projects]
Placing your project inside OneDrive or Dropbox can lock `.godot/` cache files and cause conflicts with atomic writes. Prefer a local folder such as `C:\Dev\Games\my-game` backed up via Git.
:::
