# 4. Especificação da API REST Taskry

Este documento detalha todos os endpoints da API REST implementada pelo Backend Express.

## 4.1. Modelo de Dados (Task)

| Campo | Tipo | Descrição | Restrições |
| :--- | :--- | :--- | :--- |
| `id` | `INTEGER` | ID único da tarefa. | Primary Key, Auto-incremento |
| `title` | `TEXT` | O conteúdo da tarefa. | Obrigatório, Não Nulo |
| `done` | `INTEGER` | Status de conclusão (0 = Pendente, 1 = Concluído). | Padrão: 0 |
| `created_at`| `DATETIME`| Data e hora da criação. | Padrão: Current Timestamp |

---

## 4.2. Endpoints da API

**Base URL:** `/api/tasks`

### GET /api/tasks (Listar Tarefas)

Lista todas as tarefas no banco de dados, ordenadas da mais recente para a mais antiga.

| Detalhe | Valor |
| :--- | :--- |
| **Método** | `GET` |
| **Corpo Req.**| Nenhum |
| **Corpo Resp.**| `200 OK` - Array de objetos `Task` |

**Exemplo de Resposta (200):**
```json
[
  { "id": 1, "title": "Implementar CRUD", "done": 1, "created_at": "..." },
  { "id": 2, "title": "Escrever documentação Blueprint", "done": 0, "created_at": "..." }
]

