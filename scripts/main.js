(function(global, root) {
  'use strict';

  const PIXEL_RATIO = global.devicePixelRatio;

  const W_WIDTH = global.innerWidth;
  const W_HEIGHT = global.innerHeight;

  const WIDTH = W_WIDTH * PIXEL_RATIO;
  const HEIGHT = W_HEIGHT * PIXEL_RATIO;

  const BLACK = 0x000000;

  const NUM_OF_DOTS = Math.floor(W_WIDTH / (1280 / 4));
  console.log(NUM_OF_DOTS);

  const MIN_R = 0.5;
  const MAX_R = 2.5;

  var canvas = root.querySelector('.background');

  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  canvas.style.transform = `scale(${1 / PIXEL_RATIO})`;

  var ctx = canvas.getContext('2d');

  Array.apply(null, Array(NUM_OF_DOTS))
       .forEach((r) => {
         drawDot(
           getRandomInt(0, WIDTH),
           getRandomInt(0, HEIGHT),
           getRandomInt(MIN_R, MAX_R),
           BLACK,
           ctx);
       });

  if (W_WIDTH >= 800) {
    drawDirtStroke(0, 0, 0.5, 2, 300, HEIGHT);
  }

  function drawDirtStroke(x, y, min, max, w, h) {
    for (let i = 0; i < w; i += max * 26) {
      for (let j = 0; j < h; j += max * 8) {
        drawDot(x + i * Math.sin(i), y + j * Math.sin(i), getRandomInt(min, max), BLACK, ctx);
      }
    }
  }

  function drawDot(x, y, r, color, ctx) {
    ctx.fillColor = color;
    ctx.beginPath();
    ctx.arc(x, y, r, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
})(window, document);
