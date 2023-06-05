const dropdownItems = document.querySelectorAll('.has-dropdown');

dropdownItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.querySelector('.dropdown-menu').classList.add('show');
  });

  item.addEventListener('mouseout', () => {
    item.querySelector('.dropdown-menu').classList.remove('show');
  });
});