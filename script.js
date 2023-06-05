// Sélectionnez tous les liens des onglets
const tabLinks = document.querySelectorAll('.tab-list li a');

// Sélectionnez tous les contenus des onglets
const tabContents = document.querySelectorAll('.tab-content');

// Ajoutez un gestionnaire d'événement de clic à chaque lien d'onglet
tabLinks.forEach((tabLink) => {
  tabLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Masquez tous les contenus des onglets
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });
    
    // Récupérez l'identifiant de l'onglet à afficher
    const tabId = tabLink.getAttribute('href');
    
    // Affichez le contenu de l'onglet correspondant
    const tabToShow = document.querySelector(tabId);
    tabToShow.classList.add('active');
  });
});