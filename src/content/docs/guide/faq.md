---
title: Frequently Asked Questions (FAQ)
description: Answers to common questions about HephaestusForge, File-over-App architecture, Godot 4 support, privacy, and Kenney starter packs.
---

## General & Architecture

### What does "100% File-over-App" mean?
Everything you create in **HephaestusForge** — GDD documents, Kanban tasks, Architecture Decision Records (ADRs), dialogue flows, AI skills, and studio exports — is stored as plain `.md`, `.json`, `.tres`, `.tscn`, `.gd`, `.gdshader`, `.png`, or `.wav` files inside your own project folder. There is **no proprietary database** and **no vendor lock-in**. If you uninstall HephaestusForge tomorrow, your entire game project and documentation remain 100% intact in Git.

### Does HephaestusForge require an internet connection or an account?
No. HephaestusForge is a **local-first desktop app** built with Tauri v2 and Rust. It works completely offline, requires no login, sends no telemetry, and opens **zero local TCP ports**. An internet connection is only used if you explicitly click an external web generator (like Kenney Avatar Mixer) or download updates.

### Why is the installer only ~10 MiB?
Unlike Electron apps that bundle an entire Chromium browser (~150+ MiB), HephaestusForge uses **Tauri v2**, which leverages the native **Windows WebView2 Runtime** combined with a compiled Rust backend.

---

## Engines & Compatibility

### Does it only work with Godot 4?
**Godot 4** has the deepest first-class integration (`Play F5`, `project.godot` Input Map, `.tres`, `.tscn`, `.gd`, `.gdshader`, and playable 2D starter scenes). However, because all docs, Kanban tasks, ADRs, dialogue JSON/Yarn exports, `.wav` SFX, and `.png` sprites are standard files, you can also use HephaestusForge as a production workbench alongside Unity, Raylib, Love2D, or custom engines.

### Are macOS or Linux builds available?
Currently, official installers are built and tested for **Windows 10/11 (x64)** (`.exe` NSIS and `.msi`). Check the [Downloads page](/downloads/) and [Changelog](/changelog/) for platform updates.

---

## Assets & Licensing

### Are Kenney Starter Packs included inside the installer?
No. To respect redistribution guidelines and keep the installer tiny, HephaestusForge reads **your own local folder** of `.zip` packs downloaded from [kenney.nl/assets](https://kenney.nl/assets). See [Local Assets & Starter Packs](/guide/assets-and-starter-packs/) for the 2-minute setup.

### Can I use the exported files commercially?
Yes. Files you create in HephaestusForge's 37 built-in studios (`.tres`, `.tscn`, `.gd`, `.gdshader`, `.wav`, `.json`, `.md`) belong to you. When using third-party Starter Packs (such as Kenney CC0 kits), check `.forge/starter_assets.json` for license traceability.

---

## Installation & Updates

### Windows SmartScreen showed a warning when running the installer. Is it safe?
Yes — early indie releases are not yet signed with a commercial EV certificate, which causes Windows SmartScreen to display a generic *"Unknown publisher"* warning. Always verify you downloaded the installer from the official [Downloads page](/downloads/) or [GitHub Releases](https://github.com/Mateus-Mota/HephaestusForge-Site/releases).

### How do I update to a newer version?
Download the latest `.exe` or `.msi` installer from the [Downloads page](/downloads/) and run it. Your game projects and workspace files live in your own folders and are never touched by app upgrades.
