let clickCount = 0;

function clickEgg() {
  clickCount++;
  
  // Show message after a certain number of clicks
  if (clickCount >= 5) {
    document.getElementById('message').innerHTML = "Better luck next time!";
  } else {
    document.getElementById('message').innerHTML = `Keep clicking... (${clickCount})`;
  }
}

function refreshPage() {
  // Reset click count and message
  clickCount = 0;
  document.getElementById('message').innerHTML = '';
}
