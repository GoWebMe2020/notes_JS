'use strict';

console.log("storage")

class LocalStorage {

  displayAllNotes() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      localStorgeOutput.innerHTML += `<div  class="card"><h2 class="card-title">${key}</h2><p class="card-note">${value.substring(0, 20)} ...</p><div class="open"><a href="#=${key}1010 ${value}"><i class="far fa-envelope-open"></i></a></div></div>`;
    };
  };

  notesSelectForDelete() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      notesList.innerHTML += `<option value="${key}">${key}</option>`;
    };
  };

}