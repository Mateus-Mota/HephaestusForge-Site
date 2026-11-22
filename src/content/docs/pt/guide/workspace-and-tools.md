---
title: Workspace, Barra Lateral Customizável & Ferramentas da Forja
description: Como personalizar 100% a barra lateral, usar GDD, Kanban, Mapa, Fluxos, Prompts, Skills e atalhos de teclado.
---

O **HephaestusForge** segue o princípio **File-over-App**: tudo o que você cria (GDDs, tarefas do Kanban, fluxos narrativos, ADRs, skills e assets) vive em arquivos reais legíveis dentro do repositório do seu jogo.

## 1. Barra Lateral 100% Customizável

Por padrão, a barra lateral esquerda abre com os 4 módulos mais usados no dia a dia: **GDD**, **Kanban**, **Mapa** e **Estúdios**.

Porém, **nenhum módulo é obrigatório**:
1. Clique em **Mais (`⋯`)** no canto inferior esquerdo.
2. Use o ícone de **alfinete** para **fixar ou desafixar qualquer módulo** (inclusive *GDD*, *Kanban*, *Mapa* e *Estúdios*).
3. Quando houver 2 ou mais módulos fixados, use as setas **`↑` / `↓`** para escolher a ordem exata da sua barra lateral.
4. Módulos fixados exibem **badges dinâmicos** com contagens ao vivo (tarefas ativas, assets, ADRs, skills ativas, fluxos e entidades).
5. Se quiser voltar ao layout original, clique em **Restaurar barra padrão** no rodapé do menu *Mais*.

:::tip[Mantenha uma barra lateral enxuta]
Fixe apenas os 3 a 5 módulos que você usa todo dia e use **`Ctrl+K`** (Paleta de Comandos) para saltar instantaneamente para qualquer outro módulo, documento, tarefa ou estúdio.
:::

## 2. Módulos Principais do Dia a Dia

| Módulo | Para que serve | Dica rápida |
|---|---|---|
| **GDD** | Documentação viva do jogo em Markdown com CodeMirror 6 e `[[WikiLinks]]`. | `Ctrl+S` salva atomicamente; `Alt+←` / `Alt+→` navega no histórico. |
| **Kanban** | Gestão de tarefas em 5 raias (*Backlog, Em Andamento, Em Revisão, Bloqueado, Concluído*). | Arraste cards manualmente entre colunas ou use `Alt+←` / `Alt+→` no card focado. |
| **Mapa do Projeto** | Visão macro ligando tarefas, GDDs, ADRs e esteira de produção. | Alterne entre modo **Mapa** e **Quadro** no topo. |
| **Estúdios (a Oficina)** | 37 bancadas internas (Sprites, Shaders, HUD, Tilemap, Combate, Áudio, Loot) + **Geradores & externos** (Kenney). | Use `Ctrl+K` para abrir qualquer estúdio direto pelo teclado. |
| **Diálogos & Quests (Flow)** | Editor visual de árvores de diálogo, quests e FSM com simulador interativo e exportação Godot/Yarn/Dialogic. | Clique em **Simular Fluxo** para testar variáveis e ramificações antes de exportar. |
| **Prompt Studio** | Templates de IA que injetam contexto vivo (GDD, tarefas, ADRs, papéis e skills). | Use **Foco** para recolher a barra lateral e **Editar** para ajustes rápidos. |
| **Skills de IA** | Gestão de `.agents/skills/`, papéis em `.agents/roles/`, Hub Público e **Radar de Ferramentas Públicas**. | Ative ou desative skills por fase do projeto sem apagar arquivos. |
| **Decisões (ADRs)** | Registro formal de decisões arquiteturais do projeto. | Clique em **Analisar com IA** para revisar trade-offs no Prompt Studio. |

## 3. Atalhos Essenciais

- **`Ctrl+K`**: Paleta de Comandos (abre módulos, documentos, tarefas, estúdios e geradores Kenney).
- **`F5`**: Executa o projeto na engine configurada (ex.: Godot).
- **`Ctrl+,`**: Abre as Configurações do Projeto & Estação de Trabalho.
- **`?`** (botão de ajuda no topo): Abre a ajuda contextual da tela atual.

Veja a lista completa em **[Atalhos de Teclado](/pt/guide/shortcuts/)**.
