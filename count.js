function startCountdown() {
  const inputElement = document.querySelector(".countdownInput");
  const timerDisplay = document.querySelector(".timerDisplay");
  
  const inputNum = parseInt(inputElement.value);
  console.log(inputNum)

  if (isNaN(inputNum) || inputNum <= 0) {
    alert('Please enter the correct number');
    inputElement.value = "";
    inputValue = 0;
    return
  }

  let seconds = inputNum;
  
  const countdown = setInterval(function() {
    if (seconds <= 0) {
        clearInterval(countdown);
        timerDisplay.innerHTML = 'end';
    } else {
        timerDisplay.innerHTML = seconds;
        seconds--;
    }
  }, 1000);
}