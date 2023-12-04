let modal;
let span;
let iframeEl;
let currentTheme = 'light'; // light | dark
// When the user clicks on the button, open the modal
function showTourModal(videoIndex) {
  // Get the modal element
  modal = document.getElementById('tourModal');
  iframeEl = document.getElementById('tour' + videoIndex);

  iframeEl.style.display = 'block';
  modal.style.display = 'block';
}

// Used to switch website color mode
function toggleThemeMode() {
  // Get the body element
  const body = document.getElementsByTagName('body');
  const cards = document.getElementsByClassName('card');

  const togggleButt = document.getElementById('themeToggler');
  if (currentTheme == 'light') {
    currentTheme = 'dark';
    togggleButt.innerText = 'Light Mode';
    body[0].style.color = "#FFF"
    body[0].style.backgroundColor = '#5C271F';
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = '#9E6C00';
    }
  } else {
    currentTheme = 'light';
    togggleButt.innerText = 'Dark Mode';

    body[0].style.backgroundColor = 'tomato';
    body[0].style.color = "#000"
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = 'wheat';
    }
  }
}

window.onload = () => {
  // Get the modal
  modal = document.getElementById('tourModal');

  // Get the <span> element that closes the modal
  span = document.getElementsByClassName('close-modal-icon')[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
    if (iframeEl) iframeEl.style.display = 'none';

    stopIframeVideoPlayback();
  };
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  modal = document.getElementById('tourModal');
  if (event.target == modal) {
    modal.style.display = 'none';
    if (iframeEl) iframeEl.style.display = 'none';
    stopIframeVideoPlayback();
  }
};

function stopIframeVideoPlayback() {
  let frame = iframeEl.querySelectorAll('iframe');
  frame[0].contentWindow.postMessage(
    '{"event":"command","func":"pauseVideo","args":""}',
    '*'
  );
}
