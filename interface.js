'use strict';

document.addEventListener("DOMContentLoaded", () => {

  const noteTitle = document.getElementById("noteTitle");
  const noteValue = document.getElementById("noteValue");
  const saveBtn = document.getElementById("saveBtn");
  const localStorgeOutput = document.getElementById("localStorgeOutput");
  const notesList = document.getElementById("notesList");
  const deleteBtn = document.getElementById("deleteBtn");

  let notes = new Notes();

  // This saves a note.
  saveBtn.onclick = () => {
    const key = noteTitle.value;
    const value = noteValue.value;
    notes.add(key, value);
    location.reload();
  };
  // This deletes a note.
  deleteBtn.onclick = () => {
    const key = notesList.value;
    notes.deleteNote(key);
    location.reload();
  };
  // This displays all the notes showing only 20 charaters.
  notes.displayAllNotes();
  // This places the note headings in the selection box for deletion.
  notes.notesSelection();

  // note selection
  window.addEventListener("hashchange", noteSelect);

  function noteSelect() {
    return showNote(getNoteKeyFromUrl(window.location));
  }

  function getNoteKeyFromUrl(location) {
    return location.hash.split("#")[1];
  }

  function showNote(key) {
    const value = localStorage.getItem(key);
    document.getElementById("selected-note").innerHTML += `<div class="card"><h2 class="card-title">${key}</h2><p class="card-note">${value}</p></div>`
  }

});

