// const squares = document.querySelectorAll(".square");

// squares.forEach((square) => {
// 	square.addEventListener("mouseover", handleMouseOver)
// 	square.addEventListener("mouseout", handleMouseOut)
// })

// function handleMouseOver(event) {
// 	// event.target -> where the cursor is
// 	// html element
// 	squares.forEach((sqaure) => {
// 		if(sqaure !== event.target) {
// 			sqaure.style.backgroundColor = "#6F4E37";
// 		}
// 	})
// }

// function handleMouseOut() {
// 	squares.forEach((square) => {
// 		square.style.backgroundColor = "#E6E6FA";	
// 	});
// }

const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        squares.forEach(s => s.style.backgroundColor = s === square ? "#E6E6FA" : "#6F4E37");
    });

    square.addEventListener("mouseout", () => {
        squares.forEach(s => s.style.backgroundColor = "#E6E6FA");
    });
});

