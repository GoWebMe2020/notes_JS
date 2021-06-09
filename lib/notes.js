'use strict';

class Notes {

  add(key, value) {
    if (key && value) {
      localStorage.setItem(key, value);
    };
  };

  displayAllNotes() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      // localStorgeOutput.innerHTML += `<div class="card"><h2 class="card-title">${key}</h2><p class="card-note">${value.substring(0, 20)} ...</p><div class="open"><i class="far fa-envelope-open"></i></div></div>`;
      this.emojiPostData(value).then(post => {
        localStorgeOutput.innerHTML += `<div class="card"><h2 class="card-title">${key}</h2><p class="card-note">${post.emojified_text.substring(0, 20)} ...</p><div class="open"><i class="far fa-envelope-open"></i></div></div>`;
      })
    };
  };

  deleteNote(key) {
    localStorage.removeItem(key);
  };

  notesSelection() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      notesList.innerHTML += `<option value="${key}">${key}</option>`;
    };
  };

  emojiPostData(value) {
    let data = {
      text: value
    }
    return fetch("https://makers-emojify.herokuapp.com/", { 
      method: 'POST', 
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json",}
    }).then(response => {
      return response.json();
    });
  };
};