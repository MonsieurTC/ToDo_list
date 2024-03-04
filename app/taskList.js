// Récupérer l'élément HTML de la liste de tâches
const taskList = document.getElementById("task-list");

// Fonction pour ajouter une tâche à la liste de tâches
function addTaskToList(task) {
  // Créer un nouvel élément de liste
  const listItem = document.createElement("li");

  // Créer un élément span pour le texte de la tâche
  const taskText = document.createElement("span");
  taskText.textContent = task.text;

  // Créer un bouton de suppression pour la tâche
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.textContent = "Supprimer";

  // Ajouter un écouteur d'événements pour le bouton de suppression
  deleteButton.addEventListener("click", function() {
    // Supprimer la tâche de la liste de tâches
    removeTaskFromList(task.id);

    // Enregistrer les tâches dans le local storage
    saveTasksToLocalStorage();
  });

  // Créer un bouton de marquage pour la tâche
  const completeButton = document.createElement("button");
  completeButton.className = "complete";
  completeButton.textContent = "Terminée";

  // Ajouter un écouteur d'événements pour le bouton de marquage
  completeButton.addEventListener("click", function() {
    // Marquer la tâche comme terminée en barrant le texte
    taskText.style.textDecoration = "line-through";

    // Désactiver les boutons de la tâche terminée
    deleteButton.disabled = true;
    completeButton.disabled = true;
  });

  // Ajouter les éléments créés à l'élément de liste
  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);
  listItem.appendChild(completeButton);

  // Ajouter l'élément de liste à la liste de tâches
  taskList.appendChild(listItem);
}

// Fonction pour supprimer une tâche de la liste de tâches
function removeTaskFromList(taskId) {
  // Parcourir la liste de tâches
  for (let i = 0; i < taskList.children.length; i++) {
    const task = taskList.children[i];
    const taskIdStored = task.querySelector("span").dataset.id;

    // Vérifier si l'ID de la tâche correspond à l'ID de la tâche à supprimer
    if (taskIdStored == taskId) {
      // Supprimer la tâche de la liste de tâches
      taskList.removeChild(task);
      break;
    }
  }
}
