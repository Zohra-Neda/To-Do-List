import './style.css';

const todosListEl = document.getElementById('todos-list');

const todos = [
  {
    description: 'task1',
    isCompleted: true,
  },
  {
    description: 'task2',
    isCompleted: false,
  },
  {
    description: 'task3',
    isCompleted: false,
  },
];

let content = '';
// RENDER TODOS
todos.forEach((todo, index) => {
  content += `
    <li id="todo-item">
      <div id=${index}>
        <span class="bi-circle"></span>
        <p>${todo.description}</p>
        <p>${todo.isCompleted}</p>
      </div>
    </li>`;
});

todosListEl.innerHTML = content;
