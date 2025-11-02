## 3. Arquitetura Técnica do Taskry

Este documento define a arquitetura de alto nível, a stack tecnológica e a estrutura de diretórios do projeto.

# 3. Arquitetura Técnica do Taskry

Este documento define a arquitetura de alto nível, a stack tecnológica e a estrutura de diretórios do projeto.

## 3.1. Diagrama de Alto Nível (Modelo C4 - Nível 1)

O diagrama abaixo ilustra a relação entre as principais entidades do sistema.

```mermaid
graph TD
    %% Entidades Principais
    A[Usuário Final]
    B(Navegador Web)
    C(Backend Node.js/Express)
    D[SQLite DB - db.sqlite]

    %% Fluxo de Interação
    A -- 1. Acesso HTTP --> B
    B -- 2. Requisições API (JSON) --> C
    C -- 3. Comandos SQL --> D
    C -- 4. Serve Conteúdo Estático --> B
    B -- 5. Renderiza UI --> A

    %% Estilos (Opcional, mas melhora a visualização em alguns renderizadores Mermaid)
    style A fill:#f9f,stroke:#000000,stroke-width:2px
    style B fill:#bbf,stroke:#000000,stroke-width:2px
    style C fill:#ccf,stroke:#000000,stroke-width:2px
    style D fill:#cfc,stroke:#000000,stroke-width:2px
```

## 3.2. Stack Tecnológica

| Camada | Tecnologia | Detalhes / Justificativa |
| :--- | :--- | :--- |
| **Backend (Server)** | Node.js (LTS) | Runtime JavaScript para alto desempenho e ecossistema robusto. |
| **Backend (Framework)** | Express | Framework minimalista e flexível para criação da API REST. |
| **Banco de Dados** | SQLite3 | Banco de dados leve baseado em arquivo (`better-sqlite3`), ideal para MVPs. |
| **Frontend** | HTML5 / Vanilla JS / CSS | Simplicidade e rapidez na implementação da UI para o MVP. |
| **DevOps / Ambiente** | Git / WSL2 | Versionamento profissional e ambiente Linux padronizado. |

---

## 3.3. Estrutura de Diretórios

```bash
taskry/
├── .gitignore
├── README.md
└── docs/
    ├── 01-visao-geral.md
    ├── 02-requisitos.md
    ├── 03-arquitetura.md  # (Este arquivo)
    └── 04-api-rest.md
└── backend/
    ├── package.json
    ├── index.js
    ├── db.sqlite
    └── public/
        ├── index.html
        ├── style.css
        └── main.js

