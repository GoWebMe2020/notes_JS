let notes = new Notes();

it("can add a note", function() {
  notes.add("hello", "my name is willoughby");
  expect(localStorage.length > 0).toEqual(true);
})

it("can delete a note", function() {
  notes.add("Hello", "my name is JP");
  storageLength = localStorage.length;
  notes.deleteNote("Hello");
  expect(localStorage.length == storageLength).toEqual(false);
})
