class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start(callback) {
    this.intervalId = setInterval(()=>{
    this.currentTime += 1
    callback()},
    1 * 1000
    );
  }

  getMinutes() {
    return parseInt(this.currentTime/60)
  }

  getSeconds() {
    return parseInt(this.currentTime%60)
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString()
    if(stringValue.length<2) return "0" + stringValue;
    else return stringValue;
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" +this.computeTwoDigitNumber(this.getSeconds());
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
