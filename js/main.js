// Global variables here
var arr = [0,1,2,3,4,5,6,7,8,9];
var pContents = document.querySelectorAll("p");
// global functions here

//Redraw the board

function redraw(){
    for (var i=0; i<pContents.length; i++) {
      pContents[i].textContent = arr[i];
    }
}

// Shorthand logger for debugging
function logit(obj){ console.log(obj);}

//Shuffles an array and returns it

shuffleArray(arr);
redraw();
