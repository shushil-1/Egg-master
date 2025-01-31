let clickCount = 0;  // Variable to store the number of clicks

// Function to update the stopwatch display
function updateStopwatch() {
  document.getElementById('stopwatch').innerText = `Clicks: ${clickCount}`;
}

// Function to handle egg click event
function clickEgg() {
  clickCount++;  // Increment click count
  updateStopwatch();  // Update stopwatch display

  // Make the egg vibrate
  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);  // Vibrate pattern: 100ms on, 50ms off, 100ms on
  }

  // Optional: Add a satisfying message every time the egg is clicked
  document.getElementById('message').innerText = `You clicked the egg ${clickCount} times!`;
}

// Function to refresh the page (reset the click count)
function refreshPage() {
  clickCount = 0;
  updateStopwatch();  // Reset stopwatch
  document.getElementById('message').innerText = '';  // Clear the message
}
