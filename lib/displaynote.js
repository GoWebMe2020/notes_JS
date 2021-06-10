'use strict';

class DisplayNote {
  constructor() {
    console.log("displayNote")
  }

  makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
  };

  showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
    function getNoteFromUrl(location) {
      return location.hash.split("#")[1];
    };
    function showNote(note) {
      let emojify = new Emojify();
      let str = note.replace(/%20/g, " ")
      let newStr = str.replace(/=/g, "<h4>")
      let laststr = newStr.replace(/1010/g, "</h4>")
      emojify.emojiPostData(laststr).then(post => { 
        document
        .getElementById("note")
        .innerHTML = post.emojified_text;
      });
    };
  } 

}