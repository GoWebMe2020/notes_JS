// pass/fail 
// label for tests
// ".toEqual" clone
function expect(a) {
  return {
    toEqual: function(b) {
      if(a == b) {
        console.log("pass")
      } else {
        console.log("fail")
      }
    }
  }
}

function it(text, callback) {
  console.log("Test: " + text);
  callback();
}