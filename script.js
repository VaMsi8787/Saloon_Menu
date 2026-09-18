// 90's Kid Unisex Saloon — Unified Menu Toggle
// Switches between Men's and Women's service panels
// with a smooth animated pill toggle.

document.addEventListener('DOMContentLoaded', () => {
  const page      = document.getElementById('page');
  const btnMens   = document.getElementById('btn-mens');
  const btnWomens = document.getElementById('btn-womens');
  const panelMens   = document.getElementById('panel-mens');
  const panelWomens = document.getElementById('panel-womens');

  // Restore last chosen gender (default: mens)
  const saved = localStorage.getItem('90skid-gender') || 'mens';
  setGender(saved, false);

  // Click handlers
  btnMens.addEventListener('click',   () => setGender('mens'));
  btnWomens.addEventListener('click', () => setGender('womens'));

  function setGender(gender, animate = true) {
    const isMens = gender === 'mens';

    // Update data attribute (drives all CSS theming + pill position)
    page.dataset.gender = gender;

    // Toggle active class on buttons
    btnMens.classList.toggle('active', isMens);
    btnWomens.classList.toggle('active', !isMens);
    btnMens.setAttribute('aria-pressed', String(isMens));
    btnWomens.setAttribute('aria-pressed', String(!isMens));

    // Toggle service panels
    panelMens.classList.toggle('active', isMens);
    panelWomens.classList.toggle('active', !isMens);
    panelMens.setAttribute('aria-hidden', String(!isMens));
    panelWomens.setAttribute('aria-hidden', String(isMens));

    // Scroll to top smoothly on switch
    if (animate) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Persist choice
    localStorage.setItem('90skid-gender', gender);
  }
});
