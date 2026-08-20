function chargerShell(contenu, titrePage, statutPage) {
  fetch('shell.html')
    .then(r => r.text())
    .then(html => {
      document.body.innerHTML = html;
      document.getElementById('panneau-principal').innerHTML = contenu;
      document.getElementById('horloge') && setInterval(() => {
        var d = new Date();
        document.getElementById('horloge').textContent =
          String(d.getHours()).padStart(2,'0') + ':' +
          String(d.getMinutes()).padStart(2,'0') + ':' +
          String(d.getSeconds()).padStart(2,'0');
      }, 1000);
    });
}
