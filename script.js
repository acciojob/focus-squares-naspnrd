const squares = document.querySelectorAll(".square");
squares.forEach((sqaure) => {
	sqaure.addEventListener("mouseover", handleMouseOver)
	sqaure.addEventListener("mouseout", handleMouseOut)
})

function handleMouseOver(event){
	squares.forEach((square) => {
		if(square !== event.target){
			square.style.backgroundColor = "#6F4E37";
		}
	})
}

function handleMouseOur(event){
	
}