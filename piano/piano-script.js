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
});
