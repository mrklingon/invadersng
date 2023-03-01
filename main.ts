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
    wait += -1
    for (let index = 0; index <= 4; index++) {
        if (6 < randint(0, 10)) {
            led.plotBrightness(index, 0, randint(50, 190))
        } else {
            led.unplot(index, 0)
        }
    }
    if (0 >= wait) {
        wait = randint(10, 20)
        for (let index = 0; index <= 4; index++) {
            led.plotBrightness(index, 0, 250)
        }
        speed += 0.33
        music.playTone(131, music.beat(BeatFraction.Half))
    }
}
function checkEnemy () {
    ECount = 0
    for (let ex = 0; ex <= 4; ex++) {
        if (led.pointBrightness(ex, 4) == 250) {
            ECount += 1
        }
    }
    return ECount
}
function doBlast () {
    for (let torp = 0; torp <= 3; torp++) {
        if (led.pointBrightness(ship, 3 - torp) == 250) {
            skore += randint(10, 30)
        }
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
input.onGesture(Gesture.Shake, function () {
    music.playTone(784, music.beat(BeatFraction.Quarter))
    if (droid) {
        droid = false
    } else {
        droid = true
    }
})
let ECount = 0
let yyy = 0
let yy = 0
let wait = 0
let ship = 0
let droid = false
basic.showString("Invaders 2.0")
droid = false
let speed = 0.5
ship = 2
game.setLife(10)
let skore = 0
game.setScore(0)
wait = 20
basic.forever(function () {
    doStars()
    shiftStars()
    if (checkEnemy() > 0) {
        game.addScore(skore)
        skore = 0
        game.removeLife(checkEnemy())
    }
    led.plot(ship, 4)
    basic.pause(300 / speed)
})
basic.forever(function () {
    if (droid && !(game.isGameOver())) {
        for (let shipx = 0; shipx <= 4; shipx++) {
            ship = shipx
            led.plot(ship, 4)
            doBlast()
            basic.pause(randint(100, 300))
        }
    }
})
