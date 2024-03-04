// Récupérer les éléments HTML
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");

// Ajouter un écouteur d'événements pour le formulaire
taskForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Empêcher le formulaire d'être soumis

  // Récupérer la valeur de l'entrée utilisateur
  const taskText = taskInput.value;

  // Vérifier que l'utilisateur a entré une tâche
  if (taskText !== "") {
    // Créer une nouvelle tâche avec les informations de l'utilisateur
    const newTask = new Task(taskText);

    // Ajouter la tâche à la liste de tâches
    addTaskToList(newTask);

    // Enregistrer les tâches dans le local storage
    saveTasksToLocalStorage();

    // Réinitialiser l'entrée utilisateur
    taskInput.value = "";
  }
});
