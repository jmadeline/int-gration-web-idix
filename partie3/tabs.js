const tabs = document.querySelectorAll('.tabs .tabs_item .tabs_link');
const divs = document.querySelectorAll('.tabs_panels .tabs_panel');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    switchTab(tab);
  });
})

const switchTab = tab => {
  tab.parentNode.parentNode.querySelectorAll('.tabs_link').forEach(item => {
    item.classList.remove('active');
  });
  tab.classList.add('active');

  const href = tab.getAttribute('href');
  const matchingDiv = document.querySelector(href);
  matchingDiv.parentNode.querySelectorAll('.tabs_panel').forEach(panel => {
    panel.classList.remove('active');
  });
  matchingDiv.classList.add('active');
}
