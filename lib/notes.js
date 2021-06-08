'use strict';

class Notes {

  add(key, value) {
    if (key && value) {
      localStorage.setItem(key, value);
      location.reload();
    };
  };

  displayAllNotes() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      localStorgeOutput.innerHTML += `<div class="card"><h2 class="card-title">${key}</h2><p class="card-note">${value.substring(0, 20)}...</p><div>`;
    };
  };

  deleteNote(key) {
    localStorage.removeItem(key);
    location.reload();
  };

  notesSelection() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      notesList.innerHTML += `<option value="${key}">${key}</option>`;
    };
  };

  emojify(value) {
    let url = "https://makers-emojify.herokuapp.com/";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        xhr.status;
        return xhr.responseText;
      }};
    let data = `{"text": "${value}"}`;
    xhr.send(data)
  }

};