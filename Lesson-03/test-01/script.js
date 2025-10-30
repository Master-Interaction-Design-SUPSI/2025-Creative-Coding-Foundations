// Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskContainer = document.getElementById('task-container');
const listViewBtn = document.getElementById('list-view-btn');
const cardViewBtn = document.getElementById('card-view-btn');

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
listViewBtn.addEventListener('click', () => toggleView('list'));
cardViewBtn.addEventListener('click', () => toggleView('card'));

// Add Task Function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;  // Don't add empty tasks

  const taskElement = document.createElement('div');
  taskElement.classList.add('task');
  taskElement.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(event)">Delete</button>
  `;

  taskContainer.appendChild(taskElement);
  taskInput.value = '';  // Clear input field
}

// Delete Task Function
function deleteTask(event) {
  const task = event.target.closest('.task');
  task.remove();
}

// Toggle between list and card views
function toggleView(view) {
  if (view === 'list') {
    taskContainer.classList.add('list-view');
    taskContainer.classList.remove('card-view');
  } else {
    taskContainer.classList.add('card-view');
    taskContainer.classList.remove('list-view');
  }
}
