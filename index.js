gridContainer = document.querySelector(".grid-container");

let userInputResult = 50;
const createGrid = () => {
  // i need to make a 16 x 16 grid of squares divs. Use a loop to create 16 divs inside the grid container
  // each iteration will make a div with name gridBox(i)
  //   userInput = Number(
  //     prompt("How many boxes wide/tall would you like the grid to be?")
  //   );
  for (i = 0; i < userInputResult * userInputResult; i++) {
    const gridBox = document.createElement("div");
    gridBox.style.width = `${650 / userInputResult}px`;
    gridBox.style.height = `${650 / userInputResult}px`;
    gridContainer.appendChild(gridBox);
  }
};

createGrid();
