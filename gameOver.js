async function runGame(plans, Display) {

  let lifes = 3
  logLife(lifes)
  
  for (let level = 0; level < plans.length;) {
    let status = await runLevel(new Level(plans[level]),
      Display);    
    if (status == "won") level++;
    else if (status == "lost") lifes -= 1
    logLife(lifes, level)
    if (lifes <= 0) {
      level = 0
      lifes = 3
      console.log(`You've lost! try again ;)`);
      logLife(lifes, level)
    }
  }
  console.log("You've won!");
}
function logLife(lifes, level=0) {
  console.log(`You have ${lifes} lifes left. Level ${level+1}`);
}
runGame(GAME_LEVELS, DOMDisplay);