---
title: Studios Catalog (Blocks A–H)
description: Practical overview of all 37 built-in studios inside HephaestusForge and the files they export for Godot 4.
---

The **Studios** module unifies all 37 internal authoring tools inside **HephaestusForge**, organized by production discipline. Every studio writes real files directly into your project (*file-over-app*) ready for **Godot 4** and other engines.

## Daily Studio Workflow

1. Open **Studios** from the left sidebar (or via **Open Studios →** in the Asset Catalog).
2. Pick a studio by discipline (or press `Ctrl+K` and type its name).
3. Tune parameters with live preview.
4. Click **Save / Export to Project** — outputs are written straight to disk (`.tres`, `.tscn`, `.gd`, `.gdshader`, `.json`, `.png`, or `.wav`) and supported 2D studios offer **"Use in main scene"** to wire them automatically.

:::tip[One-click wiring to `scenes/main.tscn`]
When exporting from *Sprite Animation*, *Shader VFX 2D*, *HUD Layout*, or *Tilemap Collision*, click **"Use in main scene"** so HephaestusForge binds the generated resource into `.forge/starter_assets.json` for immediate testing with `F5`.
:::

## Tool Blocks

### Block A — 2D Art, Sprites & Animation
- **Sprite Animation Studio**: slice spritesheets by grid or frames, preview FPS, and export `SpriteFrames` (`.tres`) for `AnimatedSprite2D`.
- **Autotile & Tilemap Collision Studio**: author 2D collision shapes and terrain masks for Godot 4 `TileSet`.
- **Skeleton2D Studio**: build bone hierarchies and base poses for articulated 2D characters.
- **2D Particles & Shader VFX 2D**: generate `CPUParticles2D`/`GPUParticles2D` presets and `.gdshader` effects (hit flash, outline, water, glow, dissolve).
- **PBR / PoT Packer (ORM)** & **Interactive 3D Viewer**: validate power-of-two textures, pack ORM channels, and inspect `.glb`/`.gltf` meshes against 3D budgets.

### Block B — Audio, SFX & Music
- **SFX Synthesizer**: procedural WebAudio synthesizer exporting directly to `.wav`.
- **Chiptune Tracker**: multi-channel retro sequencer for loops and jingles.
- **Sound Bank & Audio Bus Mixer**: randomized pitch/volume variations and `default_bus_layout.tres` export.
- **Lip-Sync & Dubbing**: align phonemes/visemes with audio for talking portraits.

### Block C — Combat, Gameplay & AI
- **Combat Frame Data**: edit *startup*, *active*, and *recovery* windows.
- **2D Hitbox / Hurtbox**: position attack and vulnerability boxes per animation frame.
- **Skill Tree Designer**: visual progression graph with prerequisites.
- **Loot Table & Drops**: probability curves, rarities, and Monte Carlo simulation.
- **State Machine & Behavior Tree**: FSMs and behavior trees for enemies and bosses.
- **Items & Grid Inventory**: item catalog, rarities, and grid inventory rules.

### Block D — Narrative, Quests & Cinematics
- **Dialogue Tree Editor**: branching conversations, conditions, variables, and JSON/GDScript export.
- **Quests & Missions**: chained objectives, rewards, and narrative triggers.
- **Cinematic Sequencer**: timeline for camera moves, dialogue, and cutscene events.

### Block E — UI, HUD & Controls
- **HUD Layout Studio**: responsive anchors, health/mana bars, and minimap layouts for Godot `Control` / `CanvasLayer`.
- **Input Map**: keyboard and gamepad action bindings written to `project.godot`.
- **Virtual Touch Controls**: mobile joystick and button overlays.
- **Settings Menu & Achievements**: ready-to-use options and achievement templates.

### Block F — World, Camera & Polish
- **Dungeon Generator**: procedural room/corridor layouts.
- **2D Parallax Studio**: depth layers with `scroll_scale`, autoscroll, and live preview.
- **Camera Zones & Screen Shake**: room camera bounds, deadzones, and impact shake profiles.
- **Scene Transitions**: *fade*, *wipe*, *iris*, and transition shaders.

### Block G — Diagnostics, Build & Packaging
- **Godot Project Linter & Live Link**: audit broken references and inspect live game logs.
- **VRAM Profiler & Time-Travel Debugger**: estimate video memory usage and inspect state snapshots.
- **Save Game Hub & Launch Readiness**: release checklists, Steam packaging, and project bundle exports.

### Block H — External Tools & Kenney Ecosystem
- Direct launchers for **Kenney Shape (2D → 3D)**, **Avatar Mixer**, **Creature Mixer**, **Ship Mixer**, **Aseprite**, **Blender**, and **Godot Editor**.
