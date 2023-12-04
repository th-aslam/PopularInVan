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

  const toggleButton = document.getElementById('themeToggler');
  if (currentTheme == 'light') {
    currentTheme = 'dark';
    toggleButton.innerText = 'Light Mode';
    body[0].style.color = '#FFF';
    body[0].style.backgroundColor = '#5C271F';
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = '#9E6C00';
    }
  } else {
    currentTheme = 'light';
    toggleButton.innerText = 'Dark Mode';

    body[0].style.backgroundColor = 'tomato';
    body[0].style.color = '#000';
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

function adapt(form) {
  var age = document.getElementById('age').value;
  var seasonRadios = form.elements['Season'];
  var Season;
  for (var i = 0; i < seasonRadios.length; i++) {
    if (seasonRadios[i].checked) {
      Season = seasonRadios[i].value;
      break;
    }
  }
  var BCradios = form.elements['Resident'];
  var BC;
  for (var i = 0; i < BCradios.length; i++) {
    if (BCradios[i].checked) {
      BC = BCradios[i].value;
      break;
    }
  }
  /*Vandusen Garden*/
  if (Season == 'Winter' || Season == 'Spring') {
    if (age >= 1 && age <= 4) {
      document.getElementById('PVandusen').innerHTML = '<li>Free</li>';
    } else if (age >= 5 && age <= 12) {
      document.getElementById('PVandusen').innerHTML =
        '<li>Child (5-12): $4.45</li>';
    } else if (age >= 13 && age <= 18) {
      document.getElementById('PVandusen').innerHTML =
        '<li>Youth (13-18): $6.25</li>';
    } else if (age >= 19 && age <= 64) {
      document.getElementById('PVandusen').innerHTML =
        '<li>Adult (19-64): $8.90</li>';
    } else if (age == 0) {
      document.getElementById('PVandusen').innerHTML =
        '<li>Adult (19-64): $8.90</li>' +
        '<li>Senior(65+)/Youth(13-18): $6.25</li>' +
        '<li>Child (5-12): $4.45</li>' +
        '<li>Baby (4-1): Free</li>';
    } else {
      document.getElementById('PVandusen').innerHTML =
        '<li>Senior (65+): $6.25</li>';
    }
  } else if (Season == 'Fall' || Season == 'Summer') {
    if (age >= 1 && age <= 4) {
      document.getElementById('PVandusen').innerHTML =
        '<li>Baby (1-4): Free</li>';
    } else if (age >= 5 && age <= 12) {
      document.getElementById('PVandusen').innerHTML =
        '<li>Child(5-12): $6.15</li>';
    } else if (age >= 13 && age <= 18) {
      document.getElementById('PVandusen').innerHTML =
        '<li>Youth (13-18): $6.25</li>';
    } else if (age >= 19 && age <= 64) {
      document.getElementById('PVandusen').innerHTML =
        '<li>Adult (19-64): $12.30</li>';
    } else if (age == 0) {
      document.getElementById('PVandusen').innerHTML =
        '<li>Adult (19-64): $12.30</li>' +
        '<li>Senior(65+)/Youth(13-18): $8.60</li>' +
        '<li>Child (5-12): $6.15</li>' +
        '<li>Baby (4-1): Free</li>';
    } else {
      document.getElementById('PVandusen').innerHTML =
        '<li>Senior(65+): $6.25</li>';
    }
  }
  /*Whale Wathcing*/
  if (age >= 1 && age <= 4) {
    document.getElementById('Pwhale').innerHTML = '<li>Infat: FREE</li>';
  } else if (age >= 5 && age <= 12) {
    document.getElementById('Pwhale').innerHTML = '<li>Child: $99</li>';
  } else if (age >= 13 && age <= 64) {
    document.getElementById('Pwhale').innerHTML = '<li>Adult: $159</li>';
  } else if (age > 65) {
    document.getElementById('Pwhale').innerHTML = '<li>Senior: $129</li>';
  }
  /*SightSeeing*/
  if (age <= 2) {
    document.getElementById('Pscience24').innerHTML = '<li>Infant: Free</li>';
    document.getElementById('Pscience48').innerHTML = '<li>Infant: Free</li>';
  } else if (age >= 3 && age <= 12) {
    document.getElementById('Pscience24').innerHTML =
      '<li>Child (3-12): $33</li>';
    document.getElementById('Pscience48').innerHTML =
      '<li>Child (3-12): $40</li>';
  } else if (age > 13) {
    document.getElementById('Pscience24').innerHTML =
      '<li>Adult (13+): $65</li>';
    document.getElementById('Pscience48').innerHTML =
      '<li>Adult (13+): $80</li>';
  }
  /*Capilano Bridge*/
  if (BC == 'Yes') {
    if (age <= 5) {
      document.getElementById('PBridgeB').innerHTML = '<li>Infant: Free</li>';
    } else if (age >= 6 && age <= 12) {
      document.getElementById('PBridgeB').innerHTML =
        '<li>Child 6-12: $26.95</li>';
    } else if (age >= 13 && age <= 17) {
      document.getElementById('PBridgeB').innerHTML =
        '<li>Youth 13-17: $36.95</li>';
    } else if (age >= 18 && age <= 64) {
      document.getElementById('PBridgeB').innerHTML =
        '<li>Adult 18-64: $66.95</li>';
    } else {
      document.getElementById('PBridgeB').innerHTML =
        '<li>Senior 65+: $61.95</li>';
    }
    document.getElementById('PBridgeG').innerHTML = '';
  } else if (BC == 'No') {
    if (age <= 5) {
      document.getElementById('PBridgeG').innerHTML = '<li>Infant: Free</li>';
    } else if (age >= 6 && age <= 12) {
      document.getElementById('PBridgeG').innerHTML =
        '<li>Child 6-12: $26.95</li>';
    } else if (age >= 13 && age <= 17) {
      document.getElementById('PBridgeG').innerHTML =
        '<li>Youth 13-17: $36.95</li>';
    } else if (age >= 18 && age <= 64) {
      document.getElementById('PBridgeG').innerHTML =
        '<li>Adult 18-64: $66.95</li>';
    } else {
      document.getElementById('PBridgeG').innerHTML =
        '<li>Senior 65+: $61.95</li>';
    }
    document.getElementById('PBridgeB').innerHTML = '';
  }
  /*Bill Reid Gallery*/
  if (age >= 12 && age <= 18) {
    document.getElementById('PGallry').innerHTML = '<li>Youth: $6</li>';
  } else if (age >= 19 && age <= 64) {
    document.getElementById('PGallry').innerHTML = '<li>Adults: $13</li>';
  } else if (age > 65) {
    document.getElementById('PGallry').innerHTML = '<li>Seniors: $10</li>';
  }
}
function Website(form) {
  var ageInput = form.elements['age'];
  if (!age.checkValidity()) {
    document.getElementById('ans').innerHTML =
      '<p>You must be 19 or more to <br> get acces to this place</p>';
    document.getElementById('ans').style.color = 'red';
  } else {
    document.getElementById('ans').innerHTML =
      '<p>To acces the website just click on the button again</p>';
    document.getElementById('ans').style.color = 'black';
    if (confirm('You are about to vist the Liverty Distillery is it ok?')) {
      window.open('https://www.thelibertydistillery.com/', '_blank');
      document.getElementById('ans').innerHTML =
        '<p>To access the website just click on the button again</p>';
      document.getElementById('ans').style.color = 'black';
    }
  }
}
function reload() {
  location.reload(true);
}
