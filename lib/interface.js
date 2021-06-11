'use strict';

// document.addEventListener("DOMContentLoaded", () => {
  const noteTitle = document.getElementById("noteTitle");
  const noteValue = document.getElementById("noteValue");
  const saveBtn = document.getElementById("saveBtn");
  const notesList = document.getElementById("notesList");
  const deleteBtn = document.getElementById("deleteBtn");
  const closeNote = document.getElementById("closeNote");
  const noteSpace = document.getElementById('noteSpace');
  const localStorgeOutput = document.getElementById("localStorgeOutput")
  
  let notes = new Notes();
  let lS = new LocalStorage();
  let emojify = new Emojify();
  let displayNote = new DisplayNote();
  
  // This displays all the notes showing only 20 charaters.
  lS.displayAllNotes();

  const openNote = document.getElementsByTagName("a");
  // This saves a note.
  saveBtn.onclick = () => {
    const key = noteTitle.value;
    const value = noteValue.value;
    notes.create(key, value);
    location.reload();
  };

  // This deletes a note.
  deleteBtn.onclick = () => {
    const key = notesList.value;
    notes.deleteNote(key);
    location.reload();
  };

  closeNote.onclick = () => {
    document.querySelector('#noteSpace').className = "noteDisappear"
  };

  // This places the note headings in the selection box for deletion.
  lS.notesSelectForDelete();
  
  setTimeout(setupLoop, 1000)
  function setupLoop() {
    for(let i = 0; i < openNote.length; i++) {
      openNote[i].onclick = () => {
        document.querySelector('#noteSpace').className = "appear"
        displayNote.makeUrlChangeShowNoteForCurrentPage()
      };
    }
  }
// })