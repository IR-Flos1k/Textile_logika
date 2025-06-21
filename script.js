const toggleBtn = document.getElementById('theme-toggle');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Зберігаємо вибір теми
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Встановити тему при завантаженні
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  });