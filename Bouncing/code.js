

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var balls = [createBall(),createBall(),createBall()];
// var ball1 = createBall();
// var ball2 = createBall();
// var ball3 = createBall();
var n = 200;
var m = 200;
var p = 0;
p = 0;

function draw() {
  background("white");
  updateShape(balls[0]);
  updateShape(balls[1]);
  updateShape(balls[2]);
  drawBall(balls[0]);
  drawBall(balls[1]);
  drawBall(balls[2]);
  clicking();
}
function clicking() {
  if (mouseWentDown("leftButton"))  {
    balls[0] = {
    x: (randomNumber(-10, 10)), 
    y: (randomNumber(-10, 10)),
    n: (mouseX),
    m: (mouseY) };
    p = p+1;
  }
}

function createBall() {
  var b = {
    x: (randomNumber(-10, 10)), // negative values to go all directions
    y: (randomNumber(-10, 10)),
    n: 200,
    m: 200
  }
  return b;
}

function drawBall(b) {
  // background("white");
  ellipse(b.n,b.m,50,50);
}

function updateShape(ball) {
  ball.n = ball.n + ball.x;
  ball.m = ball.m + ball.y;
  if (ball.n > 370) {
    ball.x = ball.x * -1;
  }
  if (ball.n < 30) {
    ball.x = ball.x * -1;
  }
  if (ball.m > 370) {
    ball.y = ball.y * -1;
  }
  if (ball.m < 30) {
    ball.y = ball.y * -1;
  }
}



}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
