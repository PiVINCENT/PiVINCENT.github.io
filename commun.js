function chargerShell(contenu, titrePage, statutPage, pageActive) {
  fetch('shell.html')
    .then(r => r.text())
    .then(html => {
      document.body.innerHTML = html;

      document.getElementById('panneau-principal').innerHTML = contenu;

      if (statutPage) {
        var panels = document.querySelectorAll('#barre-statut .statut-panel');
        if (panels[1]) panels[1].textContent = statutPage;
      }

      if (pageActive) {
        document.querySelectorAll('#panneau-gauche a').forEach(function(lien) {
          if (lien.getAttribute('href') === pageActive) {
            lien.style.fontWeight = 'bold';
          }
        });
      }

      function majHorloge() {
        var d = new Date();
        var el = document.getElementById('horloge');
        if (el) el.textContent =
          String(d.getHours()).padStart(2,'0') + ':' +
          String(d.getMinutes()).padStart(2,'0') + ':' +
          String(d.getSeconds()).padStart(2,'0');
      }
      majHorloge();
      setInterval(majHorloge, 1000);
    });
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

function toggleAnnee(header) {
  var body = header.nextElementSibling;
  var fleche = header.querySelector('.annee-fleche');
  if (body.classList.contains('ouvert')) {
    body.classList.remove('ouvert');
    fleche.textContent = '▶';
  } else {
    body.classList.add('ouvert');
    fleche.textContent = '▼';
  }
}

function lancerRecherche() {
  var terme = document.querySelector('#barre-recherche input').value;
  if (terme.trim() === '') {
    alert('Veuillez saisir un terme de recherche.');
  } else if (terme.trim() === '666') {
    window.location.href = '666.html';
  } else {
    alert('Error : Impossible to search. Sorry Ive done this website with Claude. This button is just for aesthetic.\n\nFile RECHERCHE.DLL does not exist.\n\nPlease Install Internet Explorer 6');
  }
}

function basculerPleinEcran() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function reduire() {
  alert('Error : Cannot minimize window.\n\nFile MINIMIZE.DLL not found.\n\nPlease install Internet Explorer 6.');
}
