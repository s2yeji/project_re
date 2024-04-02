let nav = document.querySelector('nav');
let ham = document.createElement('button');

ham.classList.add('ham');
ham.innerHTML = '<span></span><span></span><span></span>';
nav.appendChild(ham);

window.addEventListener('resize', function () {
  let windowSize = window.innerWidth;

  const sec3 = document.querySelector('.sec3');
  if (windowSize < 850) {
    sec3.classList.add('mw');
  } else {
    sec3.classList.remove('mw');
  }

  if (windowSize < 800) {
    if (!document.querySelector('.ham')) {
      nav.appendChild(ham);
    }
    nav.classList.add('on');
  } else {
    if (document.querySelector('.ham')) {
      nav.removeChild(ham);
    }
    nav.classList.remove('on');
  }
});
