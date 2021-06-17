const canvas = document.getElementById('canvas');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const sizeSpan = document.getElementById('size');
const colorPicker = document.getElementById('color');
const clearBtn = document.getElementById('clear');
const ctx = canvas.getContext('2d');

let size = 10,
    color = 'black', 
    x, 
    y,
    draw = false;

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2,y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

canvas.addEventListener('mousedown', e => {
  draw = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
  draw = false;
  x = null;
  y = null;
});

canvas.addEventListener('mousemove', e => {
  if (draw) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
})

decreaseBtn.addEventListener('click', () => {
  size > 5 ? size -= 5 : size = 5;
  sizeSpan.innerHTML = size;
});
increaseBtn.addEventListener('click', () => {
  size < 50 ? size += 5: size = 50;
  sizeSpan.innerHTML = size;
});
clearBtn.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));

colorPicker.addEventListener('change', e => color = e.target.value);