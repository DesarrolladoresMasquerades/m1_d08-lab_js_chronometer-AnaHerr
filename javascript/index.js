const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
   console.log("Printing")
   printMinutes();
   printSeconds()
}

function printMinutes() {
 let min = chronometer.getMinutes();
 let min2var = chronometer.computeTwoDigitNumber(min)

 minDecElement.innerText = min2var.charAt(0)
 minUniElement.innerText = min2var.charAt(1)
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  let sec2var = chronometer.computeTwoDigitNumber(sec)
 
  secDecElement.innerText = sec2var.charAt(0)
  secUniElement.innerText = sec2var.charAt(1)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}


function printSplit() {
  
  const splitString = chronometer.split();

  const newSplit = document.createElement("li");
  newSplit.innerText = splitString;

  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  btnLeftElement.classList.toggle("start")
  btnLeftElement.classList.toggle("stop")
  
  
  btnRightElement.classList.toggle("split")
  btnRightElement.classList.toggle("reset")

  if(btnLeftElement.classList.contains("start")){
   btnLeftElement.innerText = "STOP"
   btnRightElement.innerText = "SPLIT"
   chronometer.start(printTime);
  }
  else{
  btnLeftElement.innerText = "START"
  btnRightElement.innerText = "RESET"
  chronometer.stop();}

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {})
  /*btnLeftElement.classList.toggle("start")
  btnLeftElement.classList.toggle("stop")
  
  
  btnRightElement.classList.toggle("split")
  btnRightElement.classList.toggle("reset")

  if(btnLeftElement.classList.contains("start")){
   btnLeftElement.innerText = "START"
   btnRightElement.innerText = "RESET"
   chronometer.stop();
  }
  else{
  btnLeftElement.innerText = "STOP"
  btnRightElement.innerText = "SPLIT"
  chronometer.start();}
})
*/
