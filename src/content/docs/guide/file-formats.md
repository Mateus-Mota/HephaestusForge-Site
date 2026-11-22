---
title: File Formats & Schemas (File-over-App)
description: Open file structure and JSON/Markdown formats written by HephaestusForge inside your game repository.
---

**HephaestusForge** stores zero project data in proprietary databases. Every document, task, decision, asset budget, and studio output lives in plain, Git-friendly files inside your project folder.

## Workspace Layout

```text
my-game/
├── .forge/
│   ├── config.json              # Workspace metadata & engine preferences
│   ├── asset_spec.json          # Technical budgets for sprites, audio & 3D meshes
│   └── starter_assets.json      # Applied Starter Packs, licenses & main scene bindings
├── .agents/
│   ├── skills/                  # Reusable AI skills (.md)
│   └── roles/                   # Custom AI personas/roles (.md)
├── docs/
│   ├── gdd/                     # Game Design Documents (Markdown + [[WikiLinks]])
│   └── coordination/
│       ├── tasks/               # One flat JSON file per Kanban task (LexoRank)
│       └── decisions/           # Architecture Decision Records (ADRs in Markdown)
├── scenes/                      # Godot 4 scenes (.tscn)
├── scripts/                     # GDScript files (.gd)
└── assets/                      # Sprites, shaders (.gdshader), resources (.tres), audio (.wav)
```

:::tip[100% Git-friendly & atomic writes]
Because Kanban tasks live in individual flat `.json` files with LexoRank ordering and GDDs/ADRs live in plain `.md`, branching, diffing, and merging in Git stay clean and conflict-free. Every save uses atomic writes with ETag/SHA-256 checks.
:::

## `.forge/` Configuration Files

### `.forge/config.json`
Stores workspace-level metadata such as project name, target engine (`godot4`), and optional engine overrides.

### `.forge/asset_spec.json`
Defines the technical rules checked by the **Asset Catalog**:
- Maximum texture resolution (e.g., `2048px`) and Power-of-Two (PoT) enforcement.
- Audio format/size expectations.
- 3D mesh triangle/vertex budgets for `.glb` and `.gltf` models.

### `.forge/starter_assets.json`
Tracks every local Starter Pack applied to the project:
- **`id` / `name` / `path`**: relative folder where assets were imported.
- **`license` / `source_url` / `publishable`**: distinguishes CC0 kits from temporary placeholders before release.
- **`main_scene`**: maps outputs exported by 2D Studios (*Sprite Animation*, *Shader VFX 2D*, *HUD*, *Tilemap*) when you click **"Use in main scene"**.

## Documentation & Coordination (`docs/`)

| Folder | Format | Highlights |
| :--- | :--- | :--- |
| `docs/gdd/` | `.md` | Standard Markdown with `[[WikiLinks]]` indexed into the Knowledge Graph. |
| `docs/coordination/tasks/` | `.json` | One file per task (`id`, `title`, `status`, `rank`, `branch`, `links`). |
| `docs/coordination/decisions/` | `.md` | Standard ADR Markdown documents linked to tasks and GDD pages. |

## Studio Exports (Engine-Native)

Every one of the **37 built-in studios** writes standard files directly to disk — never locked inside a project archive:
- **Godot 4 native**: `.tres` (`SpriteFrames`, `TileSet`, `AudioBusLayout`), `.tscn` (HUDs, scenes), `.gd` (scripts), `.gdshader` (2D VFX & transitions), and `project.godot` (Input Map).
- **Universal formats**: `.wav` (SFX Synthesizer), `.png` (sprites/atlases), `.json` (dialogues, quests, loot tables, frame data, inventories), and Yarn/Dialogic exports.
