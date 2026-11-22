---
title: Formatos de Arquivo & Schemas (File-over-App)
description: Estrutura aberta de pastas e formatos JSON/Markdown gravados pelo HephaestusForge dentro do repositório do seu jogo.
---

O **HephaestusForge** não guarda nenhum dado do seu projeto em bancos proprietários. Todo documento, tarefa, decisão, orçamento de assets e artefato exportado pelos estúdios vive em arquivos abertos e legíveis dentro da pasta do seu jogo.

## Estrutura do Workspace

```text
meu-jogo/
├── .forge/
│   ├── config.json              # Metadados do workspace e preferências da engine
│   ├── asset_spec.json          # Orçamento técnico para sprites, áudio e malhas 3D
│   └── starter_assets.json      # Starter Packs aplicados, licenças e vínculos da cena principal
├── .agents/
│   ├── skills/                  # Skills de IA reutilizáveis (.md)
│   └── roles/                   # Papéis/personas customizadas (.md)
├── docs/
│   ├── gdd/                     # Documentos de Game Design (Markdown + [[WikiLinks]])
│   └── coordination/
│       ├── tasks/               # Um arquivo JSON por tarefa do Kanban (LexoRank)
│       └── decisions/           # Registros de Decisão Arquitetural (ADRs em Markdown)
├── scenes/                      # Cenas Godot 4 (.tscn)
├── scripts/                     # Scripts GDScript (.gd)
└── assets/                      # Sprites, shaders (.gdshader), recursos (.tres), áudio (.wav)
```

:::tip[100% amigável ao Git e gravação atômica]
Como cada tarefa do Kanban é um arquivo `.json` independente com ordenação LexoRank e GDDs/ADRs são `.md` puros, diffs, branches e merges no Git ficam limpos e sem conflitos. Toda gravação usa escrita atômica com validação ETag/SHA-256.
:::

## Arquivos de Configuração (`.forge/`)

### `.forge/config.json`
Guarda metadados do projeto, como nome, engine alvo (`godot4`) e configurações locais do workspace.

### `.forge/asset_spec.json`
Define as regras técnicas auditadas pelo **Catálogo de Assets**:
- Resolução máxima de texturas (ex.: `2048px`) e validação de potência de dois (PoT).
- Regras de tamanho/formato de áudio.
- Orçamento de triângulos/vértices para modelos 3D `.glb` e `.gltf`.

### `.forge/starter_assets.json`
Rastreia cada Starter Pack local aplicado ao projeto:
- **`id` / `name` / `path`**: pasta relativa onde os assets foram importados.
- **`license` / `source_url` / `publishable`**: diferencia kits CC0 de placeholders temporários antes do lançamento.
- **`main_scene`**: conecta os artefatos exportados pelos Estúdios 2D (*Animação de Sprites*, *Shader VFX 2D*, *HUD*, *Tilemap*) quando você clica em **"Usar na cena principal"**.

## Documentação & Coordenação (`docs/`)

| Pasta | Formato | Destaques |
| :--- | :--- | :--- |
| `docs/gdd/` | `.md` | Markdown padrão com `[[WikiLinks]]` indexados no Grafo de Conhecimento. |
| `docs/coordination/tasks/` | `.json` | Um arquivo por tarefa (`id`, `title`, `status`, `rank`, `branch`, `links`). |
| `docs/coordination/decisions/` | `.md` | ADRs em Markdown ligados às tarefas e páginas do GDD. |

## Artefatos Exportados pelos Estúdios

Cada um dos **37 estúdios internos** grava arquivos nativos direto no disco — nunca presos em um formato proprietário:
- **Nativos Godot 4**: `.tres` (`SpriteFrames`, `TileSet`, `AudioBusLayout`), `.tscn` (HUDs e cenas), `.gd` (scripts), `.gdshader` (VFX 2D e transições) e `project.godot` (Input Map).
- **Formatos universais**: `.wav` (Sintetizador SFX), `.png` (sprites/atlas), `.json` (diálogos, quests, loot tables, frame data, inventário) e exportações Yarn/Dialogic.
