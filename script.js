window.onload = function () {
  initialColor = document.querySelector('.color');
  initialColor.classList.add('selected');
}

let allColors = document.querySelectorAll('.color');

for (let color of allColors) {
  color.addEventListener('click', selectColor)
}

function selectColor(event) {
  for (let color of allColors) {
      color.className = 'color';
  } 
  event.target.classList = 'color selected';  
}

let pixels = document.querySelectorAll('.pixel')
for (item of pixels) {
  item.addEventListener('click', colorir);    
}

function colorir() {
  let selectedColor = document.querySelector('.selected');
  let novaCor = window.getComputedStyle(selectedColor).backgroundColor;
  this.style.backgroundColor = novaCor;
}

let button = document.querySelector('#clear-board');
button.innerText = 'Limpar';
button.addEventListener('click', clear);

function clear() {
  let allPixels = document.getElementsByClassName('pixel')
  for (pixel of allPixels) {
      pixel.style.backgroundColor = 'white'
  }
}

