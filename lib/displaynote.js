'use strict';

class DisplayNote {

  makeUrlChangeShowNoteForCurrentPage(element) {
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
  };

  showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
    function getNoteFromUrl(location) {
      return location.hash.split("#")[1];
    };
    function showNote(note) {
      let str = note.replace(/%20/g, " ")
      // decodeURI(str)
      let newStr = str.replace(/=/g, "<h4>")
      let laststr = newStr.replace(/1010/g, "</h4>")
      decodeURI(laststr)
      document
        .getElementById("note")
        .innerHTML = laststr;
    };
  } 
}