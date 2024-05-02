$(document).ready(function() {
    var circle = $('#circle');
    var container = $('#container');

    // Initial position of the circle
    var posX = container.width() / 2 - circle.width() / 2;
    var posY = container.height() / 2 - circle.height() / 2;
    circle.css({ left: posX, top: posY });

    // Function to move the circle
    function moveCircle(direction) {
        switch(direction) {
            case 'up':
                posY = Math.max(posY - 10, 0); // Ensure posY does not go below 0
                break;
            case 'down':
                posY = Math.min(posY + 10, container.height() - circle.height()); // Ensure posY does not exceed container height
                break;
            case 'left':
                posX = Math.max(posX - 10, 0); // Ensure posX does not go below 0
                break;
            case 'right':
                posX = Math.min(posX + 10, container.width() - circle.width()); // Ensure posX does not exceed container width
                break;
        }
        circle.css({ left: posX, top: posY });
    }

    // Listen for arrow key presses
    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // Left arrow key
                moveCircle('left');
                break;
            case 38: // Up arrow key
                moveCircle('up');
                break;
            case 39: // Right arrow key
                moveCircle('right');
                break;
            case 40: // Down arrow key
                moveCircle('down');
                break;
            default:
                return; // Exit this handler for other keys
        }
        e.preventDefault(); // Prevent the default action (scrolling or moving the cursor)
    });
});
