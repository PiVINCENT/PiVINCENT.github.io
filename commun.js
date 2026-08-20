function chargerShell(contenu, titrePage, statutPage, pageActive) {
  fetch('shell.html')
    .then(r => r.text())
    .then(html => {
      document.body.innerHTML = html;

      // Injecte le contenu dans le panneau principal
      document.getElementById('panneau-principal').innerHTML = contenu;

      // Met à jour la barre de statut
      if (statutPage) {
        document.querySelector('#barre-statut .statut-panel:last-child') &&
        document.querySelectorAll('#barre-statut .statut-panel')[1].textContent = statutPage;
      }

      // Met en gras la page active dans le menu gauche
      if (pageActive) {
        var liens = document.querySelectorAll('#panneau-gauche a');
        liens.forEach(function(lien) {
          if (lien.getAttribute('href') === pageActive) {
            lien.style.fontWeight = 'bold';
          }
        });
      }

      // Relance l'horloge
      function majHorloge() {
        var d = new Date();
        var h = String(d.getHours()).padStart(2,'0');
        var m = String(d.getMinutes()).padStart(2,'0');
        var s = String(d.getSeconds()).padStart(2,'0');
        document.getElementById('horloge').textContent = h+':'+m+':'+s;
      }
function lancerRecherche() {
  var terme = document.querySelector('#barre-recherche input').value;
  if (terme.trim() === '') {
    alert('Veuillez saisir un terme de recherche.');
  } else if (terme.trim() === '666') {
    window.location.href = '666.html';  /* ← remplace par le nom de ta page */
  } else {
    alert('Error : Impossible to search. Sorry Ive done this website with Claude. This buton is just for aesthetic. \n\nFile RECHERCHE.DLL doesnot exist.\n\nPlease Install Internet Explorer 6');
  }
}
function basculerPleinEcran() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
function toggleArticle(header) {
  var body = header.parentElement.querySelector('.article-body');
  var fleche = header.querySelector('.toggle-fleche');
  if (body.classList.contains('ouvert')) {
    body.classList.remove('ouvert');
    fleche.textContent = '▼';
  } else {
    body.classList.add('ouvert');
    fleche.textContent = '▲';
  }
}
function reduire() {
  window.resizeTo(400, 300);  // réduit la taille de la fenêtre
}
      majHorloge();
      setInterval(majHorloge, 1000);
    });
}
