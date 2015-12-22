function promptForPlayerName (Player){
   var name= prompt("What is " + (Player) + "name");
     if (name.length >= 15) {
      alert("Wow, that's a long name!");
}
  return name;
}
function tryTwoPointShot(){
  var num1= Math.random();
  var num2= Math.random();
  if((num1 > 0.2) && (num2 > 0.2)){
  return true;  
} else {
    return false;
}
}
function tryThreePointShot(){
    var numb1= Math.random();
    var numb2= Math.random();
  if ((numb1 <= 0.2) || (numb2 >= 0.8)){
    return true;
} else {
    return false;
}
}
function getShotString (playerName,points,goodOrNot){
    if (goodOrNot){
        return playerName + " attempted a pointer. It was good";
    } else {
        return playerName + " attempted a pointer. It was bad";
    }
}
function updateScore (shotMadeOrNot, numOfPoints, pointsForShot){
    if(shotMadeOrNot){
        return numOfPoints + pointsForShot;
    } else{
        return numOfPoints;
    }
}
function isEndOfGame (Score, Name){
    if (Score >= 20){
        alert("The game is over, won");
    } if (Score >= 20){
        return true;
    }else{
        return false;
    }
}