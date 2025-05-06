// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  
  // Highlight buttons on click
  const buttons = document.querySelectorAll('.button, .contact-button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      button.style.backgroundColor = '#007f99';
      setTimeout(() => {
        button.style.backgroundColor = '#00e5ff';
      }, 300);
    });
  });
  
  // Handle "Submit Your Repo or Channel" button
  const contactBtn = document.querySelector('.contact-button');
  if (contactBtn) {
    contactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = 'https://wa.me/263784812740?text=' +
        encodeURIComponent("Hello Sir Jaden-Afrix, I really admire your work. Could you please help me post my (channel/repo) on your website? I understand it's paid and I'm interested.");
      window.open(url, '_blank');
    });
  }
  
});