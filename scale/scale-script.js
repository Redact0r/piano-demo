import scaleObj from "../assets/scaleObj.js";

function playNote(note_id) {
  const note = new Audio(`../assets/sounds/scale/${note_id}_stf.mp3`);
  note.play();
}

function wait_promise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

//due to flex-box, scale is technically reversed in DOM from how it appears
function playScaleReverse(notes) {
  for (let i = 0; i < notes.length; i++) {
    setTimeout(() => {
      notes[i].focus();
    }, i * 400);
    const arr = notes[i].id.split("-");
    const note_id = notes[i].classList.length > 2 ? arr[1] : arr[0];
    setTimeout(() => {
      playNote(note_id);
    }, i * 400);
  }
}

function playScale(notes) {
  for (let i = notes.length - 1; 0 <= i; i--) {
    setTimeout(() => {
      notes[[notes.length - 1] - i].focus();
    }, i * 400);
    const arr = notes[i].id.split("-");
    const note_id = notes[i].classList.length > 2 ? arr[1] : arr[0];
    setTimeout(() => {
      playNote(note_id);
    }, ([notes.length - 1] - i) * 400);
  }
}

function reset() {
  const notes = document.querySelectorAll(".note");
  notes.forEach((note) => note.classList.add("hidden"));
  return notes;
}

function displayAccents(scalesNotes) {
  const notes = document.querySelectorAll(".note:not(.hidden)");
}

function displayNotesHelper(scaleNotes) {
  let partContainer = [];
  let scaleCounts = {};
  let partContainers = document.querySelectorAll(".part-container");
  partContainers.forEach((part) => partContainer.push(part));
  const scaleNoteKeys = scaleNotes.map((note) => {
    return note.split("-")[0];
  });

  scaleNoteKeys.forEach(
    (note) => (scaleCounts[note] = (scaleCounts[note] || 0) + 1)
  );

  for (let i = 0; i < Object.keys(scaleCounts).length; i++) {
    let hiddenNoteCount = 0;
    let notes = partContainer.find(
      (part) => part.id == Object.keys(scaleCounts)[i]
    ).children;

    Object.values(notes).forEach((note) =>
      note.classList.contains("hidden") ? hiddenNoteCount++ : null
    );

    if (Object.values(scaleCounts)[i] !== hiddenNoteCount) {
      notes[0].classList.contains("hidden")
        ? notes[0].classList.remove("hidden")
        : notes[1].classList.remove("hidden");
    }

    console.log(Object.values(scaleCounts)[i], hiddenNoteCount);
  }
}

function displayNotes(notes, scaleNotes) {
  let notesArray = [];
  notes.forEach((note) => notesArray.push(note));
  for (let i = 0; i < notes.length; i++) {
    for (let j = 0; j < scaleNotes.length; j++) {
      if (notes[i].id == scaleNotes[j]) {
        console.log(notes[i]);
        notes[i].classList.remove("hidden");
      }
    }
  }
}

document.addEventListener("click", (e) => {
  let arr = e.target.id.split("-");

  if (!e.target.classList.contains("note")) {
    return;
  }
  const classes = e.target.classList;
  let note_id;
  if (classes.length > 2) {
    note_id = arr[2] == "n" ? arr[0] : arr[1];
  } else {
    note_id = arr[0];
  }
  console.log(`Natural: ${arr[0]}; Playing: ${note_id}`);
  playNote(note_id);
  wait_promise(1000).then(() => document.activeElement.blur());
});

document.getElementById("scale-select-menu").addEventListener("change", (e) => {
  e.preventDefault();
  reset();

  const scale = scaleObj.find((scale) => scale.name === e.target.value);
  const scaleNotes = scale.notesPlayed;
  const notes = document.querySelectorAll(".note");

  displayNotes(notes, scaleNotes);
  displayNotesHelper(scaleNotes);
});

document.getElementById("staff-play-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const notes = document.querySelectorAll(".note:not(.hidden)");
  const timeOut = notes.length * 401;

  async function playBothScales() {
    playScale(notes);
    await wait_promise(timeOut);
    playScaleReverse(notes);
    await wait_promise(timeOut);
    document.activeElement.blur();
  }
  playBothScales();
});

window.onload = () => {
  const href = window.location.href;
  const scale =
    href.split("/")[2] == "127.0.0.1:8080" ? "aeolian" : href.split("/")[3];
  const menu = document.getElementById("scale-select-menu");

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
