# Projeto **Taskry** — App de Tarefas (Do zero até o Sprint 1)

> Entrega: ideia, análise de requisitos, stack (com WSL), scaffold, sprint 1 (backlog, tarefas, DoD), versionamento e publicação local. Tudo pronto para rodar localmente.

---

## 1) Visão Geral (Objetivo)
Criar um *MVP* simples de um gerenciador de tarefas (To‑Do) com operações CRUD e interface web leve. Deve ser possível criar, listar, editar (título / marcar como feito) e excluir tarefas.

**Meta do Sprint 1:** entregar um MVP funcional rodando localmente em WSL, com repo git, branch de sprint, e tag `v0.1.0` ao final.

---

## 2) Escopo mínimo (MVP)
- API REST (JSON) com endpoints: `GET /api/tasks`, `POST /api/tasks`, `PUT /api/tasks/:id`, `DELETE /api/tasks/:id`.
- Banco leve (SQLite) sem necessidade de servidor extra.
- Frontend simples (HTML+JS) servido pelo backend (uma página única) para facilitar publicação local.
- Versionamento Git com branch `sprint-1` e tag `v0.1.0` no final.

---

## 3) Requisitos

### Funcionais
- Usuário pode ver lista de tarefas.
- Usuário pode criar uma nova tarefa com título.
- Usuário pode marcar/desmarcar tarefa como concluída.
- Usuário pode editar o título da tarefa.
- Usuário pode excluir tarefa.

### Não‑funcionais
- Resposta da API em JSON e rápida (SQLite suficiente).
- Projeto executável em WSL2 (Ubuntu) usando Node.js LTS.
- Código versionado com Git.

---

## 4) Histórias de usuário (com critérios de aceite)

1. **Como usuário, quero ver minhas tarefas** — `GET /api/tasks` — Aceite: retorna lista (0..N) com `id`, `title`, `done`, `created_at`.
2. **Como usuário, quero adicionar tarefas** — `POST /api/tasks` — Aceite: status 201 e tarefa criada com id.
3. **Como usuário, quero marcar/desmarcar tarefa** — `PUT /api/tasks/:id` — Aceite: campo `done` atualizado.
4. **Como usuário, quero excluir tarefa** — `DELETE /api/tasks/:id` — Aceite: status 204.
5. **Como dev, quero rodar tudo localmente em WSL** — Aceite: comando `npm install` e `npm start` inicia API e serve front no `http://localhost:3000`.

---

## 5) Stack de Produção (focando WSL que usamos)

**Ambiente alvo:** WSL2 (distribuição Ubuntu 22.04+). A aplicação roda totalmente dentro do WSL e é acessível via `http://localhost:3000` do Windows (WSL2 expõe localhost automaticamente).

**Tecnologias:**
- Node.js (LTS) + npm
- Express (server)
- better-sqlite3 (DB leve, sem async callback complexo)
- SQLite (arquivo `db.sqlite`)
- Frontend: HTML + vanilla JS (fetch)
- Git para versionamento

**Comandos sugeridos de preparação (no WSL):**

```bash
# atualizar sistema
sudo apt update && sudo apt upgrade -y
# utilitários
sudo apt install -y build-essential curl git sqlite3
# instalar nvm (instalador oficial) e Node LTS
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install --lts
node -v && npm -v
```

> Observação: WSL2 expõe `localhost` — abra `http://localhost:3000` no navegador do Windows.

---

## 6) Estrutura do projeto (proposta)

```
taskry/
├─ backend/
│  ├─ package.json
│  ├─ index.js        # servidor Express + API + serve /public
│  ├─ db.sqlite       # criado automaticamente
│  └─ public/
│     ├─ index.html
│     ├─ main.js
│     └─ style.css
├─ .gitignore
└─ README.md
```

---

## 7) Scaffold & Comandos (rápidos)
No WSL, execute (linha a linha):

```bash
# criar pasta do projeto
mkdir -p ~/taskry && cd ~/taskry
# inicializa git
git init
# scaffold backend
mkdir backend && cd backend
npm init -y
npm i express better-sqlite3 cors
# (opcional) nodemon para dev
npm i -D nodemon
cd ..
# criar arquivos (index.js, public/index.html etc.) — estes arquivos estão neste documento/zip
```

