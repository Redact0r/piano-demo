import scaleObj from "../assets/scaleObj.js";

function reset() {
  const pianoKeys = document.querySelectorAll(".key");

  for (let i = 0; i < pianoKeys.length; i++) {
    pianoKeys[i].classList.contains("p-hidden")
      ? pianoKeys[i].classList.remove("p-hidden")
      : null;
    pianoKeys[i].setAttribute("tabindex", "0");
  }
}

function playNote(url) {
  const note = new Audio(url);

  note.play().catch((e) => console.error(`Audio error: ${e.message}`));
}

function displayCorrectAccents(scaleNotes) {
  const blackKeys = document.querySelectorAll(".key.black:not(.p-hidden)");

  Object.values(blackKeys).map((note) => {
    for (let i = 0; i < scaleNotes.length; i++) {
      const note_id = note.id.slice(1, note.id.length);
      const scaleNoteSplit = scaleNotes[i].split("-");
      const accent = scaleNoteSplit.pop();
      const scaleNote = scaleNoteSplit.join("-");
      if (scaleNoteSplit[1] == note_id && accent !== "n") {
        if (accent == "b") {
          const newNoteId = note_id.substr(2, 1);
          const noteIdWithAccent = newNoteId + "♭";
          const noteText = note.children[0];
          return (noteText.innerHTML = noteIdWithAccent);
        }
        if (accent == "s") {
          const newNoteId = note_id.substr(0, 1);
          const noteIdWithAccent = newNoteId + "♯";
          const noteText = note.children[0];
          return (noteText.innerHTML = noteIdWithAccent);
        }
      }
    }
  });
}

document
  .getElementById("all-scale-select-menu")
  .addEventListener("change", (event) => {
    reset();

    const scale = scaleObj.find(
      (scale) => scale.name.toLowerCase() == event.target.value.toLowerCase()
    );

    const scaleNotes = scale.notesPlayed;

    const pianoKeys = document.querySelectorAll(".key");

    for (let i = 0; i < scaleNotes.length; i++) {
      for (let j = 0; j < pianoKeys.length; j++) {
        const pkeyId = scaleNotes[i].split("-")[1];
        if (pkeyId == pianoKeys[j].id.slice(1, pianoKeys[i].length)) {
          pianoKeys[j].classList.add(scale.name);
        }
      }
    }

    for (let i = 0; i < pianoKeys.length; i++) {
      if (!pianoKeys[i].classList.contains(scale.name)) {
        pianoKeys[i].classList.add("p-hidden");
        pianoKeys[i].removeAttribute("tabindex");
      }
    }

    displayCorrectAccents(scaleNotes);
  });

document.querySelector(".piano-instrument").addEventListener(
  "focus",
  (event) => {
    if (
      event.target.classList.contains("key") &&
      !event.target.classList.contains("p-hidden")
    ) {
      let id = event.target.getAttribute("id");
      let note_id = id.slice(1, id.length);
      let url = `/wp-content/instrument-demos/assets/sounds/piano/${note_id}_l.mp3`;

      playNote(url);
    }
  },
  true
);

document.addEventListener(
  "click",
  (event) => {
    if (
      event.target.classList.contains("key") &&
      !event.target.classList.contains("p-hidden")
    ) {
      let id = event.target.getAttribute("id");
      let note_id = id.slice(1, id.length);
      let url = `/wp-content/instrument-demos/assets/sounds/piano/${note_id}_l.mp3`;

      playNote(url);
    }
  },
  true
);

document.addEventListener(
  "mouseover",
  (event) => {
    if (
      event.target.classList.contains("key") &&
      !event.target.classList.contains("p-hidden")
    ) {
      event.target.focus();
    }
  },
  true
);

document.querySelector(".piano-instrument").addEventListener(
  "mouseleave",
  (event) => {
    if (
      event.target.classList.contains("key") &&
      !event.target.classList.contains("p-hidden")
    ) {
      document.activeElement.blur();
    }
  },
  true
);
