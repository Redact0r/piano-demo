// ** UNIVERSAL HELPERS ** //
function wait_promise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

// ** STAFF HELPERS ** //
//due to flex-box, scale is technically reversed in DOM from how it appears
function playStaffScaleReverse(notes) {
  document.activeElement.blur();
  for (let i = 0; i < notes.length; i++) {
    setTimeout(() => {
      notes[i].focus();
    }, i * 400);
  }
}

function playStaffScale(notes) {
  for (let i = notes.length - 1; 0 <= i; i--) {
    setTimeout(() => {
      notes[[notes.length - 1] - i].focus();
    }, i * 400);
  }
}

// ** PIANO HELPERS ** //
function playPianoScale(pianoKeys) {
  for (let i = 0; i < pianoKeys.length; i++) {
    setTimeout(() => {
      pianoKeys[i].focus();
    }, i * 400);
  }
}

function playPianoScaleReverse(pianoKeys) {
  document.activeElement.blur();
  for (let i = pianoKeys.length - 1; 0 <= i; i--) {
    setTimeout(() => {
      pianoKeys[[pianoKeys.length - 1] - i].focus();
    }, i * 400);
  }
}

function playStaff() {
  const notes = document.querySelectorAll(".note:not(.hidden)");
  const timeOut = notes.length * 401;

  async function playBothScales() {
    document.getElementById("all-play-btn").disabled = true;
    playStaffScale(notes);
    await wait_promise(timeOut);
    playStaffScaleReverse(notes);
    await wait_promise(timeOut);
    document.activeElement.blur();
    document.getElementById("all-play-btn").disabled = false;
  }
  playBothScales();
}

function playPiano() {
  const pianoKeys = document.querySelectorAll(".key:not(.p-hidden)");
  const timeOut = pianoKeys.length * 401;

  async function playBothScales() {
    document.getElementById("all-play-btn").disabled = true;
    playPianoScale(pianoKeys);
    await wait_promise(timeOut);
    playPianoScaleReverse(pianoKeys);
    await wait_promise(timeOut);
    document.activeElement.blur();
    document.getElementById("all-play-btn").disabled = false;
  }
  playBothScales();
}

// ** GUITAR HELPERS ** //

function getBtnsToPlay(object) {
  let btns = [];
  for (let i = 0; i < object.length; i++) {
    if (object[i].classList.contains("last-note")) {
      btns.push(object[i]);
      break;
    }
    if (!object[i].classList.contains("hidden")) {
      btns.push(object[i]);
    }
  }

  return btns;
}

function playGuitarScale(array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      array[i].focus();
    }, i * 400);
  }
}

function playGuitarScaleReverse(array) {
  document.activeElement.blur();
  for (let i = array.length - 1; 0 <= i; i--) {
    setTimeout(() => {
      array[[array.length - 1] - i].focus();
    }, i * 400);
  }
}

function playGuitar() {
  const btns = document.querySelectorAll(".note-btn");

  const btnsToPlay = getBtnsToPlay(btns);

  let timeOut = btnsToPlay.length * 401;

  async function playBothScales() {
    document.getElementById("all-play-btn").disabled = true;
    playGuitarScale(btnsToPlay);
    await wait_promise(timeOut);
    playGuitarScaleReverse(btnsToPlay);
    await wait_promise(timeOut);
    document.activeElement.blur();
    document.getElementById("all-play-btn").disabled = false;
  }
  playBothScales();
}

document.getElementById("all-play-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const option = document.querySelector(".radio-select:checked").value;
  if (option == "guitar") {
    playGuitar();
  }
  if (option == "piano") {
    playPiano();
  }

  if (option == "staff") {
    playStaff();
  }
});
