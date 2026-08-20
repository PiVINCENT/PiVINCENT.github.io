fetch('shell.html')
  .then(r => r.text())
  .then(html => {
    document.body.innerHTML = html;
    // puis injecte le contenu de la page
    document.getElementById('panneau-principal').innerHTML =
      document.getElementById('contenu-page').innerHTML;
  });
