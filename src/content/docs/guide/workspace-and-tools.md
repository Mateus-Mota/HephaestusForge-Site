---
title: Workspace, Customizable Sidebar & Core Modules
description: How to customize your sidebar 100%, use GDD, Kanban, Project Map, Dialogue Flows, Prompts, Skills, and keyboard shortcuts.
---

**HephaestusForge** follows the **File-over-App** principle: everything you author (GDDs, Kanban tasks, narrative flows, ADRs, skills, and assets) lives in plain, human-readable files inside your game's repository.

## 1. 100% Customizable Sidebar

By default, the left sidebar starts with 4 core modules pinned: **GDD**, **Kanban**, **Project Map**, and **Studios**.

However, **no module is locked**:
1. Click **More (`⋯`)** at the bottom-left of the sidebar.
2. Use the **pin icon** to **pin or unpin any module** (including *GDD*, *Kanban*, *Map*, and *Studios*).
3. When 2 or more modules are pinned, use **`↑` / `↓`** to arrange them in your exact daily order.
4. Pinned modules display **live count badges** (active tasks, assets, ADRs, active skills, flows, and world entities).
5. Click **Restore default bar** at the bottom of the *More* menu anytime to reset to the default 4 modules.

## 2. Core Daily Modules

| Module | Purpose | Quick Tip |
|---|---|---|
| **GDD** | Living game design docs in Markdown with CodeMirror 6 and `[[WikiLinks]]`. | `Ctrl+S` saves atomically; `Alt+←` / `Alt+→` navigates history. |
| **Kanban** | 5-lane task board (*Backlog, Active, Review, Blocked, Done*). | Drag cards across lanes manually or use `Alt+←` / `Alt+→` on a focused card. |
| **Project Map** | High-level view connecting tasks, GDDs, ADRs, and production pipeline. | Switch between **Map** and **Board** views at the top. |
| **Studios** | 36 built-in authoring studios + **External Generators** (Kenney). | Press `Ctrl+K` to jump straight to any studio. |
| **Flows (Dialogues & Quests)** | Visual node editor for dialogues, quests, and FSMs with live simulator & Godot/Yarn/Dialogic export. | Use **Simulate Flow** to test branches and variables before exporting. |
| **Prompt Studio** | AI prompt templates that inject live project context (GDD, tasks, ADRs, roles, skills). | Toggle **Focus** mode to collapse the sidebar while reviewing prompts. |
| **AI Skills** | Manage `.agents/skills/`, `.agents/roles/`, Public Hub, and **Public Tools Radar**. | Enable or disable skills per milestone without deleting files. |
| **Decisions (ADRs)** | Formal Architecture Decision Records for your game. | Click **Analyze with AI** to review trade-offs in Prompt Studio. |

## 3. Essential Shortcuts

- **`Ctrl+K`**: Command Palette (jump to modules, docs, tasks, studios, and Kenney tools).
- **`F5`**: Run your game in the configured engine (e.g., Godot 4).
- **`Ctrl+,`**: Open Project & Workbench Settings.
- **`?`** (top-bar help button): Open contextual in-app help for the active screen.
