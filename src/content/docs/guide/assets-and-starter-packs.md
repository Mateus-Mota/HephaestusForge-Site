---
title: Local Assets, Starter Packs & External Tools
description: How to organize your local Kenney (CC0) library, configure asset budgets, and connect Aseprite, Blender, and Kenney Shape.
---

**HephaestusForge** does not bundle third-party asset packs inside its executable. Instead, it reads **your own local library** of `.zip` archives (such as free **CC0** packs from [kenney.nl](https://kenney.nl/assets)) and imports them cleanly into each new project.

## 1. Setting Up Your Local Kenney Starter Packs Library

1. Create a folder on your PC for your downloaded packs — for example:
   ```text
   C:\Assets\Kenney\
   ├── 2d\
   │   ├── kenney_tiny-dungeon_1.2.zip
   │   └── kenney_pixel-platformer.zip
   ├── ui\
   │   └── kenney_ui-pack.zip
   └── audio\
       └── kenney_interface-sounds.zip
   ```
2. Download `.zip` packs from [kenney.nl/assets](https://kenney.nl/assets) and save them inside this folder (no need to unzip).
3. In the **New Project Ritual** (or Starter Pack picker), point to your library root folder (`C:\Assets\Kenney`).

### Automatic Detection Rules (`scan_kenney_library`)

- **Scan depth**: scans up to **4 folder levels deep** (ignores symlinks, capped at 5,000 entries).
- **Automatic grouping**: the **first subfolder name** (`2d`, `3d`, `ui`, `audio`, etc.) becomes the kit group in the UI.
- **Accepted naming**:
  - Archives prefixed with `kenney_` (e.g., `kenney_tiny-dungeon_1.2.zip`) are recognized **anywhere** inside the library.
  - Archives **without** the `kenney_` prefix (e.g., `tiny-dungeon.zip`) are recognized **when placed inside a folder named `kenney`**. This prevents unrelated `.zip` files from being mislabeled as CC0 Kenney packs.
- **Deduplication**: duplicate downloads (e.g., `kenney_ui-pack (1).zip`) automatically defer to the primary archive.

## 2. The `.forge/starter_assets.json` Manifest

When a pack is applied, HephaestusForge atomically writes `.forge/starter_assets.json` tracking:
- **`id` / `name` / `path`**: location of the pack inside your project.
- **`license` / `source_url` / `publishable`**: license traceability (CC0 vs placeholder).
- **`main_scene`**: slot bindings between 2D Studio outputs and your playable main scene.

## 3. Technical Asset Budgets (`.forge/asset_spec.json`)

The **Asset Catalog** inspects sprites, textures, audio, and 3D meshes in your project. Customize max resolutions (e.g., `2048px`), power-of-two rules, and 3D triangle budgets via `.forge/asset_spec.json`.

## 4. External Tools & Web Generators

In **Settings → Tools & Software**, **Studios → Generators & External**, and the **Asset Catalog**:
- **Local desktop tools (auto-detected on Windows)**: **Kenney Shape (2D → 3D)**, **Aseprite**, **Blender**, **Krita**, **GIMP**, **Photoshop**, **Audacity**, and **ArtCraft**.
- **Zero-install web generators**: **Kenney Avatar Mixer**, **Creature Mixer**, **Ship Mixer**, **PMDCollab SpriteCollab**, **Quaternius**, **BeepBox**, **Chiptone**, **AudioMass**, and **Jfxr**.
