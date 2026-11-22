---
title: Biblioteca Local de Assets, Starter Packs & Ferramentas Externas
description: Como montar sua pasta local de pacotes Kenney (CC0), configurar orçamento técnico e integrar Aseprite, Blender e Kenney Shape.
---

O **HephaestusForge** não distribui pacotes de terceiros embutidos no executável; em vez disso, ele lê **sua própria biblioteca local** de arquivos `.zip` (como os kits gratuitos **CC0** do [kenney.nl](https://kenney.nl/assets)) e os importa de forma segura para cada novo projeto.

## 1. Como Montar sua Biblioteca Local de Starter Packs (Kenney)

1. Crie uma pasta no seu computador para guardar seus pacotes baixados — por exemplo:
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
2. Baixe os pacotes `.zip` desejados em [kenney.nl/assets](https://kenney.nl/assets) e salve-os dentro dessa pasta (não precisa descompactar).
3. No **Ritual de Novo Projeto** (ou no seletor de Starter Packs), aponte para a pasta raiz da sua biblioteca (`C:\Assets\Kenney`).

### Regras de Detecção Automática (`scan_kenney_library`)

- **Profundidade**: varre até **4 níveis de subpastas** (ignora symlinks e limita a 5.000 entradas).
- **Agrupamento automático**: o nome da **primeira subpasta** (`2d`, `3d`, `ui`, `audio`, etc.) vira automaticamente o grupo do kit na interface.
- **Nomenclatura aceita**:
  - Arquivos começando com `kenney_` (ex.: `kenney_tiny-dungeon_1.2.zip`) são reconhecidos em **qualquer pasta** dentro da biblioteca.
  - Arquivos **sem** o prefixo `kenney_` (ex.: `tiny-dungeon.zip`) também são reconhecidos **desde que estejam dentro de uma pasta chamada `kenney`**. Essa proteção evita rotular erroneamente um `.zip` de outra origem como CC0 do Kenney.
- **Deduplicação**: se você baixou o mesmo pacote duas vezes (ex.: `kenney_ui-pack (1).zip`), o scanner prioriza automaticamente o arquivo principal sem sufixo de cópia.

## 2. Manifesto `.forge/starter_assets.json`

Quando um pacote é adicionado ao projeto, o HephaestusForge grava atomicamente `.forge/starter_assets.json` registrando:

- **`id` / `name` / `path`**: localização do pacote dentro do projeto.
- **`license` / `source_url` / `publishable`**: rastreabilidade de licença (CC0 vs assets placeholder).
- **`main_scene`**: mapeamento dos slots da cena principal ligados aos outputs dos Estúdios 2D.

## 3. Orçamento Técnico de Assets (`.forge/asset_spec.json`)

O **Catálogo de Assets** inspeciona texturas, sprites, áudios e modelos 3D do projeto. Você pode configurar limites de resolução máxima (ex.: `2048px`), potência de dois e peso em disco criando ou editando `.forge/asset_spec.json` na raiz do workspace.

## 4. Integração com Ferramentas Externas & Geradores

Em **Configurações → Ferramentas & Softwares**, **Estúdios → Geradores & externos** e no **Catálogo de Assets**, você encontra dois tipos de integrações:

### Softwares Locais (Auto-detectados no Windows)
- **Kenney Shape (2D → 3D)**: extrusão de pixel art 2D em modelos 3D low-poly (`.obj`, `.glb`, `.fbx`).
- **Aseprite**, **Blender**, **Krita**, **GIMP**, **Photoshop**, **Audacity** e **Suíte ArtCraft**.
- Clique em **Re-escanear** em *Configurações → Ferramentas & Softwares* sempre que instalar um novo software.

### Geradores Web (Zero Instalação)
- **Kenney Avatar Mixer**, **Kenney Creature Mixer** e **Kenney Ship Mixer** — abrem direto no navegador para gerar personagens, criaturas e naves CC0 prontos para importar na pasta `assets/`.
- Atalhos para **PMDCollab SpriteCollab**, **Kenney.nl**, **Quaternius**, **BeepBox**, **Chiptone**, **AudioMass** e **Jfxr**.
