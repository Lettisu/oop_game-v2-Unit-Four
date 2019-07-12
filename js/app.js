/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

//document.getElementById JS vs JQ
$("#btn__reset").on('click', function () {
    // if (overlay.className === 'lose' || overlay.className === 'win')

    game = new Game();
    game.startGame();

});
$("#qwerty .key").on('click', function (event) {
    game.handleInteraction(event)
});
//  document.getElementById('qwerty').addEventListener('click', function (_event) {
//  const e = event.target;
//  let event = Event; recoded at later date

if (Event.className === 'key') {
    game.handleInteraction(e)
};

//document.getElementById('btn__reset').addEventListener('click', function (_event) {
// if (overlay.className === 'lose' || overlay.className === 'win') {
//      game.resetKeyboard();
//  game.resetOverlay();
//  game.resetLife(); not needed