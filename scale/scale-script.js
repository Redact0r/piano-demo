import scaleObj from "../assets/scaleObj.js";

function playNote(note_id) {
  const note = new Audio(
    `/wp-content/instrument-demos/assets/sounds/scale/${note_id}_stf.mp3`
  );
  note.play().catch((e) => console.error(`Audio error: ${e.message}`));
}

function reset() {
  const notes = document.querySelectorAll(".note");
  const extraDivs = document.querySelectorAll(".accent");
  if (extraDivs) extraDivs.forEach((div) => div.remove());
  notes.forEach((note) => note.classList.add("hidden"));
  notes.forEach((note) => note.classList.remove("sharp"));
  notes.forEach((note) => note.classList.remove("flat"));
  notes.forEach((note) => note.classList.remove("natural"));

  return notes;
}

function displayAccents(scaleNotes) {
  const notes = document.querySelectorAll(".note:not(.hidden)");

  for (let i = 0; i < scaleNotes.length; i++) {
    const scaleNote = scaleNotes[i].split("-");
    if (scaleNote.length == 3) {
      const accent = scaleNote.pop();
      const scaleNoteToCheck = scaleNote.join("-");
      let noteToAccent = Object.values(notes).find(
        (note) => note.id == scaleNoteToCheck
      );
      if (!noteToAccent && scaleNote[0] == scaleNote[1]) {
        noteToAccent = document.getElementById(`${scaleNote[0]}`).children[0];
      }

      let newDiv = document.createElement("div");
      newDiv.classList.add("accent");
      if (accent == "b") {
        newDiv.innerHTML = "&#x266d";
        noteToAccent.classList.add("flat");
      }
      if (accent == "s") {
        newDiv.innerHTML = "&#x266f";
        noteToAccent.classList.add("sharp");
      }
      if (accent == "n") {
        newDiv.innerHTML = "&#x266e";
        noteToAccent.classList.add("natural");
      }
      noteToAccent.after(newDiv);
    }
  }
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
  }
}

function displayNotes(notes, scaleNotes) {
  let notesArray = [];
  notes.forEach((note) => notesArray.push(note));
  for (let i = 0; i < notes.length; i++) {
    for (let j = 0; j < scaleNotes.length; j++) {
      const scaleNote =
        scaleNotes[j].split("-").length == 3
          ? scaleNotes[j].split("-").slice(0, 2).join("-")
          : scaleNotes[j];
      const currentNote =
        notes[i].id.split("-").length == 3
          ? notes[i].id.split("-").slice(0, 2).join("-")
          : notes[i].id;
      if (currentNote == scaleNote) {
        notes[i].classList.remove("hidden");
      }
    }
  }
}

document.addEventListener(
  "mouseover",
  (e) => {
    if (e.target.classList.contains("note")) {
      e.target.focus();
    }
  },
  true
);

document.addEventListener(
  "focus",
  (e) => {
    let arr = e.target.id.split("-");

    if (!e.target.classList.contains("note")) {
      return;
    }
    const classes = e.target.classList;
    let note_id;
    if (classes.length > 1) {
      note_id = classes.contains("natural") ? arr[0] : arr[1];
    } else {
      note_id = arr[0];
    }
    playNote(note_id);
  },
  true
);

document.addEventListener("click", (e) => {
  let arr = e.target.id.split("-");

  if (!e.target.classList.contains("note")) {
    return;
  }
  const classes = e.target.classList;
  let note_id;
  if (classes.length > 1) {
    note_id = classes.contains("natural") ? arr[0] : arr[1];
  } else {
    note_id = arr[0];
  }
  playNote(note_id);
});

document.querySelector(".scale-instrument").addEventListener(
  "mouseleave",
  (e) => {
    if (e.target.classList.contains("note")) {
      document.activeElement.blur();
    }
  },
  true
);

document
  .getElementById("all-scale-select-menu")
  .addEventListener("change", (e) => {
    e.preventDefault();
    reset();

    const scale = scaleObj.find(
      (scale) => scale.name.toLowerCase() == e.target.value.toLowerCase()
    );
    const scaleNotes = scale.notesPlayed;
    const notes = document.querySelectorAll(".note");

    displayNotes(notes, scaleNotes);
    displayNotesHelper(scaleNotes);
    displayAccents(scaleNotes);
  });
