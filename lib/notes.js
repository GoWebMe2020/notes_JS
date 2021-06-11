'use strict';

class Notes {

  create(key, value) {
    if (key && value) {
      localStorage.setItem(key, value);
    };
  };

  deleteNote(key) {
    localStorage.removeItem(key);
  };

};