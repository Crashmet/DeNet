document.querySelectorAll('.sort-table__item').forEach((el) => {
  el.addEventListener('click', function (e) {
    e.target.classList.toggle('active');
  });
});
