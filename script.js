const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let tasks = [];

function showTask() {

    todoList.innerHTML = "";

    tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    for (let i = 0; i < tasks.length; i++) {

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.innerText = tasks[i];

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click", function () {

            tasks.splice(i, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            showTask();
        });

        const editBtn = document.createElement("button");

        editBtn.innerText = "Edit";

        editBtn.addEventListener("click", function () {

            const updatedTask = prompt("Edit Task", tasks[i]);

            tasks[i] = updatedTask;

            localStorage.setItem("tasks", JSON.stringify(tasks));

            showTask();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);

        todoList.appendChild(li);
    }
}

showTask();

addBtn.addEventListener("click", function () {

    const task = todoInput.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    todoInput.value = "";

    showTask();
});