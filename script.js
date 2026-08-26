// ==== THEME TOGGLE FUNCTION ====
function toggleTheme() {
  const body = document.body;
  const button = document.querySelector('.theme-toggle');

  body.classList.toggle('light-theme');

  if (body.classList.contains('light-theme')) {
    button.textContent = '☀️ Light';
    localStorage.setItem('theme', 'light');
  } else {
    button.textContent = '🌙 Dark';
    localStorage.setItem('theme', 'dark');
  }
}

// Load saved theme on page load
window.onload = function () {
  const savedTheme = localStorage.getItem('theme');
  const button = document.querySelector('.theme-toggle');

  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    button.textContent = '☀️ Light';
  }
};
