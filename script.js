// mouseover
// mouseout

const squares = document.querySelectorAll(".square");

function handleMouseOver(event) {
	console.log(event);
	squares.forEach((square) => {
		if(square !== event.target){
			square.style.backgroundColor = "#6F4E37";
		}
	})
}

function handleMouseOut(event) {
	squares.forEach((square) => {
		square.style.backgroundColor = "#E6E6FA";
	})
}
squares.forEach((square) => {
	console.log({square}); 
	square.addEventListener("mouseover", handleMouseOver);
	// revert colors
	square.addEventListener("mouseout", handleMouseOut);
})


