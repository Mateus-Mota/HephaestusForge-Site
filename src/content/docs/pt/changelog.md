---
title: Changelog
description: Histórico de lançamentos e principais melhorias do HephaestusForge.
---

## `v0.4.0` (Novembro 2026) · Integração com IA

### Novidades
- **Agentes de IA dentro do app**: Claude Code, Codex, OpenCode, Gemini e Antigravity rodam direto no projeto, com saída ao vivo, conversa contínua, revisão do que mudou e desfazer por arquivo.
- **HephaestusForge como servidor MCP**: os agentes leem GDD, tarefas, assets, estúdios, busca e grafo, e movem tarefas no Kanban.
- **Login dos agentes pelo app** e **painel de IA** com botão próprio na barra de cima e modo tela cheia.
- **Estúdios conectados ao Godot**: "Conectar ao Godot", "Testar no Preview" em HTML5 e ponte entre os estúdios de RPG.
- Painéis laterais redimensionáveis; o app abre maximizado.

### Correções
- Trocar de projeto não mistura mais dados do anterior (Codex, Galeria, Mapa, Grafo e FSM).
- "Voltar" da Nova encomenda, previews HTML5 no app instalado, tour e HUD do Ritual.

---

## `v0.3.0` (Novembro 2026)

### Novidades & UX
- **Barra lateral 100% customizável**: todos os módulos (incluindo GDD, Kanban, Mapa e Estúdios) podem ser fixados, desafixados e reordenados com badges dinâmicos e botão *Restaurar barra padrão*.
- **Arraste manual no Kanban para Windows WebView2**: migração do drag-and-drop para *pointer events* nativos com pré-visualização da coluna alvo.
- **Cena principal jogável ligada aos Starter Packs & Estúdios**: projetos Godot 2D criados no Ritual já nascem com cena jogável e integração direta com os Estúdios 2D.
- **Radar de Ferramentas Públicas**: renomeado em Skills para refletir catálogos de ferramentas públicas e open source.
- **Limpeza do Catálogo de Assets**: remoção dos 14 atalhos duplicados de estúdios internos, centralizando o acesso pelo botão *Abrir Estúdios →*.

### Arquitetura & Qualidade
- **Zero `: any` em produção** (`0 errors, 0 warnings` no linter estático e Design Tokens).
- **Modularização profunda** dos principais workspaces e estúdios (`PromptWorkspace`, `SkillsWorkspace`, `FlowWorkspace`, `SettingsWorkspace`, `AssetDetailModal`, `ProjectForgeWizardModal`, `TaskDetailModal`, `Navigator`, `CameraZoneStudioModal`, `Parallax2dStudioModal`).
- **Expansão de cobertura de testes unitários** no frontend e core Rust.

---

## `v0.2.5`
- Primeira release pública do host desktop Tauri v2 Full-Rust com editor GDD CodeMirror 6, Kanban LexoRank, Grafo de Conhecimento Cytoscape, Catálogo de Assets e Estúdios 2D/3D.
