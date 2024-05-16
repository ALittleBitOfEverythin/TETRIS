input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    if (x > 0 && !(led.point(x - 1, y))) {
        x = x - 1
    }
    led.plot(x, y)
})
function checkFullRow () {
    rowFull = true
    for (let xx = 0; xx <= 5 - 1; xx++) {
        if (!(led.point(xx, 4))) {
            rowFull = false
        }
    }
    if (rowFull) {
        delay = delay * 4 / 5
        for (let xx2 = 0; xx2 <= 5 - 1; xx2++) {
            led.unplot(xx2, 4)
        }
        for (let yy = 3; yy > 0; yy--) {
            for (let xx3 = 0; xx3 < 5; xx3++) {
                if (led.point(xx3, yy)) {
                    led.unplot(xx3, yy)
                    led.plot(xx3, yy + 1)
                }
            }
        }
    }
}
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    if (x < 4 && !(led.point(x + 1, y))) {
        x = x + 1
    }
    led.plot(x, y)
})
function tryFall () {
    canFall = y < 4 && !(led.point(x, y + 1))
    if (canFall) {
        led.unplot(x, y)
        y = y + 1
        led.plot(x, y)
    } else {
        gameOver = y == 0
    }
    checkFullRow()
}
let rowFull = false
let y = 0
let gameOver = false
let canFall = false
let delay = 0
let x = 0
delay = 500
canFall = true
while (!(gameOver)) {
    y = 0
    x = Math.random()
canFall = true
    led.plot(x, y)
    while (canFall) {
        basic.pause(delay)
        tryFall()
    }
}
basic.showLeds(`
    . # . # .
    . . . . .
    . . . . .
    . # # # .
    # . . . #
    `)
