// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const darkToggle = document.getElementById('darkModeToggle');
  
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      toggleBtn.classList.toggle('active');
    });
  
    // Dark Mode Toggle
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
  
      // Change icon
      if (document.body.classList.contains('dark')) {
        darkToggle.textContent = '☀️';
      } else {
        darkToggle.textContent = '🌙';
      }
    });
  });
  