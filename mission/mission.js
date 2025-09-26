window.addEventListener('DOMContentLoaded', () => {
  let selectElem = document.getElementById('mode-select');
  let logo = document.querySelector('img');
  
  selectElem.addEventListener('change', changeTheme);

  function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = 'white';
      logo.src = 'images/byui-logo-white.png';
    } else if (current === 'light') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      logo.src = 'images/byui-logo-blue.webp';
    }
  }
});
