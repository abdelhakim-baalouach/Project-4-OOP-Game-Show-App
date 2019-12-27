/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /**
  * @class Game
  */
class Game {
  constructor () {
    this.missed = 0
    this.activePhrase = null
    this.sayings = [
      {saying : 'life is too important to be taken seriously' , author : 'Oscar Wilde'},
      {saying : 'those who realize their folly are not true fools' , author : 'Zhuangzi'},
      {saying : 'you can never plan the future by the past' , author : 'Edmund Burke'},
      {saying : 'be like a tree and let the dead leaves drop' , author : 'Rumi'},
      {saying : 'there is more to life than increasing its speed' , author : 'Mahatma Gandhi'},
      {saying : 'forgiveness is the final form of love' , author : 'Reinhold Niebuhr'},
      {saying : 'an unexamined life is not worth living' , author : 'Socrates'}
    ]
  }

  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase() {
    let random = Math.floor(Math.random() * this.sayings.length)
    return this.sayings[random]
  }

  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame() {
    $('#phrase ul').remove()
    $('#phrase').html('<ul/>')
    $( ".key" ).removeClass( "wrong chosen" )
    $( ".tries img" ).slice( 0 ).attr('src','images/liveHeart.png')

    let rondom = this.getRandomPhrase()
    this.activePhrase = new Phrase(rondom)
    this.activePhrase.addPhraseToDisplay(rondom)
  }

  handleInteraction (letter){
    if (!this.activePhrase.checkLetter(letter)){
      this.removeLife()
      $(event.target).css('disabled','true');
      $(event.target).attr('class','key wrong');
    }else {
      $(event.target).css('disabled','true');
      $(event.target).attr('class','key chosen');
      this.activePhrase.showMatchedLetter(letter)
      if(this.checkForWin == true) this.gameOver(true)
    }
  }

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */
  checkForWin() {
    let size = this.activePhrase.saying.replace(/\s/g,'').length
    let showCount = 0
    $('#phrase ul li.show').each(function(i) {
      showCount++
    });
    if(size === showCount) return true
    else return false
  }

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeLife() {
    this.missed++
    if (this.missed < 5)
      $( ".tries img" ).slice( 0, this.missed ).attr('src','images/lostHeart.png')
    else this.gameOver(false)
  }

  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameWon) {
    if(!gameWon) {
      $('#overlay').attr('class','lose')
      $('#game-over-message').text("Sorry, better lick next time!")
      $('#overlay').show()
    } else {
      $('#overlay').attr('class','win')
      $('#game-over-message').text("Great job!")
      $('#overlay').show()
    }
  }
}
