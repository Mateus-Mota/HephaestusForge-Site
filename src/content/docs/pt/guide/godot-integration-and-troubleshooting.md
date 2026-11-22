---
title: Integração com Godot 4 & Solução de Problemas
description: Como configurar o executável Godot 4, estrutura dos projetos gerados e resolução rápida de problemas comuns no Windows.
---

Este guia explica como conectar seu executável do **Godot 4** ao **HephaestusForge**, como funciona a cena principal jogável dos projetos criados no Ritual e como resolver os problemas mais comuns no Windows.

## 1. Configurando o Godot 4 no HephaestusForge

1. Baixe o **Godot 4.x** (Standard ou .NET) em [godotengine.org](https://godotengine.org/).
2. No HephaestusForge, abra **Configurações** (engrenagem no canto inferior esquerdo) → aba **Ferramentas**.
3. No campo **Caminho do Executável Godot**, selecione o arquivo `Godot_v4.x_win64.exe` (preferencialmente a versão normal ou `_console.exe` para capturar logs detalhados).
4. Clique em **Salvar**. A partir desse momento:
   - **Play (`F5`)** na barra superior ou dentro de qualquer tarefa do Kanban executa o jogo diretamente.
   - **Abrir no Editor** abre o projeto completo no editor do Godot 4.

:::tip[Logs detalhados com `_console.exe`]
No Windows, o Godot distribui `Godot_v4.x_win64.exe` e `Godot_v4.x_win64_console.exe`. Apontar para o `_console.exe` facilita acompanhar prints de runtime e stack traces durante o debug.
:::

## 2. Estrutura do Projeto Gerado & Cena Principal

Ao criar um jogo pelo **Ritual de Criação** ou pelo **Project Forge Wizard**, o HephaestusForge gera uma estrutura pronta para rodar:

```text
meu-jogo/
├── project.godot                # Configuração da engine, resolução e Input Map
├── scenes/
│   └── main.tscn                # Cena principal jogável
├── scripts/                     # Scripts GDScript (.gd)
├── assets/                      # Sprites, áudio, fontes e modelos 3D
├── docs/
│   ├── gdd/                     # Documentos do Game Design (Markdown + Wikilinks)
│   └── coordination/            # Tarefas do Kanban (.json) e ADRs (.md)
└── .forge/
    ├── config.json              # Metadados do projeto
    ├── asset_spec.json          # Orçamento técnico de assets
    └── starter_assets.json      # Manifesto do Starter Pack aplicado (quando usado)
```

## 3. Solução de Problemas Comuns (Windows)

### "Botão Play (F5) não abre o jogo"
- Verifique em **Configurações → Ferramentas** se o caminho do Godot 4 aponta para o `.exe` válido (e não para a pasta).
- Confirme que existe um arquivo `project.godot` na raiz do workspace ativo.

### "Os assets do Starter Pack não apareceram ao criar um projeto"
- O Starter Pack lê pacotes `.zip` da sua pasta local de biblioteca configurada em **Configurações → Biblioteca de Assets**.
- Veja o passo a passo completo em [Biblioteca Local de Assets & Starter Packs](/pt/guide/assets-and-starter-packs/).

### "Arrastar cards no Kanban não responde"
- A partir da `v0.3.0`, o Kanban usa arraste nativo por *pointer events* compatível com Windows WebView2. Clique e segure no corpo do card (fora dos botões de ação) e arraste sobre a coluna de destino.

### "Quero restaurar os módulos padrão da barra lateral"
- Clique em **Mais (`⋯`)** na barra lateral esquerda e use **Restaurar barra padrão** para voltar aos 4 módulos iniciais (`GDD`, `Kanban`, `Mapa` e `Estúdios`).

:::caution[Evite pastas sincronizadas na nuvem para projetos Git + Godot]
Manter o projeto dentro do OneDrive ou Dropbox pode travar arquivos de cache em `.godot/` e gerar conflitos com gravações atômicas. Prefira uma pasta local como `C:\Dev\Games\meu-jogo` com backup via Git.
:::
