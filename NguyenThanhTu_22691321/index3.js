
function caculateAvg(scores) {
    let total = 0;
    scores.forEach(score => {
      total += score;
    });
    return total / scores.length; 
  }
  function winner(avgDol, avgKol) {
    if (avgDol > avgKol) {
      if (avgDol >= 100) {
        console.log("Dolphins win");
      } else {
        console.log("No one wins");
      }
    } else if (avgDol < avgKol) {
      if (avgKol >= 100) {
        console.log("Koalas win");
      } else {
        console.log("No one wins");
      }
    } else {
      if (avgDol >= 100) {
        console.log("Draw");
      } else {
        console.log("No one wins");
      }
    }
  }
  var Dolphins = [96, 108, 89];
  var Koalas = [88, 91, 110];
  var avgDol = caculateAvg(Dolphins);
  var avgKol = caculateAvg(Koalas);
  console.log("Dolphins co", avgDol, "Koalas co", avgKol);
  winner(avgDol,avgKol);
  var Dolphins = [97, 112, 101];
  var Koalas = [109, 95, 123];
  var avgDol = caculateAvg(Dolphins);
  var avgKol = caculateAvg(Koalas);
  console.log("Dolphins co", avgDol, "Koalas co", avgKol);
  winner(avgDol,avgKol)
  var Dolphins = [97, 112, 101];
  var Koalas = [109, 95, 106];
  var avgDol = caculateAvg(Dolphins);
  var avgKol = caculateAvg(Koalas);
  console.log("Dolphins co", avgDol, "Koalas co", avgKol);
  winner(avgDol,avgKol);