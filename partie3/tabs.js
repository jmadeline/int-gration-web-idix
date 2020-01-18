const tabs = document.querySelectorAll('.tabs .tabs_item .tabs_link');
const divs = document.querySelectorAll('.tabs_panels .tabs_panel');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    removeActiveTab();
    addActiveTab(tab);
  });
})

const removeActiveTab = () => {
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  divs.forEach(div => {
    div.classList.remove('active');
  });
}

const addActiveTab = tab => {
  tab.classList.add('active');
  const href = tab.getAttribute('href');
  const matchingDiv = document.querySelector(href);
  matchingDiv.classList.add('active');
}
