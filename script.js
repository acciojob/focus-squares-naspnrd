//your JS code here. If required.

// Select all square elements
const squares = document.querySelectorAll('.square');

// Function to handle mouseover event
function handleMouseOver(event) {
	// Iterate through each square
	squares.forEach(square => {
		// Change background color to Coffee (#6F4E37) for squares other than the hovered one
		if (square !== event.target) {
			square.style.backgroundColor = '#6F4E37';
		}
	});
}

// Function to handle mouseout event (optional: revert color on mouseout)
function handleMouseOut() {
	squares.forEach(square => {
		square.style.backgroundColor = '#E6E6FA'; // Restore Lavender color
	});
}

// Add event listeners to each square for mouseover and mouseout events
squares.forEach(square => {
	square.addEventListener('mouseover', handleMouseOver);
	square.addEventListener('mouseout', handleMouseOut);
});
