// Fonction pour enregistrer les tâches dans le local storage
function saveTasksToLocalStorage() {
    // Récupérer toutes les tâches de la liste de tâches
    const tasks = [];
    for (let i = 0; i < taskList.children.length; i++) {
      const task = taskList.children[i];
      const taskText = task.querySelector("span").textContent;
      const taskId = task.querySelector("span").dataset.id;
      const taskCompleted = task.querySelector("span").style.textDecoration === "line-through";
  
      // Créer une nouvelle tâche avec les informations récupérées
      const taskObject = new Task(taskText);
      taskObject.id = taskId;
      taskObject.completed = taskCompleted;
  
      // Ajouter la tâche au tableau de tâches
      tasks.push(taskObject);
    }
  
    // Enregistrer le tableau de tâches dans le local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  // Fonction pour charger les tâches à partir du local storage
  function loadTasksFromLocalStorage() {
    // Récupérer le tableau de tâches du local storage
    const tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // Vérifier si des tâches ont été enregistrées
    if (tasks) {
      // Parcourir le tableau de tâches
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
  
        // Créer une nouvelle tâche avec les informations récupérées
        const newTask = new Task(task.text);
        newTask.id = task.id;
        newTask.completed = task.completed;
  
        // Ajouter la tâche à la liste de tâches
        addTaskToList(newTask);
      }
    }
  }
  
  // Charger les tâches à partir du local storage lors du chargement de la page
  loadTasksFromLocalStorage();
  