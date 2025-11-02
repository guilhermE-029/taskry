# 🚀 Taskry — Gerenciador de Tarefas (MVP)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Stack: Node.js/Express](https://img.shields.io/badge/Stack-Node%2FExpress-blue)](https://nodejs.org/)
[![Database: SQLite](https://img.shields.io/badge/DB-SQLite-green)](https://www.sqlite.org/index.html)
[![Version: v0.1.0](https://img.shields.io/badge/Version-v0.1.0-orange)](https://github.com/seu-usuario/taskry/releases/tag/v0.1.0)

Taskry é um Produto Mínimo Viável (MVP) para gerenciar tarefas (To-Do List). O objetivo deste projeto é fornecer uma solução completa de CRUD de tarefas em uma arquitetura simples e leve.

---

## 🗺️ Documentação Blueprint (Antes do Código)

Este projeto segue a abordagem de Documentação Blueprint, onde a arquitetura e os requisitos são definidos antes ou em paralelo à implementação.

Todos os detalhes técnicos, de escopo e de API estão em formato Markdown na pasta `/docs`.

| Documento | Descrição |
| :--- | :--- |
| **[Visão Geral](docs/01-visao-geral.md)** | Objetivo do MVP, escopo do Sprint 1 e cronograma. |
| **[Requisitos](docs/02-requisitos.md)** | Lista completa de Requisitos Funcionais e Não-Funcionais. |
| **[Arquitetura](docs/03-arquitetura.md)** | Stack tecnológica e diagrama de alto nível. |
| **[API REST](docs/04-api-rest.md)** | Especificação de todos os endpoints e modelos de dados. |

---

## 🛠️ Setup e Execução Local

Este projeto foi projetado para rodar em um ambiente **WSL2 (Ubuntu)**.

### 1. Pré-requisitos

* [Node.js (LTS)](https://nodejs.org/en/download)
* npm (já incluso no Node.js)
* [WSL2 + Ubuntu](https://docs.microsoft.com/pt-br/windows/wsl/install)

### 2. Rodando o Servidor

```bash
# Navegue até a pasta do backend
cd taskry/backend 

# Instale as dependências
npm install

# Inicie o servidor
npm start 
# ou npm run dev (se tiver nodemon instalado)

### 3. Acesso

O servidor será iniciado na **porta 3000**.

| Tipo de Acesso               | URL / Detalhes                                      |
|------------------------------|-----------------------------------------------------|
| **Aplicação Web (Frontend)** | [http://localhost:3000](http://localhost:3000) — Acesse pelo navegador no Windows. |
| **API Root**                 | [http://localhost:3000/api/tasks](http://localhost:3000/api/tasks) |

---

### 🎯 Meta do Sprint 1 (DoD)

A versão **v0.1.0** representa o **MVP totalmente funcional**.

#### Entregáveis:

- ✅ **Backend** com CRUD completo via **Express / SQLite**  
- ✅ **Frontend** em **HTML / JS / CSS** com interface utilizável  
- ✅ **Versionamento** com branch `sprint-1` mergeado para `develop` ou `main`  
- ✅ **Documentação Blueprint** finalizada e incluída no repositório  
