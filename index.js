function updateTime() {
  const now = new Date();
  const nyTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format(now);
  document.getElementById('time').textContent = nyTime;
}

updateTime();
setInterval(updateTime, 1000);
