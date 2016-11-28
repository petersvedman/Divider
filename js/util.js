/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * Copied from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
/**
* Make a new array with at least one element % level
* Number of % level elements randomized
*/
function makeNewArray(level){
  var slugs = getRandomInt(1,level);
  for (var i=0; i<arr.length;i++){
    arr[i] = String(generateNumber(level+1));
  }
  for (var j=0; j<slugs;j++){
    arr[j] =  String(generateDivisible(level+1));
}
shuffleArray(arr);
}

function generateDivisible(level){
  return getRandomInt(0,17) * level;
}

function generateNumber(level){
  return getRandomInt(1, level*5);
}
