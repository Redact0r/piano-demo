function playNote(url) {
  const note = new Audio(url);

  note.play();
}

document.addEventListener('click', e => {
    let arr = e.target.id.split('-');
    let note = arr[arr.length - 1]
    e.target.classList.contains('note-btn') ? playNote(`../assets/sounds/guitar/${note}_gtr.mp3`) : null;
});