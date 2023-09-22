document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const spanCount = document.getElementById("count");
    let cc = 0;

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            return; 
        }

        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        const taskTextElement = document.createElement("span");
        taskTextElement.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Sil";

        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
            cc--; 
            spanCount.textContent = cc; 
        });

        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
        taskInput.value = "";
        cc++; 
        spanCount.textContent = cc;
    });
});
