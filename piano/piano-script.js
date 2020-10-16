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
    console.log(pianoKeys[i]);
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

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("selector-menu-li")) {
    reset();

    //chromatic scale includes all notes
    if (event.target.getAttribute("value") === "chromatic") {
      return;
    }

    const scale = event.target.getAttribute("value");

    const pianoKeys = document.querySelectorAll(".key");

    for (let i = 0; i < pianoKeys.length; i++) {
      if (!pianoKeys[i].classList.contains(scale)) {
        pianoKeys[i].classList.add("hidden");
        pianoKeys[i].removeAttribute("tabindex");
      }
    }
  }

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
    }
    playBothScales();
  }
});
