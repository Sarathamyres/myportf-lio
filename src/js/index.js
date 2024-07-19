document.addEventListener('DOMContentLoaded', () => {
  const aboutMe = document.getElementById('about-me');
  const section = document.querySelector('.my-informations');
  const menu = document.querySelector('.home');

  if (aboutMe && section && menu) {
    aboutMe.addEventListener('click', () => {
      section.classList.add('show');
      menu.classList.add('hidden');
    });
  }
});
