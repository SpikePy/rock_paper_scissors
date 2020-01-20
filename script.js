function computer_choose() {
    random = Math.random() * 3

    switch (true) {
        case random < 1:
            computer = 'rock'
            break;
        case random < 2:
            computer = 'paper'
            break;
        case random < 3:
            computer = 'scissors'
            break;
    }

    document.getElementById('img_computer').alt = computer
    document.getElementById('img_computer').src = computer +'.svg'
    return computer
}

function match(you_choose) {
    document.getElementById('img_you').alt = you_choose
    document.getElementById('img_you').src = you_choose +'.svg'

    computer = computer_choose()
    you      = you_choose

    text_win  = "You Win!"
    text_lose = "You Lose!"
    text_draw = "Draw!"

    switch(true) {
        case you === computer:
            result = text_draw
            break;
        case you === 'rock' && computer === 'paper':
            result = text_lose
            break;
        case you === 'rock' && computer === 'scissors':
            result = text_win
            break;
        case you === 'paper' && computer === 'rock':
            result = text_win
            break;
        case you === 'paper' && computer === 'scissors':
            result = text_lose
            break;
        case you === 'scissors' && computer === 'rock':
            result = text_lose
            break;
        case you === 'scissors' && computer === 'paper':
            result = text_win
            break;
        default:
            result = 'error'
    }

    document.getElementById('p-result').innerHTML = result

    document.getElementById('div-choose').className   = 'hidden'
    document.getElementById('div-you').className      = ''
    document.getElementById('div-computer').className = ''
    document.getElementById('div-result').className   = ''
    document.getElementById('button-again').className = ''

    console.log('You:     ',you,'\nComputer:',computer,'\n>',result)
}

function reset() {
    document.getElementById('p-result').innerHTML = result

    document.getElementById('div-choose').className   = ''
    document.getElementById('div-you').className      = 'hidden'
    document.getElementById('div-computer').className = 'hidden'
    document.getElementById('div-result').className   = 'hidden'
    document.getElementById('button-again').className = 'hidden'
}
