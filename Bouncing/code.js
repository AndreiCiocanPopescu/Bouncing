

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

var balls = [] 

var n = 200;
var m = 200;
var p = 0;
var w = 50;
w = 50;
 var radius = 25;
var numberOfBallObjects = 6;

for (var i = 0; i < numberOfBallObjects; i++) {
   balls.push(createBall());
}

 function ballsCollide(ballA, ballB) {
  return dist( ballA.n, ballA.m, ballB.n, ballB.m ) <= 2*radius
}

function bounceBalls(ballA, ballB) {
  if( ballsCollide(ballA, ballB) ) {
    ballA.x *= -1;
    ballA.y *= -1;
    ballB.x *= -1;
    ballB.y *= -1;
  }
}



function draw() {
  background("white");
  for( var i = 0; i < balls.length - 1; i++ ) { 
    for( var j = i+1; j < balls.length; j++ ) {
      bounceBalls(balls[i], balls[j])}}
      
  for (var i = 0; i < balls.length; i++) {
    updateShape(balls[i]);
    drawBall(balls[i]);
    
  }
  clicking();
}
function clicking() {
  if (mouseWentDown("leftButton"))  {
    balls[0] = {
    x: (randomNumber(-20, 20)), 
    y: (randomNumber(-20, 20)),
    n: (mouseX),
    m: (mouseY) };
  }
}

function createBall() {
  var b = {
    x: (randomNumber(-10, 10)), // negative values to go all directions
    y: (randomNumber(-10, 10)),
    n: (randomNumber(100, 350)),
    m: (randomNumber(100, 350))
  }
  return b;
}

function drawBall(b) {
  noStroke();
  ellipse(b.n,b.m,2*radius,2*radius);
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
