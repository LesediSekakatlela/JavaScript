document.addEventListener("DOMContentLoaded", function () {
    const localStorageTodos = document.getElementById("local-storage-todos-container");
    const sessionStorageTodos = document.getElementById("session-storage-todos-container");
    const localInput = document.getElementById("local-task-input");
    const sessionInput = document.getElementById("session-input");
    const localStorageAddBtn = document.getElementById("local-storage-add-task-btn");
    const sessionStorageAddBtn = document.getElementById("session-storage-add-task-btn");

    // Initialize tasks from local storage
    let localStorageTasks = JSON.parse(localStorage.getItem("localStorageTasks")) || [];
    let sessionStorageTasks = JSON.parse(sessionStorage.getItem("sessionStorageTasks")) || [];

    // Display tasks on page load
    displayTasks(localStorageTodos, localStorageTasks);
    displayTasks(sessionStorageTodos, sessionStorageTasks);

    // Add task event listeners
    localStorageAddBtn.addEventListener("click", function () {
        addTask(localInput, localStorageTodos, localStorageTasks, "localStorageTasks");
    });

    sessionStorageAddBtn.addEventListener("click", function () {
        addTask(sessionInput, sessionStorageTodos, sessionStorageTasks, "sessionStorageTasks");
    });

    // Function to display tasks
    function displayTasks(container, tasks) {
        container.innerHTML = tasks.map((task, index) => `<li><input type="checkbox" id="${index}"><label for="${index}">${task}</label></li>`).join('');
    }

    // Function to add a task
    function addTask(input, container, tasksArray, storageKey) {
        const task = input.value.trim();
        if (task !== "") {
            tasksArray.push(task);
            localStorage.setItem(storageKey, JSON.stringify(tasksArray));
            displayTasks(container, tasksArray);
            input.value = "";
        } else {
            alert("Please enter a task!");
        }
    }
});
