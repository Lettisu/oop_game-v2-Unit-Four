/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    totalMissed = 5;
    constructor() {

        this.missed = 0;

        this.phrase = [
            new Phrase('tiger'),
            new Phrase('elephant'),
            new Phrase('monkey'),
            new Phrase('dog'),
            new Phrase('cat')
        ];

        this.activePhrase = null;
    }

    startGame() {

        $('#overlay').fadeOut(3000);
        //game.gameReset();
        //keyPressed.length = 0;
        $("#qwerty .key").prop('disabled', false);
        $("#qwerty .key").removeClass('chosen');
        $("#qwerty .key").removeClass('wrong');

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
        let newPhrase = Math.floor(Math.random() * this.phrase.length);
        return (this.phrase[newPhrase]);
    }


    handleInteraction(e) {
        //let $letter = $(button).text();
        let $letter = $(e.target).text();

        $(e.target).prop('disabled', true);
        //console.log($(e.target).text());
        if (this.activePhrase.checkLetter($letter)) {
            this.activePhrase.showMatchedLetter($letter);
            $(e.target).addClass('chosen');
            console.log($(e.target).text());


        } else {
            this.removeLife();
            // $(button).addClass('wrong');
            $(e.target).addClass('wrong');
        }
        if (this.checkForWin()) {
            this.gameOver();
        }
    };

    removeLife() {
        this.missed = this.missed + 1;
        const lostHeart = "images/lostHeart.png";
        const $availHeart = $('#scoreboard li:not(.lost)').last(); //duplication
        const $availHeartImg = $availHeart.find('img');
        $availHeartImg.attr('src', lostHeart);
        $availHeart.addClass('lost');

        if (this.missed >= 5) {
            this.gameOver(false);
        }
    };
    checkForWin() {
        if ($('.hide').length > 0) {
            return false;
        } else {
            return true;
        }
    }
    //resetKeyBoard();



    gameOver() {
        const $startScreen = $('#overlay');
        $startScreen.show();
        //$overlay.show();
        if (checkForWin) {
            $('#game-over-message').text("Congratulations! You Won!");
            $startScreen.removeClass('start');
            $startScreen.addClass('win');
        } else {
            $('#game-over-message').text("Sorry, try again");
            $startScreen.removeClass('start');
            $startScreen.addClass('lose');
        }
    }
}