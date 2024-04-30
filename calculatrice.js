let affichage = document.getElementById('affichage');

function afficher(value) {
  affichage.value += value;
}

function effacer() {
  affichage.value = '';
}

function resultat() {
  affichage.value = eval(affichage.value);
}
