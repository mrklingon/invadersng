input.onButtonPressed(Button.A, function () {
    ship += -1
    if (ship < 0) {
        ship = 0
    }
})
function shiftStars () {
    for (let index2 = 0; index2 <= 3; index2++) {
        yy = 3 - index2
        yyy = 4 - index2
        for (let index3 = 0; index3 <= 4; index3++) {
            led.plotBrightness(index3, yyy, led.pointBrightness(index3, yy))
        }
    }
}
function doStars () {
    for (let index = 0; index <= 4; index++) {
        if (6 < randint(0, 10)) {
            led.plotBrightness(index, 0, randint(50, 190))
        } else {
            led.unplot(index, 0)
        }
    }
}
function doBlast () {
    for (let torp = 0; torp <= 3; torp++) {
        led.plotBrightness(ship, 3 - torp, 255)
        basic.pause(50)
    }
    for (let torp = 0; torp <= 3; torp++) {
        led.plotBrightness(ship, 3 - torp, 0)
    }
}
input.onButtonPressed(Button.AB, function () {
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    doBlast()
})
input.onButtonPressed(Button.B, function () {
    ship += 1
    if (ship > 4) {
        ship = 4
    }
})
let yyy = 0
let yy = 0
let ship = 0
let speed = 1
ship = 2
basic.forever(function () {
    doStars()
    shiftStars()
    led.plot(ship, 4)
    basic.pause(250 / speed)
})
