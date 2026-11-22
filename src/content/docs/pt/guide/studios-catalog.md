---
title: Catálogo de Estúdios da Forja (Blocos A–H)
description: Visão prática de todos os estúdios autorais internos do HephaestusForge e dos arquivos gerados para Godot 4.
---

O módulo **Estúdios** reúne todas as ferramentas autorais internas do **HephaestusForge** em uma bancada unificada, organizada por disciplina de produção. Cada estúdio grava artefatos diretamente na pasta do projeto (*file-over-app*) prontos para consumo na engine (especialmente **Godot 4**).

## Como usar os Estúdios no fluxo diário

1. Abra **Estúdios** na barra lateral esquerda (ou pelo atalho na barra superior de **Assets** via **Abrir Estúdios →**).
2. Escolha a ferramenta pela categoria desejada.
3. Ajuste os parâmetros com preview em tempo real.
4. Clique em **Salvar / Exportar para o Projeto** — o arquivo é gravado diretamente no repositório (`.tres`, `.tscn`, `.gd`, `.gdshader`, `.json`, `.png` ou `.wav`) e, quando suportado, pode ser ligado à cena principal pelo botão **Usar na cena principal**.

## Blocos de Ferramentas

### Bloco A — Arte 2D, Sprites & Animação
- **Estúdio de Animação de Sprites**: recorta spritesheets por grid ou frames, valida FPS e exporta `SpriteFrames` (`.tres`) para `AnimatedSprite2D`.
- **Estúdio de Autotile & Tilemap Collision**: configura máscaras de colisão e terrenos 2D para `TileSet` no Godot 4.
- **Estúdio de Esqueleto 2D (`Skeleton2D`)**: monta hierarquia de ossos e poses base para personagens 2D articulados.
- **Partículas 2D & Shader VFX 2D**: gera presets de `CPUParticles2D`/`GPUParticles2D` e shaders `.gdshader` (flash de dano, outline, água, brilho, dissolve).
- **Empacotador PBR / PoT (ORM)** e **Visualizador 3D Interativo**: valida texturas potência-de-2, empacota canais ORM e inspeciona malhas `.glb`/`.gltf` contra o orçamento 3D.

### Bloco B — Áudio, SFX & Música
- **Sintetizador SFX**: sintetizador procedural em WebAudio com exportação direta para `.wav`.
- **Chiptune Tracker**: sequenciador retrô multi-canal para trilhas curtas e jingles.
- **Sound Bank & Audio Bus Mixer**: variações aleatórias de pitch/volume e exportação de `default_bus_layout.tres`.
- **Lip-Sync & Dublagem**: sincronização de fonemas/visemas com áudio para retratos falantes.

### Bloco C — Combate, Gameplay & IA
- **Frame Data & Combate**: janelas de *startup*, *active* e *recovery*.
- **Hitbox / Hurtbox 2D**: retângulos de ataque e vulnerabilidade por frame de animação.
- **Árvore de Habilidades (`Skill Tree`)**: editor visual de nós de progressão e pré-requisitos.
- **Loot Table & Drops**: curvas de probabilidade, raridade e simulação de Monte Carlo.
- **State Machine & Behavior Tree**: máquinas de estado finito e árvores de comportamento para inimigos.
- **Itens & Inventário em Grid**: catálogo de itens, raridades e regras de inventário.

### Bloco D — Narrativa, Missões & Cinemáticas
- **Editor de Árvore de Diálogos**: ramificações, condições, variáveis e exportação JSON/GDScript.
- **Missões & Quests**: objetivos encadeados, recompensas e gatilhos narrativos.
- **Sequenciador Cinemático**: linha do tempo de câmera, falas e eventos de cutscene.

### Bloco E — Interface, HUD & Controles
- **Estúdio de HUD**: posicionamento de barras de vida, mana, minimapa e âncoras responsivas para `Control` / `CanvasLayer`.
- **Input Map**: mapeamento de ações de teclado e gamepad direto no `project.godot`.
- **Controles Virtuais (Touch)**: overlay de joystick e botões para mobile.
- **Menu de Configurações & Conquistas**: templates prontos de opções de áudio/vídeo e conquistas.

### Bloco F — Mundo, Câmera & Polimento
- **Gerador de Dungeons**: geração procedural de salas/corredores com exportação de layout.
- **Estúdio de Parallax 2D**: camadas de profundidade com fatores de scroll e preview animado.
- **Zonas de Câmera & Screen Shake**: limites de câmera por sala, *deadzones* e perfis de impacto.
- **Transições de Cena**: *fade*, *wipe*, *iris* e shaders de transição.

### Bloco G — Diagnóstico, Build & Empacotamento
- **Godot Project Linter & Live Link**: audita referências quebradas e acompanha logs do jogo em tempo real.
- **VRAM Profiler & Time-Travel Debugger**: estima consumo de memória de vídeo e inspeciona snapshots.
- **Save Game Hub & Launch Readiness**: checklist de lançamento, empacotamento Steam e exportação de bundle.

### Bloco H — Ferramentas Externas & Ecossistema Kenney
- Integrações diretas com **Kenney Shape (2D → 3D)**, **Avatar Mixer**, **Creature Mixer**, **Ship Mixer**, **Aseprite**, **Blender** e **Godot Editor**, configuráveis em **Configurações → Ferramentas**.
