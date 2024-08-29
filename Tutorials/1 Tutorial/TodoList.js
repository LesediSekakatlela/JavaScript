// Event listener for adding tasks to session storage
sessionAddTaskBtn.addEventListener('click', () => {
    // Get existing session storage's content, if any. Otherwise, return an empty array:
    const currentTodoArray =
        JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];

    // Merge currentTodoArray with the user's new input:
    const newTodoArray = [
        ...currentTodoArray,
        { checked: false, text: sessionInputEle.value },
    ];

    // Add newTodoArray to the session storage object:
    sessionStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray));

    const todoLiElements = createTodoLiElements(newTodoArray);
    sessionTodosContainer.replaceChildren(...todoLiElements);
    sessionInputEle.value = '';
});

// Event listener for adding tasks to local storage
localAddTaskBtn.addEventListener('click', () => {
    // Get existing local storage's content, if any. Otherwise, return an empty array:
    const currentTodoArray =
        JSON.parse(localStorage.getItem('codesweetlyStore')) || [];

    // Merge currentTodoArray with the user's new input:
    const newTodoArray = [
        ...currentTodoArray,
        { checked: false, text: localInputEle.value },
    ];

    // Add newTodoArray to the local storage object:
    localStorage.setItem('codesweetlyStore', JSON.stringify(newTodoArray));

    const todoLiElements = createTodoLiElements(newTodoArray);
    localTodosContainer.replaceChildren(...todoLiElements);
    localInputEle.value = '';
});

// Function to populate tasks from session storage on page load
const populateSessionTasksOnLoad = () => {
    // Get existing session storage's content, if any. Otherwise, return an empty array:
    const sessionTodoArray =
        JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];

    // Use the retrieved sessionTodoArray to create <li> elements:
    const todoLiElements = createTodoLiElements(sessionTodoArray);

    // Populate the tasks display space with the todoLiElements:
    sessionTodosContainer.replaceChildren(...todoLiElements);
};

// Function to populate tasks from local storage on page load
const populateLocalTasksOnLoad = () => {
    // Get existing local storage's content, if any. Otherwise, return an empty array:
    const localTodoArray =
        JSON.parse(localStorage.getItem('codesweetlyStore')) || [];

    // Use the retrieved localTodoArray to create <li> elements:
    const todoLiElements = createTodoLiElements(localTodoArray);

    // Populate the tasks display space with the todoLiElements:
    localTodosContainer.replaceChildren(...todoLiElements);
};

// Event listener for loading session storage tasks on page load
window.addEventListener('load', populateSessionTasksOnLoad);

// Event listener for loading local storage tasks on page load
window.addEventListener('load', () => {
    // Get existing local storage's content, if any. Otherwise, return an empty array:
    const localTodoArray =
        JSON.parse(localStorage.getItem('codesweetlyStore')) || [];

    // Use the retrieved localTodoArray to create <li> elements:
    const todoLiElements = createTodoLiElements(localTodoArray);

    // Populate the tasks display space with the todoLiElements:
    localTodosContainer.replaceChildren(...todoLiElements);
});

// Additional code provided
console.log(sessionStorage.length);
console.log(localStorage.key(0));
sessionStorage.clear();

//For Session
// It adds an event listener to the button with the id sessionAddTaskBtn.
// When the button is clicked, it:
// Retrieves the current to-do list from session storage (codesweetlyStore).
// Parses the JSON data into an array or creates an empty array if there's no existing data.
// Constructs a new to-do item with the input value and adds it to the array.
// Stores the updated to-do list back into session storage.
// Creates HTML elements for each to-do item and replaces the existing content of the sessionTodosContainer with the new list.
// Clears the input field.
// Your HTML provides the necessary elements for the application: a button (sessionAddTaskBtn), an input field (sessionInputEle), and a container (sessionTodosContainer) where the to-do items will be displayed.


