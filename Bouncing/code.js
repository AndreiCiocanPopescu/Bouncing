

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

var ball1 = createBall();
var ball2 = createBall();
var ball3 = createBall();

function draw() {
  background("white")
  updateShape(ball1)
  updateShape(ball2)
  updateShape(ball3)
  drawBall(ball1)
  drawBall(ball2)
  drawBall(ball3)
}
function clicking() {
  if (mouseWentDown("leftButton")) {
    var ball;
  }
}

function createBall() {
  var b = {
    x: (randomNumber(3, 10)), // negative values to go all directions
    y: (randomNumber(3, 10)),
    n: 200,
    m: 200
  }
  return b;
}

function drawBall(b) {
  // background("white");
  ellipse(b.n,b.m,100,100);
}

function updateShape(ball) {
  ball.n = ball.n + ball.x;
  ball.m = ball.m + ball.y;
  if (ball.n > 350) {
    ball.x = ball.x * -1;
  }
  if (ball.n < 50) {
    ball.x = ball.x * -1;
  }
  if (ball.m > 350) {
    ball.y = ball.y * -1;
  }
  if (ball.m < 50) {
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
