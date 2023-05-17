radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cuteBot.forward()
    } else if (receivedNumber == 2) {
        cuteBot.backforward()
    } else if (receivedNumber == 3) {
        cuteBot.turnleft()
    } else if (receivedNumber == 4) {
        cuteBot.turnright()
    } else if (receivedNumber == 8) {
        cuteBot.stopcar()
    }
})
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
radio.setGroup(3)
