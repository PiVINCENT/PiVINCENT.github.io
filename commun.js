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
      majHorloge();
      setInterval(majHorloge, 1000);
    });
}
