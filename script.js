const button = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');

button.addEventListener('click', () => {
  const open = !surprise.hasAttribute('hidden');
  if (open) return;

  surprise.removeAttribute('hidden');
  button.setAttribute('aria-expanded', 'true');
  button.querySelector('span:first-child').textContent = 'abriu 🤍';
  button.querySelector('.arrow').textContent = '↑';

  requestAnimationFrame(() => {
    surprise.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
