# Visão Geral do Projeto Taskry

Este documento define a visão de produto e o escopo do **Projeto Taskry**, conforme estabelecido para a entrega do **MVP (Produto Mínimo Viável)**.

---

## 1.1. Visão de Produto

O **Taskry** será um **aplicativo web simples e leve** focado na **gestão pessoal de tarefas**.  
Seu principal objetivo é **provar a viabilidade** de uma arquitetura **full-stack baseada em Node.js (Express)** com **persistência leve via SQLite**.

---

## 1.2. Metas (OKR)

| Tipo | Objetivo | Resultado-Chave (KR) | Status (Sprint 1) |
| :--- | :--- | :--- | :--- |
| Produto | Entregar o MVP com CRUD básico funcional. | 100% dos 4 endpoints da API implementados. | **Blueprint (Planejado)** |
| Qualidade | Garantir execução estável da aplicação. | 0 bugs críticos de CRUD após testes manuais. | **Blueprint (Planejado)** |
| Entrega | Finalizar e versionar a primeira release. | Publicar a tag `v0.1.0` no repositório. | **Blueprint (Planejado)** |

---

## 1.3. Escopo do Sprint 1 (MVP)

O foco do **Sprint 1** é implementar a **funcionalidade central de gerenciamento de tarefas**.

| Item | Descrição |
| :--- | :--- |
| **CRUD** | Criar, listar, editar e excluir tarefas. |
| **Interface** | SPA simples (Single Page Application) em Vanilla JS, HTML e CSS. |
| **Persistência** | Banco de dados SQLite (`db.sqlite`) para armazenamento local. |
| **Ambiente** | Execução local no ambiente WSL2 (Ubuntu). |

> **Fora do escopo do Sprint 1:** autenticação de usuários, datas de vencimento ou prioridade, testes automatizados e deploy em produção.
