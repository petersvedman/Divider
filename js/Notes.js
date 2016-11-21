
var arr = [0,1,2,3,4,5,6,7,8,9];

function getRandomBoolean(){
  return (Math.random() <= 0.5 ? true : false);
}

function globShuffle(magnitude){
  var temp = [];
  for (var i=0;i<magnitude;i++){
    temp.push(getRandomBoolean() ? arr.pop() : arr.shift());
  }
  for (var j=0;j<magnitude;j++){
    arr.push(temp.pop());
  }
}

function returnShuffle(arr, magnitude){
  var temp = [];
  for (var i=0;i<magnitude;i++){
    temp.push(getRandomBoolean() ? arr.pop() : arr.shift());
  }
  return temp;
}

globshuffle(arr.length);
arr = returnShuffle(arr, arr.length);
