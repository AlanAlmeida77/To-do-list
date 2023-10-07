// script.js
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Debes agregar una tarea!");
        return;
    }
    
    const taskList = document.getElementById("task-list");
    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    
    taskInput.value = "";
}

function deleteTask(button) {
    const taskList = document.getElementById("task-list");
    taskList.removeChild(button.parentElement);
}
