---
title: Primeiros Passos & Ritual de Criação
description: Caminho mais curto entre instalar o HephaestusForge e rodar seu primeiro projeto Godot 4 com Play (F5).
---

Este guia cobre o caminho mais curto entre abrir o **HephaestusForge** pela primeira vez e ter um projeto estruturado rodando na sua engine.

## 1. Requisitos Recomendados

- **Sistema Operacional**: Windows 10/11 (x64) com WebView2 Runtime (já incluso no Windows 11).
- **Engine de Jogo** *(opcional, mas recomendada para o botão `Play F5`)*:
  - **Godot 4.x** instalada localmente ou no `PATH`.
- **Git** *(opcional)*: habilita branch por tarefa, status em tempo real e commit assistido no Kanban.
- **Biblioteca local de Starter Packs (Kenney CC0)** *(opcional)*: permite começar um projeto novo já com sprites, tiles e áudio prontos — veja o passo a passo em [Biblioteca Local de Assets & Starter Packs](/pt/guide/assets-and-starter-packs/).

## 2. Criando um Novo Jogo pelo Ritual

1. No **Menu Principal**, clique em **Novo Jogo** (ou abra um workspace existente).
2. Informe o **nome do projeto**, a **pasta de destino** e a **engine alvo** (ex.: Godot 4).
3. *(Opcional)* Escolha um **Starter Pack** da sua biblioteca local de kits Kenney.
4. Ao finalizar o Ritual, o HephaestusForge gera automaticamente:
   - Estrutura de documentação viva (`docs/gdd/`, `docs/coordination/tasks/`, `docs/coordination/decisions/`).
   - Manifesto de assets iniciais (`.forge/starter_assets.json`).
   - **Cena Principal jogável** (em projetos Godot 2D com Starter Pack), já com chão visível, sala dimensionada e plataforma alcançável.

:::tip[Zero lock-in]
Tudo que o Ritual cria é Markdown puro, JSON e arquivos padrão do Godot 4 (`.tscn`, `.gd`, `.tres`). Você pode abrir seu projeto no Godot ou em qualquer cliente Git a qualquer momento sem depender do HephaestusForge aberto.
:::

## 3. Rodando o Jogo (`Play / F5`) e Usando os Estúdios

- Clique em **Play (`F5`)** na barra superior para abrir ou executar o projeto diretamente na **Godot**.
- Abra **Estúdios** (a Oficina) para criar animações de sprite, shaders 2D, HUD ou colisões de tilemap.
- Ao exportar um artefato de um estúdio 2D (*Sprite Animation*, *Shader VFX 2D*, *HUD* ou *Tilemap*), clique em **"Usar na cena principal"** para conectar o arquivo gerado diretamente aos slots da cena principal em `.forge/starter_assets.json`.

:::note[Primeira vez configurando o Godot 4?]
Se `Play (F5)` não abrir automaticamente, aponte o HephaestusForge para o seu executável `Godot_v4.x_win64.exe` em **Configurações → Ferramentas** — veja [Integração com Godot 4 & Solução de Problemas](/pt/guide/godot-integration-and-troubleshooting/).
:::

## 4. Tour do Aprendiz (*Forja Viva*)

Se quiser conhecer a interface sem risco de mexer no seu projeto real, abra a demo **`ForgePong`** no Menu Principal e inicie o **Tour do Aprendiz**. Você pode avançar, usar o botão **Voltar** em qualquer parada ou pular o tour quando quiser.
