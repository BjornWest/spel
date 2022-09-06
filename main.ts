input.onButtonPressed(Button.A, function () {
    if (pos > 0) {
        led.unplot(pos, 4)
        pos += -1
        led.plot(pos, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (pos < 4) {
        led.unplot(pos, 4)
        pos += 1
        led.plot(pos, 4)
    }
})
let listPos = 0
let pos = 0
let lista: number[] = []
pos = 2
loops.everyInterval(1000, function () {
    for (let värde of lista) {
        listPos += 1
        led.unplot(värde, lista.length - listPos)
    }
    listPos = 0
    lista.push(randint(0, 4))
    for (let värde of lista) {
        listPos += 1
        led.plot(värde, lista.length - listPos)
    }
    listPos = 0
})
basic.forever(function () {
	
})
