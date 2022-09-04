const grid = document.querySelector(".grid");

function createGrid(size) { 

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows  = `repeat(${size}, 1fr)`;
  let squares = grid.querySelectorAll('div')
  squares.forEach((div) => div.remove());
  amount = size * size;


  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseover", squareColor);
    grid.appendChild(div);
    
  }
  };
  

function changeGrid(input) {
  if (input > 0 && input < 250) {
    createGrid(input); }
  else {
    console.log("too many squares")
  }
}
function resetBoard() {
  let squares = grid.querySelectorAll("div");
  squares.forEach((div) => div.style.backgroundColor = 'rgb(232, 218, 218)');
}

function squareColor() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; }
  else{this.style.backgroundColor = color;}
  
}

function colorChange(input) {
  color = input;
}




createGrid(16);