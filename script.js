//Exercise 3: Add JavaScript to Display the Current Time. 
// Goal: Replace the placeholder with the current time dynamically. 
// Steps: In script.js, use the Date object to get the current time (hours, minutes, and seconds).
// Format the time as hh:mm:ss.
// Use document.getElementById() to update the text of the clock <div> with the formatted time.
// Check:
// Open your browser and verify that the current time appears, but it doesn’t yet update automatically.

//Exercise 4: Update the Time Every Second
//Goal: Make the clock update in real-time.
//Steps:
//Use setInterval() in script.js to call the function that updates the clock every 1000 milliseconds (1 second).
//Ensure the time updates on the screen dynamically without refreshing.
//Check:
//Open your browser and confirm that the clock updates in real-time.

//Exercise 5: Format the Time with Leading Zeros
//Goal: Ensure single-digit hours, minutes, and seconds (e.g., 5:3:9) display with leading zeros (05:03:09).
//Steps:
//Write a helper function (e.g., formatTime(value)) that adds a leading zero to any number less than 10.
//Use this function when formatting hours, minutes, and seconds.
//Check:
//Verify that the clock always displays in hh:mm:ss format, even for single-digit values.

//Exercise x: Add a Button to Toggle the Clock

/// Variable to track if seconds are shown
let showSeconds = true;

// Helper function to add leading zeros
function formatTime(value) {
    return value < 10 ? '0' + value : value;
}

// Function to update the clock
function updateClock() {
    // Get current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Format time with or without seconds
    let timeString = formatTime(hours) + ':' + formatTime(minutes);
    
    if (showSeconds) {
        timeString += ':' + formatTime(seconds);
    }
    
    // Update the clock display
    document.getElementById('clock').textContent = timeString;
}

// Toggle seconds on/off when button is clicked
document.getElementById('toggleButton').addEventListener('click', function() {
    showSeconds = !showSeconds;
    
    // Update button text
    if (showSeconds) {
        this.textContent = 'Oculta Segons';
    } else {
        this.textContent = 'Mostra Segons';
    }
    
    updateClock();
});

// Update clock immediately when page loads
updateClock();

// Update clock every second (1000 milliseconds)
setInterval(updateClock, 1000);