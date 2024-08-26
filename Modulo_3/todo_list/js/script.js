
let tasks = [
    { id: 1, description: 'Tarea 1', completed: false },
    { id: 2, description: 'Tarea 2', completed: false },
    { id: 3, description: 'Tarea 3', completed: false }
];

const taskList = document.getElementById('task-list');
const totalTasks = document.getElementById('total-tasks');
const completedTasks = document.getElementById('completed-tasks');
const taskDescInput = document.getElementById('task-desc');
const addTaskBtn = document.getElementById('add-task-btn');

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            ${task.description}
            <div class="task-actions">
                <button class="complete-btn" onclick="toggleComplete(${task.id})">${task.completed ? 'Desmarcar' : 'Completar'}</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Eliminar</button>
            </div>
        `;
        taskList.appendChild(li);
    });

    updateSummary();
}


function updateSummary() {
    totalTasks.textContent = tasks.length;
    completedTasks.textContent = tasks.filter(task => task.completed).length;
}

addTaskBtn.addEventListener('click', () => {
    const desc = taskDescInput.value.trim();
    if (desc) {
        const newTask = {
            id: tasks.length + 1,
            description: desc,
            completed: false
        };
        tasks.push(newTask);
        renderTasks();
        taskDescInput.value = '';
    }
});

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function toggleComplete(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

renderTasks();
