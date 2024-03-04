// Fonction constructeur pour créer une nouvelle tâche
function Task(text) {
    this.id = Date.now(); // Utilise l'horodatage actuel comme ID unique pour la tâche
    this.text = text; // Texte de la tâche
    this.completed = false; // État de la tâche (complétée ou non)
  }
  