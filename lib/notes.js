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

  emojify(value) {
    let url = "https://makers-emojify.herokuapp.com/";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        xhr.status;
        emoji = xhr.responseText;
      }};
    let data = `{"text": "${value}"}`;
    xhr.send(data)
    return emoji
  }

};