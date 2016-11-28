// Global variables here
var arr = ["11","12","13","14","15","16","17","18","19"];
var level = 1;
var score = 0;
var ps = document.querySelectorAll(".square");
var scoreDisp = document.querySelectorAll(".scoreDisp");
var levelDisp = document.querySelectorAll(".levelDisp");
// global functions here

//Redraw the board

function redraw(){
    for (var i=0;i<ps.length;i++){
        ps[i].textContent = arr[i];
    }
    scoreDisp[0].textContent = "  Score: " + String(score) + " points";
    levelDisp[0].textContent = "  Level: " + String(level+1) + "  ";

}

//Is the click recieved a valid click, ie %level
function validClick(obj, level){
    return (Number(obj)%(level+1) === 0) ?  true : false;
}

// Shorthand logger for debugging
function logit(obj){ console.log(obj);}

// set up event listener for clicks
function setupEventListeners(){
  for (var i=0; i<ps.length; i++){
      ps[i].addEventListener("click", function(){
      if (validClick(this.textContent, level)){
          arr[arr.indexOf(this.textContent)] = "X";
          redraw();
          shuffleArray(arr);
          if (!checkEnd()){
            console.log("theEnd");
            score += level * 100;
            level++;
            makeNewArray(level);
            printVictory();
            redraw();
          }
      }
      else {score -= 100;}
  });

  }
}

// Checkend returns true if no more numbers in arr are %level
function checkEnd(){
    var flag = false;
    for (i=0;i<arr.length;i++){
        if (arr[i]%(level+1)===0){
            flag = true;
        }
    }
    return flag;
}

// printVictory prints Victory and lets you play on
function printVictory(){
  console.log("victory");
}

shuffleArray(arr);
setupEventListeners();
redraw();
setInterval(function(){
  shuffleArray(arr);
  redraw();
}, 2500);
