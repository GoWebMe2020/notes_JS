let notes = new Notes();
let lStorage = new LocalStorage();

describe('Notes Class', () => {
  it('checks that note is an instance of Note', () => {
    notes = new Notes();
    expect(notes).toBeInstanceOf(Notes)
  });
  
  it('can create a note and store it in the local storage', () => {
    allNotes = (localStorage.length)
    notes.create("Test Note 1", "This is an added note")
    expect(localStorage.length).toEqual(allNotes + 1)
    notes.deleteNote("Test Note 1")
  });

  it('can delete a note', () => {
    notes.create("Test Note 2", "This is a deleted note")
    allNotes = (localStorage.length)
    notes.deleteNote("Test Note 2")
    expect(localStorage.length).toEqual(allNotes - 1)
  })
});
