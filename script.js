var message = document.getElementById('current-state');
var date = new Date();
var hour = date.getUTCHours(); // For international viewers

if (hour < 8) {
  message.innerHTML = 'Currently Not Working - Response time: 5min';
} else if (hour >= 8 && hour < 17) {
  message.innerHTML = 'Currently Working - Response time: 30min';
} else if (hour > 17) {
  message.innerHTML = 'Currently Not Working - Response time: 5min';
}
