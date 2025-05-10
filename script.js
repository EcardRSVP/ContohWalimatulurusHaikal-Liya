// Countdown to the wedding date
const countdown = () => {
  const eventDate = new Date("2025-06-01T10:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").textContent = `Hitung mundur hari: ${days} hari lagi!`;
};

setInterval(countdown, 1000);
countdown();

// Alert when the form is submitted
document.querySelector('form')?.addEventListener('submit', function (e) {
  alert('Terima kasih atas konfirmasi kehadiran Anda!');
});
