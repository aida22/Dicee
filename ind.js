let randomNumber = (Math.floor(Math.random() * 6) + 1);
let randomImg = "image/dice" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImg);

let randomNumber2 = (Math.floor(Math.random() * 6) + 1);
let randomImg2 = "image/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

if (randomNumber > randomNumber2){
  document.querySelector('h1').innerHTML = "🚩Player 1 Wins"
}
else if (randomNumber2 >randomNumber) {
  document.querySelector('h1').innerHTML = "Player 2 Wins🚩"
}
else {
  document.querySelector('h1').innerHTML = "Draw!"
}
