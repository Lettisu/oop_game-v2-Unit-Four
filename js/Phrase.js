/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    $phrase = $('#phrase ul');
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


    addPhraseToDisplay() {
        this.$phrase.empty();
        for (let i = 0; i < this.phrase.length; i++) {
            let letter = this.phrase[i];
            let hiddenLetter = $(`<li class = "hide letter ${letter} " > ${letter}</li>`);
            this.$phrase.append(hiddenLetter);

        }

    };

    checkLetter(guessedLetter) {
        for (let i = 0; i < this.phrase.length; i++) {
            let phraseLetter = this.phrase[i];
            if (guessedLetter === phraseLetter) {
                return (true);

            }
        }
        return (false);
    };

    showMatchedLetter(guessedLetter) {
        let $letters = $('#phrase ul .' + guessedLetter);
        $letters.removeClass('hide');
        $letters.addClass('show');
    }

}