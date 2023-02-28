import scaleObj from "../assets/scaleObj.js";

function playNote(url) {
  const note = new Audio(url);
  note.play().catch((e) => console.error(`Audio error: ${e.message}`));
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

document.querySelector(".guitar-instrument").addEventListener(
  "mouseover",
  (e) => {
    e.target.classList.contains("note-btn") ? e.target.focus() : null;
  },
  true
);

document.querySelector(".guitar-instrument").addEventListener(
  "focus",
  (e) => {
    let arr = e.target.id.split("-");
    let note = arr[arr.length - 1];
    e.target.classList.contains("note-btn")
      ? playNote(
          `/wp-content/instrument-demos/assets/sounds/guitar/${note}_gtr.mp3`
        )
      : null;
  },
  true
);

document.querySelector(".guitar-instrument").addEventListener("click", (e) => {
  let arr = e.target.id.split("-");
  let note = arr[arr.length - 1];
  e.target.classList.contains("note-btn")
    ? playNote(
        `/wp-content/instrument-demos/assets/sounds/guitar/${note}_gtr.mp3`
      )
    : null;
});

document.querySelector(".guitar-instrument").addEventListener(
  "mouseleave",
  (e) => {
    if (e.target.classList.contains("note-btn")) {
      document.activeElement.blur();
    }
  },
  true
);
//click functionality - need diff sound files, will look at

document
  .getElementById("all-scale-select-menu")
  .addEventListener("change", (e) => {
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

    const scale = scaleObj.find(
      (scale) => scale.name.toLowerCase() == e.target.value.toLowerCase()
    );
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

window.onload = () => {
  const href = window.location.href;
  const scale =
    href.split("/")[2] == "127.0.0.1:8080" ? "chromatic" : href.split("/")[3];
  const menu = document.getElementById("all-scale-select-menu");

  const options = menu.options;

  for (let i = 0; i < options.length; i++) {
    const scaleToFind = scale.toLowerCase();
    if (options[i].value.toLowerCase() == scaleToFind) {
      menu.selectedIndex = i;
      break;
    }
  }
  let evt = document.createEvent("HTMLEvents");
  evt.initEvent("change", false, true);
  menu.dispatchEvent(evt);
};
