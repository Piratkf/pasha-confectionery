const filterButtons = document.querySelectorAll('.filter__button');
const menuItems = document.querySelectorAll('.menu-item');
const orderButtons = document.querySelectorAll('[data-order]');
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('is-active', btn === button));

    menuItems.forEach((item) => {
      const matches = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !matches);
    });
  });
});

orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.dataset.order || 'десерт';
    const tel = 'tel:+79885772728';

    if (window.confirm(`Заказать ${name}? Мы сразу откроем звонок.`)) {
      window.location.href = tel;
    }
  });
});
