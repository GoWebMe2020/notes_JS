'use strict';

class Emojify {
  constructor() {
    console.log("Emojify")
  }

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

}