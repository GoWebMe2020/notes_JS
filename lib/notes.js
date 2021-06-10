'use strict';

console.log("notes")

class Notes {

  create(key, value) {
    if (key && value) {
      localStorage.setItem(key, value);
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