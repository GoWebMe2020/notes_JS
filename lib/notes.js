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