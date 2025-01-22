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

    // Check if the countdown has reached zero
    if (timeDifference <= 0) {
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('message').style.display = 'block';
        triggerFireworks();
    }
}

function triggerFireworks() {
    const duration = 10 * 1000; // Fireworks duration (10 seconds)
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
    }, 250);
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
