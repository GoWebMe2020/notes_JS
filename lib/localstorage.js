'use strict';

class LocalStorage {
  constructor() {
    this.emojify = new Emojify();
    console.log("LocalStorage")
  }

  displayAllNotes() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      this.emojify.emojiPostData(value).then(post => {
        localStorgeOutput.innerHTML += `<div  class="card"><h2 class="card-title">${key}</h2><p class="card-note">${post.emojified_text.substring(0, 20)} ...</p><div class="open"><a href="#=${key}1010 ${post.text}"><i class="far fa-envelope-open"></i></a></div></div>`;
      })
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