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
let run = 0
let pos = 0
let lista: number[] = []
pos = 2
loops.everyInterval(1000, function () {
    if (run == 0) {
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
        if (lista.length == 5) {
            let list: number[] = []
            list.shift()
        }
        listPos = 0
        if (pos != lista[0]) {
            run += 1
            images.iconImage(IconNames.Heart).showImage(0)
        }
    }
})
basic.forever(function () {
	
})
