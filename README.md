# Taskry — App de Tarefas (MVP)

Projeto mínimo para gerenciar tarefas (CRUD) — backend + frontend estático servido pelo Express.

## Como rodar (WSL)

```bash
# suposição: node & npm já instalados no WSL
cd ~/taskry/backend
npm install
npm start
# abrir no Windows: http://localhost:3000
```

## Git (exemplo rápido)
```bash
git init
git add .
git commit -m "chore: scaffold inicial"
git checkout -b sprint-1
```

## Endpoints principais
- GET  /api/tasks
- POST /api/tasks  { title }
- PUT  /api/tasks/:id { title?, done? }
- DELETE /api/tasks/:id
