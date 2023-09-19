gridContainer = document.querySelector(".grid-container");

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.textContent = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
// update grid demensions based on slider value

const createGrid = () => {
  // i need to make a 16 x 16 grid of squares divs. Use a loop to create 16 divs inside the grid container
  // each iteration will make a div with name gridBox(i)
  //   userInput = Number(
  //     prompt("How many boxes wide/tall would you like the grid to be?")
  //   );

  for (i = 0; i < slider.value * slider.value; i++) {
    const gridBox = document.createElement("div");
    gridBox.style.width = `${650 / slider.value}px`;
    gridBox.style.height = `${650 / slider.value}px`;
    gridContainer.appendChild(gridBox);
  }
};

const defaultGrid = createGrid();

slider.oninput = function () {
  output.textContent = this.value;
};

slider.onchange = function () {
  clearGrid();
  const currentGrid = createGrid(this.value);
  return currentGrid;
};

const clearGrid = () => (gridContainer.innerHTML = "");
