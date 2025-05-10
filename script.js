// Countdown to wedding date
const countdownDate = new Date("June 1, 2025 10:00:00").getTime();

const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = countdownDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `Wedding in ${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "Wedding has started!";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
