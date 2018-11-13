let utils = {
  elapsedTimeString: function(elapsed, runningSince) {
    let totalElapsed = parseInt(elapsed);
    if (runningSince) {
      totalElapsed += Date.now() - parseInt(runningSince);
    }
    return this.millisecondsToDigital(totalElapsed);
  },
  millisecondsToDigital: function(milliseconds) {
    let seconds = timerPadding(parseInt((milliseconds / 1000) % 60));
    let minutes = timerPadding(parseInt((milliseconds / 1000 / 60) % 60));
    let hours = timerPadding(parseInt(milliseconds / 1000 / 60 / 60));

    function timerPadding(number) {
      if (number < 10) {
        return `0${number}`;
      } else {
        return number;
      }
    }

    return `${hours}:${minutes}:${seconds}`;
  }
};
export default utils;
