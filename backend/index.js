const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const db = new Database(path.join(__dirname, 'db.sqlite'));
db.prepare(`CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  done INTEGER NOT NULL DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`).run();

app.get('/api/tasks', (req, res) => {
  const rows = db.prepare('SELECT * FROM tasks ORDER BY created_at DESC').all();
  res.json(rows);
});

app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if(!title) return res.status(400).json({ error: 'title required' });
  const stmt = db.prepare('INSERT INTO tasks (title) VALUES (?)');
  const info = stmt.run(title);
  const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(info.lastInsertRowid);
  res.status(201).json(task);
});

app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, done } = req.body;
  const stmt = db.prepare('UPDATE tasks SET title = COALESCE(?, title), done = COALESCE(?, done) WHERE id = ?');
  stmt.run(title, done ? 1 : 0, id);
  const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);
  if(!task) return res.status(404).json({ error: 'not found' });
  res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const stmt = db.prepare('DELETE FROM tasks WHERE id = ?');
  const info = stmt.run(id);
  if(info.changes === 0) return res.status(404).json({ error: 'not found' });
  res.status(204).end();
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
