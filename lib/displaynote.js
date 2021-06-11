'use strict';

class DisplayNote {

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
      let str = regex(note)
      emojify.emojiPostData(str).then(post => { 
        document
        .getElementById("note")
        .innerHTML = post.emojified_text;
      });
    };
    function regex(note) {
      let str = note.replace(/%20/g, " ")
      let newStr = str.replace(/=/g, "<h4>")
      let cleanStr = newStr.replace(/1010/g, "</h4>")
      return cleanStr
    }
  } 
}