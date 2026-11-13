const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menu.dataset.open = 'false';
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menu.dataset.open = String(open);
});

menu.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
