
const colors = ['rgb(136, 118, 110)', 'rgb(235, 248, 115)', 'rgb(156, 255, 147)', 'rgb(12, 45, 71)', 'rgb(226, 74, 74)', 'rgb(52, 171, 218)']

const targetContainer = document.querySelector('.targetContainer')
const newGame = document.querySelector('.newGame')
const colorBox = document.querySelectorAll('.colors')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const result = document.querySelector('.result')
const value = document.querySelector('.value')
let counter = 0

targetContainer.style.background = colors[Random()]


function Random (){
    return Math.floor(Math.random() * colors.length)
}
window.addEventListener('load', function(){
    loadColors()
})

function loadColors (){
    one.style.background = colors[0]
    two.style.background = colors[1]
    three.style.background = colors[2]
    four.style.background = colors[3]
    five.style.background = colors[4]
    six.style.background = colors[5]
}

function displayAlert (content, action){
    result.textContent = content
    result.classList.add(action)
    
    setTimeout(function displayAlert(){
        result.textContent = ""
        result.classList.remove(action)
    },1000)
}

colorBox.forEach(function (color){
    color.addEventListener('click', function(e){
        const current = e.currentTarget

        
        if( targetContainer.style.background === e.currentTarget.style.background){
            counter++
            value.textContent = counter
            targetContainer.style.background = colors[Random()]

            current.classList.toggle('rightGuess')

            displayAlert('Yes! you guessed right', 'success')
            if(counter > 0){
                value.style.color = 'rgb(2, 168, 24)'
            }
        }

        else{
            counter--
            value.textContent = counter
            targetContainer.style.background = colors[Random()]
            current.classList.toggle('wrongGuess')
            displayAlert('oops! you guessed wrong', 'danger')

            if(counter === 0){
                value.style.color = 'rgb(97, 97, 97)'
            }
            if(counter < 0){
                value.style.color = 'rgb(231, 40, 40)'
            }
        }
    })
})



newGame.addEventListener('click', function(){
    targetContainer.style.background = colors[Random()]
    counter = 0
    value.textContent = counter
    if(counter === 0){
        value.style.color = 'rgb(97, 97, 97)'
    }
    displayAlert('Game reset successfully!', 'success')
})





































