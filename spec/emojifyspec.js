let emojify = new Emojify();

describe('Emojify Class', () => {
  it('checks that emojify is an istance of Emojify', () => {
    let emojifyTest = new Emojify();
    expect(emojifyTest).toBeInstanceOf(Emojify)
  });

  it('checks that the function is called with and argument', () => {
    expect(emojify.emojiPostData(":smile:")).toHaveBeenCalledWithArguments()
  });
  
  it('returns an emoji when paseed :smile:', () => {
    let emoji = emojify.emojiPostData('text').then(post => { post.emojified_text});
    expect(emoji).toEqual('text');
  });

});