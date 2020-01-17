(function () {
  const arrow = document.querySelector('.arrow');
  const link = document.querySelectorAll('.link');

  link.forEach(el => el.addEventListener('click', handleClick));

  function handleClick(event) {
    event.preventDefault();
    arrow.style.left = `${getArrowPosition(arrow, getLinkMiddlePosition(event.target))}px`;
  }

  function getLinkMiddlePosition(el) {
    return (el.offsetWidth / 2) + el.offsetLeft;
  }

  function getArrowPosition(el, pos) {
    return pos - (el.offsetWidth / 2);
  }
})();