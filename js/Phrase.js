/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /**
  * @class Phrase
  */
class Phrase{

  constructor (sayings) {
    this.saying = sayings["saying"];
    this.author = sayings["author"];
  }
  /**
  * Display phrase on game board
  */
  addPhraseToDisplay() {
    let phraseArray = this.saying.split('')
    const phrase = $('#phrase ul')

    $.each(phraseArray, function(i) {
      if (phraseArray[i] !== ' ') {
        var li = $('<li/>')
            .addClass(`hide letter ${phraseArray[i]}`)
            .appendTo(phrase)
      } else {
        var li = $('<li/>')
            .addClass(`space`)
            .html(`${phraseArray[i]}`)
            .appendTo(phrase)
      }
    });
    var p = $('<p/>')
        .addClass(`author`)
        .html(`<< ${this.author} >>`)
        .appendTo($('#phrase'))
  }

  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter) {
    if($.inArray(letter, this.saying.split('')) != '-1')
      return true
    else return false 
  }

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter) {
    $(`#phrase ul li.${letter}`).each( function(){
      $(this)
        .attr('class',`show letter ${letter}`)
        .text(`${letter}`)
    });
  }
}