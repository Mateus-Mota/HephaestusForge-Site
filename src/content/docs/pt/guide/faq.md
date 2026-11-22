---
title: Perguntas Frequentes (FAQ)
description: Respostas para as dúvidas mais comuns sobre o HephaestusForge, arquitetura File-over-App, Godot 4, privacidade e Starter Packs do Kenney.
---

## Geral & Arquitetura

### O que significa "100% File-over-App"?
Tudo o que você cria no **HephaestusForge** — documentos de GDD, tarefas do Kanban, Registros de Decisão Arquitetural (ADRs), fluxos de diálogo, skills de IA e artefatos exportados pelos estúdios — é salvo em arquivos comuns `.md`, `.json`, `.tres`, `.tscn`, `.gd`, `.gdshader`, `.png` ou `.wav` dentro da pasta do seu próprio jogo. Não existe **nenhum banco de dados proprietário** nem **lock-in**. Se você desinstalar o app amanhã, seu projeto e sua documentação continuam 100% íntegros no Git.

### O HephaestusForge precisa de internet ou de conta?
Não. O HephaestusForge é um aplicativo desktop **local-first** feito em Tauri v2 + Rust. Funciona totalmente offline, não exige login, não coleta telemetria e abre **zero portas TCP locais**. A internet só é usada se você clicar explicitamente em um gerador web externo (como o Kenney Avatar Mixer) ou baixar uma nova versão.

### Por que o instalador tem apenas ~10 MiB?
Ao contrário de apps Electron que empacotam um navegador Chromium inteiro (~150+ MiB), o HephaestusForge usa **Tauri v2**, aproveitando o **Windows WebView2 Runtime** nativo do sistema combinado a um backend compilado em Rust.

---

## Engines & Compatibilidade

### Funciona apenas com Godot 4?
O **Godot 4** tem a integração mais profunda de primeira classe (`Play F5`, Input Map direto no `project.godot`, `.tres`, `.tscn`, `.gd`, `.gdshader` e cena 2D jogável no Ritual). Porém, como toda a documentação, Kanban, ADRs, fluxos JSON/Yarn, efeitos `.wav` e sprites `.png` são arquivos abertos, você também pode usar a Forja ao lado de Unity, Raylib, Love2D ou engines próprias.

### Existem versões para macOS ou Linux?
No momento, os instaladores oficiais são compilados e testados para **Windows 10/11 (x64)** (`.exe` NSIS e `.msi`). Acompanhe a página de [Downloads](/pt/downloads/) e o [Changelog](/pt/changelog/) para novidades de plataforma.

---

## Assets & Licenciamento

### Os Starter Packs do Kenney vêm embutidos no instalador?
Não. Para respeitar as diretrizes de redistribuição e manter o instalador leve, o HephaestusForge lê **sua própria pasta local** com os arquivos `.zip` baixados em [kenney.nl/assets](https://kenney.nl/assets). Veja o passo a passo de 2 minutos em [Assets, Starter Packs & Ferramentas](/pt/guide/assets-and-starter-packs/).

### Posso usar comercialmente os arquivos exportados pelos Estúdios?
Sim. Os arquivos gerados pelos 37 estúdios internos (`.tres`, `.tscn`, `.gd`, `.gdshader`, `.wav`, `.json`, `.md`) pertencem a você. Ao usar Starter Packs de terceiros (como os kits CC0 do Kenney), confira `.forge/starter_assets.json` para rastreabilidade de licença.

---

## Instalação & Atualizações

### O Windows SmartScreen exibiu um alerta ao abrir o instalador. É seguro?
Sim — versões indie iniciais ainda não são assinadas com certificado comercial EV, o que faz o Windows SmartScreen mostrar um aviso genérico de *"Editor desconhecido"*. Sempre confirme que baixou o arquivo pela página oficial de [Downloads](/pt/downloads/) ou pelas [GitHub Releases](https://github.com/Mateus-Mota/HephaestusForge-Site/releases).

### Como atualizar para uma nova versão?
Baixe o instalador `.exe` ou `.msi` mais recente na página de [Downloads](/pt/downloads/) e execute-o. Seus jogos e arquivos de workspace ficam nas suas próprias pastas e nunca são alterados durante atualizações do aplicativo.
