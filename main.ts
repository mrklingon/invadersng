let yy = 0
function shiftStars () {
    for (let index2 = 0; index2 <= 3; index2++) {
        yy = index2 + 1
        for (let index3 = 0; index3 <= 4; index3++) {
            led.plotBrightness(index3, yy, led.pointBrightness(index3, index2))
        }
    }
}
function doStars () {
    for (let index = 0; index <= 4; index++) {
        if (4 < randint(0, 10)) {
            led.plotBrightness(index, 0, randint(50, 190))
        } else {
            led.unplot(index, 0)
        }
    }
}
basic.forever(function () {
    doStars()
    shiftStars()
    basic.pause(100)
})
