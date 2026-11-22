---
title: Quick Start & Creation Ritual
description: The shortest path from installing HephaestusForge to running your first playable Godot 4 project with Play (F5).
---

This guide covers the fastest path from opening **HephaestusForge** for the first time to running a structured game project in your engine.

## 1. Recommended Requirements

- **Operating System**: Windows 10/11 (x64) with WebView2 Runtime (pre-installed on Windows 11).
- **Game Engine** *(optional, recommended for `Play F5`)*:
  - **Godot 4.x** installed locally or available in `PATH`.
- **Git** *(optional)*: enables per-task branches, live status, and assisted commits from Kanban.
- **Local Kenney Starter Packs Library (CC0)** *(optional)*: bootstraps new projects with ready-to-use sprites, tiles, and audio — see [Local Assets, Starter Packs & External Tools](/guide/assets-and-starter-packs/).

## 2. Creating a New Game via the Ritual

1. From the **Main Menu**, click **New Game** (or open an existing workspace).
2. Enter your **project name**, **destination folder**, and **target engine** (e.g., Godot 4).
3. *(Optional)* Pick a **Starter Pack** from your local Kenney library.
4. When the Ritual finishes, HephaestusForge automatically generates:
   - Living documentation structure (`docs/gdd/`, `docs/coordination/tasks/`, `docs/coordination/decisions/`).
   - Initial asset manifest (`.forge/starter_assets.json`).
   - **Playable main scene** (for Godot 2D projects with a Starter Pack), complete with visible ground, sized room, and reachable platform.

## 3. Running Your Game (`Play / F5`) & Using the Studios

- Click **Play (`F5`)** in the top bar to run your project directly in **Godot**.
- Open **Studios** (the Workbench) to author sprite animations, 2D shaders, HUD layouts, or tilemap collisions.
- When exporting from a 2D studio (*Sprite Animation*, *Shader VFX 2D*, *HUD*, or *Tilemap*), click **"Use in main scene"** to wire the output directly into `.forge/starter_assets.json`.

## 4. Apprentice Tour

If you want to explore the interface safely without touching your own project, open the bundled **`ForgePong`** demo from the Main Menu and start the **Apprentice Tour**. You can move forward, go **Back** at any stop, or skip at any time.
