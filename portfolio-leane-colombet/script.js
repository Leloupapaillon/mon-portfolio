// MENU MOBILE
// Le bouton ouvre ou ferme le menu sur les petits écrans.
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');

function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Ouvrir le menu');
}

menuButton.addEventListener('click', function () {
  const isOpen = navigation.classList.toggle('is-open');

  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
});

// Fermer le menu lorsqu'on choisit une rubrique.
const menuLinks = navigation.querySelectorAll('a');

menuLinks.forEach(function (link) {
  link.addEventListener('click', closeMenu);
});

// Fermer le menu en cliquant à l'extérieur ou en appuyant sur Échap.
document.addEventListener('click', function (event) {
  if (!event.target.closest('.header')) {
    closeMenu();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

// Fermer le menu lorsqu'on repasse à un écran large.
window.addEventListener('resize', function () {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});

// ANNÉE DU PIED DE PAGE
// Elle se met à jour automatiquement.
document.querySelector('#year').textContent = new Date().getFullYear();
