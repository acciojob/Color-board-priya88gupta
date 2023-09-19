//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    // Create 800 square boxes and append them to the container
    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        // Add an event listener to smoothly transition the color back to the original after 1 second
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'dodgerblue';
            setTimeout(() => {
                square.style.backgroundColor = 'lightgray';
            }, 1000); // 1000 milliseconds (1 second)
        });
    }
});

