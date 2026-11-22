---
title: Downloads (v0.3.0)
description: Download the official HephaestusForge installers for Windows (NSIS .exe and MSI).
---

## Latest Release — `v0.3.0` (Windows x64)

| Format | Best For | Direct Download |
| :--- | :--- | :--- |
| **NSIS Installer (`.exe`)** | Recommended for most users (fast per-user setup, ~9.95 MiB) | [Download HephaestusForge_0.3.0_x64-setup.exe](https://github.com/Mateus-Mota/HephaestusForge-Site/releases/download/v0.3.0/HephaestusForge_0.3.0_x64-setup.exe) |
| **Windows Installer (`.msi`)** | Recommended for managed/enterprise environments (~13.73 MiB) | [Download HephaestusForge_0.3.0_x64_en-US.msi](https://github.com/Mateus-Mota/HephaestusForge-Site/releases/download/v0.3.0/HephaestusForge_0.3.0_x64_en-US.msi) |

Browse all public releases on [GitHub Releases](https://github.com/Mateus-Mota/HephaestusForge-Site/releases).

:::note[Windows SmartScreen notice]
Because early indie releases are not yet signed with an EV code-signing certificate, Windows SmartScreen may show *"Windows protected your PC"* on first launch. Click **More info → Run anyway** if you downloaded the installer directly from this official page or GitHub Releases, and optionally verify the SHA-256 checksum below.
:::

## SHA-256 Checksums (`v0.3.0`)

```text
f239c1e782c6d2d5c6a53d10cf8e3dfcbe927693bbcf0d428d66935b7ec4cf67  HephaestusForge_0.3.0_x64-setup.exe
2793fbede92226962aa541feae1f406d43cababc2e41c5172cba43cd4dfd6268  HephaestusForge_0.3.0_x64_en-US.msi
```

Verify in PowerShell:

```powershell
Get-FileHash -Algorithm SHA256 .\HephaestusForge_0.3.0_x64-setup.exe
```

## System Requirements
- **Windows 10 or Windows 11 (64-bit)**
- **Microsoft Edge WebView2 Runtime** (pre-installed on Windows 11)
- **Godot 4.x** *(optional — required only for launching `Play F5` directly from the Forge)*

:::tip[Quick URL]
You can always share the short link `/download` to redirect straight to the latest Windows `.exe` installer.
:::

## Next Step
After installing, follow **[Quick Start & Creation Ritual](/guide/getting-started/)**. Found a bug or have a suggestion? Open an issue on **[GitHub Issues](https://github.com/Mateus-Mota/HephaestusForge-Site/issues/new/choose)**.
