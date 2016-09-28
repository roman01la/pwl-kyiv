(function(global, root) {
  'use strict';

  const PIXEL_RATIO = global.devicePixelRatio;

  const WIDTH = global.innerWidth * PIXEL_RATIO;
  const HEIGHT = global.innerHeight * PIXEL_RATIO;

  const BLACK = 0x000000;

  const NUM_OF_DOTS = 14;

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

  drawDirtStroke(0.5, 1.7, WIDTH, 80);

  function drawDot(x, y, r, color, ctx) {
    ctx.fillColor = color;
    ctx.beginPath();
    ctx.arc(x, y, r, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
  }

  function drawDirtStroke(min, max, w, h) {
    for (let i = 0; i < h; i += max * Math.random() * 10) {
      for (let j = 0; j < w; j += max * Math.random() * 60) {
        if (Math.sin(j) > 0) {
          drawDot(i, j, getRandomInt(min, max), BLACK, ctx);
        }
      }
    }
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
})(window, document);
