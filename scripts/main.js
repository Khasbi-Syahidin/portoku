const slideNavigasi = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav');

  burger.addEventListener('click', () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
  });
};

// Fungsi untuk menangani scroll
const fixNav = () => {
  const nav = document.querySelector('nav');

  if (window.scrollY >= nav.offsetTop) {
      nav.classList.add('fixed');
  } else {
      nav.classList.remove('fixed');
  }
};

// Event listener untuk scroll
window.addEventListener('scroll', fixNav);

// Panggil fungsi slideNavigasi
slideNavigasi();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
      form.reset();
  }
};
