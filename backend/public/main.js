async function api(path, method='GET', body){
  const opts = {method, headers:{'Content-Type':'application/json'}};
  if(body) opts.body = JSON.stringify(body);
  const res = await fetch('/api' + path, opts);
  if(res.status === 204) return null;
  return res.json();
}

async function fetchTasks(){
  const tasks = await api('/tasks');
  render(tasks);
}

function render(tasks){
  const el = document.getElementById('tasks');
  el.innerHTML = '';
  tasks.forEach(t => {
    const li = document.createElement('li');
    li.className = t.done ? 'done' : '';
    const chk = document.createElement('input'); chk.type='checkbox'; chk.checked = !!t.done;
    chk.addEventListener('change', async ()=>{
      await api('/tasks/'+t.id, 'PUT', { done: chk.checked });
      fetchTasks();
    });
    const span = document.createElement('span'); span.className='title'; span.textContent = t.title;
    span.contentEditable = true;
    span.addEventListener('blur', async ()=>{
      await api('/tasks/'+t.id, 'PUT', { title: span.textContent });
      fetchTasks();
    });
    const del = document.createElement('button'); del.className='btn'; del.textContent='✖';
    del.addEventListener('click', async ()=>{ await api('/tasks/'+t.id, 'DELETE'); fetchTasks(); });
    li.appendChild(chk);
    li.appendChild(span);
    li.appendChild(del);
    el.appendChild(li);
  });
}

document.getElementById('form').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  if(!title) return;
  await api('/tasks', 'POST', { title });
  document.getElementById('title').value='';
  fetchTasks();
});

fetchTasks();
