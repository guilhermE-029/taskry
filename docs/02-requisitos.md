# Requisitos do Sistema Taskry

Este documento detalha os **requisitos funcionais e não-funcionais** que o **MVP do Taskry** deve satisfazer.

---

## 2.1. Requisitos Funcionais (RF)

| ID | Requisito | Descrição | Backlog (Pontuação) |
| :--- | :--- | :--- | :--- |
| **RF-001** | **Listar Tarefas** | O sistema deve exibir uma lista de todas as tarefas cadastradas. | 2 Pontos |
| **RF-002** | **Criar Tarefa** | O usuário deve ser capaz de adicionar uma nova tarefa fornecendo um título. | 3 Pontos |
| **RF-003** | **Marcar Conclusão** | O usuário deve ser capaz de marcar ou desmarcar uma tarefa como concluída (`done`). | 3 Pontos |
| **RF-004** | **Editar Título** | O usuário deve ser capaz de editar o título de uma tarefa existente. | 3 Pontos |
| **RF-005** | **Excluir Tarefa** | O usuário deve ser capaz de remover uma tarefa permanentemente. | 2 Pontos |

> **Total de Pontos do Sprint 1:** 13 (5 Backend + 8 Frontend)

---

## 2.2. Requisitos Não-Funcionais (RNF)

| Categoria | Requisito | Detalhes |
| :--- | :--- | :--- |
| **Desempenho** | **RNF-001** (Latência) | Todas as requisições CRUD devem ter um tempo de resposta inferior a 50 ms localmente. |
| **Tecnologia** | **RNF-002** (Stack) | O backend deve utilizar **Node.js + Express** e o banco de dados deve ser **SQLite**. |
| **Usabilidade** | **RNF-003** (UI/UX) | A interface deve ser simples, responsiva (básico) e intuitiva para as operações de CRUD. |
| **Portabilidade** | **RNF-004** (Ambiente) | O projeto deve ser executável em ambientes Linux (via **WSL2/Ubuntu**). |
| **Interface** | **RNF-005** (API) | A comunicação entre frontend e backend deve seguir o padrão **API REST** com dados em **JSON**. |
