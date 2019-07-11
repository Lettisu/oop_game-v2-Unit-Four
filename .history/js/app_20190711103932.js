/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

//document.getElementById
$("#btn__reset").on('click', function (event) {

    game = new Game();
    game.startGame();

});
$("#qwerty").on('click', function (event) {
    game.handleInteraction(_event)
});
//  document.getElementById('qwerty').addEventListener('click', function (_event) {
//  const e = event.target;
//  let event = Event;

if (Event.className === 'key') {
    game.handleInteraction(e)
};

document.getElementById('btn__reset').addEventListener('click', function (_event) {
    if (overlay.className === 'lose' || overlay.className === 'win') {
        //      game.resetKeyboard();
        //  game.resetOverlay();
        //  game.resetLife();

    };
})