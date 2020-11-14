import scaleObj from "../assets/scaleObj.js";

function playNote(url) {
  const note = new Audio(url);
  note.play();
}

function splitNotes(oldNote) {
  let split = oldNote.split("-");
  let note = split[0];
  let num = split[1];

  return [note, num];
}

function matchNotes(object, note, num) {
  for (let j = 0; j < object.length; j++) {
    if (object[j].id.includes(note)) {
      object[j].innerHTML = `${num}`;
      return object[j];
    }
  }
}

function loopArray(array) {
  let returnArray = [];
  let allBtns = document.querySelectorAll(".note-btn");
  for (let i = 0; i < array.length; i++) {
    let newNote = splitNotes(array[i]);
    returnArray.push(matchNotes(allBtns, newNote[0], newNote[1]));
  }
  return returnArray.slice(0, returnArray.length);
}

function setLastGtrNote(note) {
  const btns = document.querySelectorAll(".note-btn");

  for (let i = 0; i < btns.length; i++) {
    if (btns[i].id.includes(note)) {
      return btns[i].classList.add("last-note");
    }
  }
}

function setFrets(array) {
  const frets = document.querySelectorAll(".note-fret");
  let min = array[0];
  let max = array[array.length - 1];

  for (let i = 0; i < frets.length; i++) {
    let fretClass = frets[i].classList[1];
    let num = fretClass.split("-")[1];
    if (num > max || num < min) {
      frets[i].classList.add("hidden");
    }
  }
}

document.addEventListener("click", (e) => {
  let arr = e.target.id.split("-");
  let note = arr[arr.length - 1];
  e.target.classList.contains("note-btn")
    ? playNote(`../assets/sounds/guitar/${note}_gtr.mp3`)
    : null;
});

document.getElementById("scale-select-menu").addEventListener("change", (e) => {
  const allBtnsInitial = document.querySelectorAll(".note-btn");
  const allFretsInitial = document.querySelectorAll(".note-fret");
  allBtnsInitial.forEach((btn) => {
    if (btn.classList.contains("hidden")) {
      btn.classList.remove("hidden");
    }
    btn.innerHTML = "";
  });

  allFretsInitial.forEach((fret) => {
    if (fret.classList.contains("hidden")) {
      fret.classList.remove("hidden");
    }
  });

  const scale = scaleObj.find((scale) => scale.name === e.target.value);
  let frets = scale.frets;
  let fingerings = scale.fingerings;
  let lastGtrNote = scale.lastGtrNote;

  setFrets(frets);
  setLastGtrNote(lastGtrNote);
  loopArray(fingerings);

  const allBtns = document.querySelectorAll(".note-btn");
  return allBtns.forEach((btn) =>
    btn.innerHTML ? null : btn.classList.add("hidden")
  );
});

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

function playScale(array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      array[i].focus();
    }, i * 400);
    let url = `../assets/sounds/guitar/${array[i].id.split("-")[1]}_gtr.mp3`;
    setTimeout(() => {
      playNote(url);
    }, i * 400);
  }
}

function playScaleReverse(array) {
  for (let i = array.length - 1; 0 <= i; i--) {
    setTimeout(() => {
      array[[array.length - 1] - i].focus();
    }, i * 400);
    let url = `../assets/sounds/guitar/${array[i].id.split("-")[1]}_gtr.mp3`;
    setTimeout(() => {
      playNote(url);
    }, ([array.length - 1] - i) * 400);
  }
}

function wait_promise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

document.getElementById("gtr-play-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const btns = document.querySelectorAll(".note-btn");

  const btnsToPlay = getBtnsToPlay(btns);

  let timeOut = btnsToPlay.length * 401;

  async function playBothScales() {
    playScale(btnsToPlay);
    await wait_promise(timeOut);
    playScaleReverse(btnsToPlay);
  }
  playBothScales();
});
