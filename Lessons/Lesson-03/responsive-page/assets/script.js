// create the objects

// buttons
const buttonListView = document.getElementById('list-view-btn');
const buttonCardView = document.getElementById('card-view-btn');
const buttonAdd = document.getElementById('add-btn');

// elements
const taskList = document.getElementById('task-list-container');
const inputFiled = document.getElementById('task-input');

// add the event listener on the buttons

// view option
buttonListView.addEventListener('click', () => {
    console.log("List view button pressed");
    taskList.classList.replace('card-view', 'list-view');
    buttonListView.classList.add('active');
    buttonCardView.classList.remove('active');
})

buttonCardView.addEventListener('click', () => {
    console.log("Card view button pressed");
    taskList.classList.replace('list-view', 'card-view');
    buttonCardView.classList.add('active');
    buttonListView.classList.remove('active');
})

buttonAdd.addEventListener('click', () => {
    console.log("Add button pressed");

    const newTask = inputFiled.value;

    console.log(newTask);

    const taskElement = document.createElement('li');
    taskElement.innerHTML = newTask;

    taskList.appendChild(taskElement);

    inputFiled.value = "";

})