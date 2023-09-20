gridContainer = document.querySelector(".grid-container");
randomColorDiv = document.getElementById("random-button");
EraserDiv = document.getElementById("erase-button");
clearDiv = document.getElementById("clear-button");

const clearGrid = () => (gridContainer.innerHTML = "");

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.textContent = slider.value; // Display the default slider value

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
    gridBox.addEventListener("mousedown", paintGridDiv);
    gridBox.addEventListener("mouseover", paintGridDiv);
    gridContainer.appendChild(gridBox);
  }
};
//need to make a function that listens for the events click - mousedown - and mouseover to change the background color of the gridBox

const colorPickerSelector = document.getElementById("color-picker");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let currentMode = "color";
colorPickerSelector.onclick = () => (currentMode = "color");
randomColorDiv.onclick = () => (currentMode = "rainbow");
EraserDiv.onclick = () => (currentMode = "eraser");

const paintGridDiv = (e) => {
  if (e.type === "mouseover" && !mouseDown) return;
  if (currentMode === "rainbow") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === "color") {
    e.target.style.backgroundColor = colorPickerSelector.value;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "#ffffff";
  }
};

clearDiv.onclick = () => {
  clearGrid();
  createGrid();
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
