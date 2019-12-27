/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game
let phrase
const Overly = $('#overlay')
const btRest = $('#btn__reset')
const buttonsContainer = $('#qwerty')

btRest.on('click', () => {
    Overly.hide()
    game = new Game()
    game.startGame()
})

buttonsContainer.on('click', 'button.key', (e)=>{

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    if ($(event.target).hasClass('key')){
        game.handleInteraction($(event.target).text())
        // $(event.target).css('disabled','true');
        // $(event.target).attr('class','key chosen');
    }
})

