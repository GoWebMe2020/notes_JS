'use strict';

class Notes {
  constructor() {
    console.log("notes")
    this.displayNote = new DisplayNote();
  }

  create(key, value) {
    if (key && value) {
      localStorage.setItem(key, value);
    };
  };

  deleteNote(key) {
    localStorage.removeItem(key);
  };

};