const dropdownItems = document.querySelectorAll('.has-dropdown');

dropdownItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.querySelector('.dropdown-menu').classList.add('show');
  });

  item.addEventListener('mouseout', () => {
    item.querySelector('.dropdown-menu').classList.remove('show');
  });
});

var menuItems = document.querySelectorAll('.menu li a');

menuItems.forEach(function(item) {
  item.addEventListener('mouseover', function() {
    this.style.color = '#00ff00'; /* Couleur verte au survol */
  });

  item.addEventListener('mouseout', function() {
    this.style.color = '#333'; /* Retour à la couleur initiale */
  });
});