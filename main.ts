input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(MAXTEMP)
})
let MAXTEMP = 0
MAXTEMP = 1
loops.everyInterval(6000, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > MAXTEMP) {
        MAXTEMP = input.temperature()
    }
})
