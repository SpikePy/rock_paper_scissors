// Let computer choose random hand sign
function computer_choose() {
    signs = ["rock", "paper", "scissors"]
    computer = signs[Math.floor(Math.random() * signs.length)]

    document.getElementById('img_computer').alt = computer
    document.getElementById('img_computer').src = computer +'.svg'
    return computer
}

// Get your choice, compare it to the computer, "calculate" the result and show it
function eval(you) {
    if (you != 'rock' && you != 'paper' && you != 'scissors') {
        alert('Don\'t you try funny things in my app!')
        location.reload()
    }

    document.getElementById('img_you').alt = you
    document.getElementById('img_you').src = you +'.svg'

    computer = computer_choose()

    text_win  = "You Win!"
    text_lose = "You Lose!"
    text_draw = "Draw!"

    switch(true) {
        case you === computer:
            result = text_draw
            break;
        case you === 'rock' && computer === 'scissors':
            result = text_win
            break;
        case you === 'paper' && computer === 'rock':
            result = text_win
            break;
        case you === 'scissors' && computer === 'paper':
            result = text_win
            break;
        default:
            result = text_lose
    }

    // Write outcome of the match to the result paragraph
    document.getElementById('p-result').innerHTML = result

    // Hide choose stuff and show computer choice and outcome
    document.getElementById('div-choose').className   = 'hidden'
    document.getElementById('div-you').className      = ''
    document.getElementById('div-computer').className = ''
    document.getElementById('div-result').className   = ''
    document.getElementById('button-again').className = ''

    console.log('You:     ',you,'\nComputer:',computer,'\n>',result)
}

// Hide outcome stuff and show choose stuff (i.e. reset to initial state) to play again
function reset() {
    document.getElementById('div-choose').className   = ''
    document.getElementById('div-you').className      = 'hidden'
    document.getElementById('div-computer').className = 'hidden'
    document.getElementById('div-result').className   = 'hidden'
    document.getElementById('button-again').className = 'hidden'
}
