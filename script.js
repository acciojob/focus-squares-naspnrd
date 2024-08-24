const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
	square.addEventListener("mouseover", handleMouseOver)
	square.addEventListener("mouseout", handleMouseOut)
})

function handleMouseOver(event) {
	// event.target -> where the cursor is
	// html element
	squares.forEach((sqaure) => {
		if(sqaure !== event.target) {
			sqaure.style.backgroundColor = "#6F4E37";
		}
	})
}

function handleMouseOut() {
	squares.forEach((square) => {
		square.style.backgroundColor = "#E6E6FA";	
	});
}

