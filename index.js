function theBeatlesPlay(musicians, instruments) {
  var array = []
  var i = 0;
  function incrementVariable() {
  i = i + 1;
}
  do { array.push(musicians[i] + ' plays ' + instruments[i]);
  incrementVariable();
} while (i < musicians.length);
  return array 
}
function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  function incrementVariable() {
  i = i + 1;  }
  while (i < facts.length) {
    array.push(facts[i] + '!!!');
    incrementVariable();
  }
  return array 
}
function iMehTheBeatles(n) {
  var array = [];
  var i = n 
  do   { array.push('I meh the Beatles!');
  i++;
  } while (i < 15);
  return array
}