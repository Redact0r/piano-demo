import scaleObj from "../assets/scaleObj.js";

function reset() {
  const pianoKeys = document.querySelectorAll(".key");

  for (let i = 0; i < pianoKeys.length; i++) {
    pianoKeys[i].classList.contains("hidden")
      ? pianoKeys[i].classList.remove("hidden")
      : null;
    pianoKeys[i].setAttribute("tabindex", "0");
  }
}

function playNote(url) {
  const note = new Audio(url);

  note.play();
}

function playScale(pianoKeys) {
  for (let i = 0; i < pianoKeys.length; i++) {
    setTimeout(() => {
      pianoKeys[i].focus();
    }, i * 400);
    let url = `../assets/sounds/piano/${pianoKeys[i].id}.mp3`;
    setTimeout(() => {
      playNote(url);
    }, i * 400);
  }
}

function playScaleReverse(pianoKeys) {
  for (let i = pianoKeys.length - 1; 0 <= i; i--) {
    setTimeout(() => {
      pianoKeys[[pianoKeys.length - 1] - i].focus();
    }, i * 400);
    let url = `../assets/sounds/piano/${pianoKeys[i].id}.mp3`;
    setTimeout(() => {
      playNote(url);
    }, ([pianoKeys.length - 1] - i) * 400);
  }
}

function wait_promise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

document
  .getElementById("scale-select-menu")
  .addEventListener("change", (event) => {
    reset();

    //chromatic scale includes all notes
    if (event.target.value === "chromatic") {
      return;
    }

    const scale = scaleObj.find((scale) => scale.name === event.target.value);

    const scaleNotes = scale.notesPlayed;

    const pianoKeys = document.querySelectorAll(".key");

    for (let i = 0; i < scaleNotes.length; i++) {
      for (let j = 0; j < pianoKeys.length; j++) {
        const pkeyId = scaleNotes[i].split("-")[1];
        if (pkeyId == pianoKeys[j].id) {
          pianoKeys[j].classList.add(scale.name);
        }
      }
    }

    for (let i = 0; i < pianoKeys.length; i++) {
      if (!pianoKeys[i].classList.contains(scale.name)) {
        pianoKeys[i].classList.add("hidden");
        pianoKeys[i].removeAttribute("tabindex");
      }
    }
  });

document.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("key") &&
    !event.target.classList.contains("hidden")
  ) {
    let id = event.target.getAttribute("id");
    let url = `../assets/sounds/piano/${id}_l.mp3`;

    playNote(url);
  }

  if (event.target.classList.contains("play-btn")) {
    const pianoKeys = document.querySelectorAll(".key:not(.hidden)");
    const timeOut = pianoKeys.length * 401;

    async function playBothScales() {
      playScale(pianoKeys);
      await wait_promise(timeOut);
      playScaleReverse(pianoKeys);
      await wait_promise(timeOut);
      document.activeElement.blur();
    }
    playBothScales();
  }
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
