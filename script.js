const squares = document.querySelectorAll(".square");
squares.forEach((sqaure) => {
	sqaure.addEventListener("mouseover", handleMouseOver)
	sqaure.addEventListener("mouseout", handleMouseOut)
})

function handleMouseOver(event){
	squares.forEach((square) => {
		if(square !== event.target){
			square.style.backgroundColor = "#6F4E37"; // coffee color
		}
	})
}

function handleMouseOut(event){
	squares.forEach((square) => {
		square.style.backgroundColor = "#E6E6FA"; // lavendar color
	})
}

