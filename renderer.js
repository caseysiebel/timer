// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const timeInputForm = document.getElementById('timeInputForm'),
    minInput = document.getElementById('minutes'),
    timeDisplayElm = document.getElementById('timeDisplay'),
    countDown = document.getElementById('timeDisplay'),
    minutesDisplayDownElm = document.getElementById('minutesDisplayDown'),
    secondsDisplayDownElm = document.getElementById('secondsDisplayDown'),
    minutesDisplayUpElm = document.getElementById('minutesDisplayUp'),
    secondsDisplayUpElm = document.getElementById('secondsDisplayUp'),
    doneElm = document.getElementById('done')

timeDisplayElm.style.display = 'none'
done.style.display = 'none'
timeInputForm.addEventListener('submit', handleClick)

let tick,
    flash

function handleClick(e) {
    e.preventDefault()
    let secondsLeft  = minInput.value * 60,
        secondsPast = 0
    const secondsInput = minInput.value * 60

    const startTime = Date.now()

    displayTime()

    // show hide necissary elements
    timeInputForm.style.display = 'none'
    timeDisplayElm.style.display = 'block'

    // set timer interval
    tick = setInterval(() => {
        //secondsLeft--
        //secondsPast++
        secondsPast = Math.floor( ( Date.now() - startTime ) / 1000 ) 
        secondsLeft = secondsInput - secondsPast

        displayTime()
    }, 1000 )
    function displayTime() {
        if (secondsLeft <= 0) {
            clearInterval(flash)
            clearInterval(tick)
            timeDisplayElm.style.display = 'none'
            doneElm.style.display = 'block'
            return
        }
        if (secondsLeft <= (5 * 60) && timeDisplayElm.style.color !== 'red'){
            timeDisplayElm.style.color = 'red'
            timeDisplayElm.style.fontWeight = 'bold'
            timeDisplayElm.style.fontSize = '12rem'
            let heading = timeDisplayElm.querySelector('.heading')
            
            countUp.style.display = 'none'
            flash = setInterval(() => {
                timeDisplayElm.style.display = 'none'
                setTimeout(() => {
                    if(secondsLeft !== 0) timeDisplayElm.style.display = 'block'
                }, 100)
            }, 1000)
        }
        // set count down time
        minutesDisplayDown = Math.floor(secondsLeft / 60)
        secondsDisplayDown = secondsLeft - (minutesDisplayDown * 60)

        // set count up time
        minutesDisplayUp = Math.floor(secondsPast / 60)
        secondsDisplayUp = secondsPast - (minutesDisplayUp * 60)

        if( secondsDisplayDown <= 9) {
            secondsDisplayDown = '0' + secondsDisplayDown
        }

        if( secondsDisplayUp <= 9) {
            secondsDisplayUp = '0' + secondsDisplayUp
        }
        minutesDisplayDownElm.innerHTML = minutesDisplayDown
        secondsDisplayDownElm.innerHTML = secondsDisplayDown

        minutesDisplayUpElm.innerHTML = minutesDisplayUp
        secondsDisplayUpElm.innerHTML = secondsDisplayUp
    }
}
