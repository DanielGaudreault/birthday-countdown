function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const birthday = new Date(currentYear, 2, 28); // March is month 2 (0-indexed)

    // If the birthday has already passed this year, set it to next year
    if (now > birthday) {
        birthday.setFullYear(currentYear + 1);
    }

    const timeDifference = birthday - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
