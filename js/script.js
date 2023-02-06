'use strict'
import{words} from './word.js'


//THE DECLARATION
const theWords = document.querySelector('.word'),
hintText = document.querySelector('.hint  span'),
inputField = document.querySelector('input'),
refershBtn = document.querySelector('.refresh-word'),
checkAnswerBtn = document.querySelector('.check-word'),
MessageBox = document.querySelector('.message'),
okayBtn = document.querySelector('.ok'),
overlay = document.querySelector('.overlay'),
theOutcome = document.querySelector('.outcome'),
gameStartingBtn = document.querySelector('.get'),
theIntro = document.querySelector('.name'),
theGame = document.querySelector('.container')

//THE INTRO TO THE GAME
const startTheGame = () => {
    theIntro.classList.add('hidden')
    theGame.classList.remove('hidden')
    initGame()

}

gameStartingBtn.addEventListener('click', startTheGame)

let correctWord , timer


//THE OUTCOMES FUNCTION
const hiddenShowed = () => {
    overlay.classList.remove('hidden')
    theOutcome.classList.remove('hidden')
}

//THE TIMER
const startLoseTimer = maxTime => {
     clearInterval(timer)
   timer = setInterval(function () {

      if(maxTime > 0) {
        maxTime--
       return theTime.textContent = maxTime

      }

        if (maxTime >= -1) {
            clearInterval(timer)
            hiddenShowed()
            MessageBox.textContent = 'Time up!' +' ' + `${correctWord}`.toLocaleUpperCase() + ' was the correct word'
            
        }
    }, 1000)

}

//THE GAME FUNCTION
const initGame = () => {
    startLoseTimer(30)
    let randomObj = words[Math.floor(Math.random() * words.length)]
    let wordArray = randomObj.word.split('')
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i] , wordArray[j]] =  [wordArray[j] , wordArray[i]]
    }
    correctWord = randomObj.word.toLocaleLowerCase()
    console.log(randomObj);
    theWords.textContent = wordArray.join('')
    hintText.textContent = randomObj.hint
    inputField.value = ``
    inputField.setAttribute("maxlength", correctWord.length) 
}
const checkword = () => {
    startLoseTimer(30)
    let userword = inputField.value.toLocaleLowerCase()
    if (!userword) {
        MessageBox.textContent = `you did not insert any value`
    }
    console.log(userword);
    if (userword !== correctWord) {
       MessageBox.textContent = 'oops!' + ' ' + `${userword}`.toLocaleUpperCase() + ' ' + `is not correct`
    } else {
       MessageBox.textContent ='Congratulation' + ' ' + `${userword}`.toLocaleUpperCase() + ' ' + `is correct`

    }
    hiddenShowed()  
}

refershBtn.addEventListener('click', initGame)
checkAnswerBtn.addEventListener('click', checkword)

const theTime = document.querySelector('.sec')


//THE OKAY BUTTON
const okayFun =  () => {
    overlay.classList.add('hidden')
    theOutcome.classList.add('hidden')
    initGame() 
}
okayBtn.addEventListener('click', okayFun)
