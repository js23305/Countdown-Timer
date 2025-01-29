// Set the target date and time for the countdown
const targetDate = new Date("March 1, 2025 00:00:00").getTime(); 
// You can change this to any date you want

// Function to update the countdown every second
function updateCountdown() {
    // Get the current time
    const now = new Date().getTime(); 

    // Calculate the time difference between now and the target date
    const timeLeft = targetDate - now;

    // Convert time difference into days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById("timer").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (timeLeft < 0) {
        document.getElementById("timer").textContent = "Time's up!";
        clearInterval(countdownInterval); // Stop the countdown when it reaches 0
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Call function immediately to show the initial time
updateCountdown();
