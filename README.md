# To-Do List App

This is a simple to-do list application that allows users to add, mark as completed, and delete tasks. The tasks are stored in the browser using the local storage API.

## Getting Started

To get started with the app, follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Add a new task by typing in the input field and clicking the "Add" button.
4. Mark a task as completed by clicking the "Completed" button next to the task.
5. Delete a task by clicking the "Delete" button next to the task.

## File Structure

The project is organized into several JavaScript files:

* `task.js`: Contains the `Task` constructor function that creates a new task object with `id`, `text`, and `completed` properties.
* `taskForm.js`: Handles the task form and creates a new task using the `createTask` function.
* `taskList.js`: Handles displaying and deleting tasks in the list.
* `taskStorage.js`: Handles storing and retrieving tasks using the local storage API.

## Dependencies

This project has no dependencies.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