---

## 8) Versionamento (fluxo simples)
- Branch principal: `main` (ou `develop` se preferir)
- Trabalho de sprint em `sprint-1`
- Pull/Merge para develop/main com `--no-ff` e tag `v0.1.0` quando pronto

Comandos úteis:

```bash
git add .
git commit -m "chore: scaffold inicial"
git checkout -b sprint-1
# (trabalhar na sprint...)
git checkout develop
git merge --no-ff sprint-1 -m "feat(sprint-1): MVP"
git tag -a v0.1.0 -m "v0.1.0 - Sprint 1: MVP"
```

---

## 9) Sprint 1 — Plano detalhado

**Duração:** 2 semanas (sugestão) — ajustar conforme time

**Objetivo do Sprint:** entregar o MVP funcional (API+UI) rodando localmente e versionado.

### Backlog do Sprint 1 (priorizado)

1. **Setup dev & repo** — 1 ponto
   - Instalar dependências no WSL (Node, npm)
   - Inicializar git e branch `sprint-1`
   - Criar README e .gitignore
   - Aceite: repo pronto com `sprint-1`

2. **Backend: CRUD + DB** — 5 pontos
   - Criar `index.js` com endpoints e criação automática de tabela
   - Middleware JSON, CORS, static serve /public
   - Testes manuais via curl/postman
   - Aceite: endpoints funcionando localmente

3. **Frontend: UI e integração** — 8 pontos
   - Página para listar, criar, editar, marcar, excluir
   - Integração com API (fetch)
   - Aceite: usuário consegue todas as operações via UI

4. **Documentação + versão** — 2 pontos
   - Atualizar README com comandos de run e sprint notes
   - Tag `v0.1.0` criada

**Total estimado:** 16 pontos (time pode ajustar)

### Exemplo de divisão de tarefas (tarefas técnicas pequenas)
- T1: criar projeto e git + README (2h)
- T2: instalar dependências e criar index.js (4h)
- T3: criar endpoints GET/POST/PUT/DELETE (6h)
- T4: criar página `index.html` + JS (8h)
- T5: testes e correções (4h)
- T6: versão e tag (1h)

### Definition of Done (DoD)
- Código comenteado e commitado.
- Endpoints cobertos manualmente (postman/curl) e UI funcionando.
- Merge para `develop` (ou `main`) e tag `v0.1.0` criada localmente.
- README com instruções de setup e run.

---

## 10) Publicação local (como demonstrar deploy)
Rodar tudo em WSL e abrir `http://localhost:3000` do Windows.

```bash
# dentro de backend
npm install
npm start
# abrir http://localhost:3000
```

Para fazer a aplicação acessível publicamente (opcional): usar `ngrok` ou `localtunnel` — por simplicidade não incluí aqui.

---

## 11) Checklist para revisão do Sprint
- [ ] Backend endpoints implementados e testados
- [ ] Frontend integrado e UI aceitável
- [ ] README atualizado
- [ ] Branch `sprint-1` mergeado
- [ ] Tag `v0.1.0` criada

---

## 12) Próximos passos possíveis (pós Sprint 1)
- Adicionar autenticação simples (email/password)
- Persistir mais campos (due_date, priority)
- Tests automatizados (Jest + supertest)
- Dockerfile e CI (GitHub Actions)

---

## 13) Conteúdo deste documento
- Scaffold de arquivos e código de exemplo estão incluídos neste pacote / ZIP anexado ao canvas (veja também os arquivos criados localmente). Use-os como ponto de partida.

---

Se quiser, eu já gerei o scaffold e um ZIP com o backend + frontend mínimo prontos para rodar — disponível para download. Abra o arquivo no painel lateral ("Projeto Taskry — Do zero ao Sprint 1") para ver código, instruções e o backlog do Sprint 1. Se preferir, também posso criar um workflow GitHub Action para CI ou preparar um `docker-compose` no próximo passo.


---

*Fim do documento.*

