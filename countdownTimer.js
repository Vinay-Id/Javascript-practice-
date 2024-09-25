const countdown = (seconds) => {
    const interval = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(interval);
            console.log('Time is up!');
        } else {
            console.log(`${seconds} seconds remaining`);
            seconds--;
        }
    }, 1000);
};

countdown(10); 
