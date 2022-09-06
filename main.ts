input.onButtonPressed(Button.A, function () {
    if (skada < 3) {
        if (pos > 0) {
            led.unplot(pos, 4)
            pos += -1
            led.plot(pos, 4)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (skada < 3) {
        if (pos < 4) {
            led.unplot(pos, 4)
            pos += 1
            led.plot(pos, 4)
        }
    }
})
let score = 0
let listPos = 0
let skada = 0
let pos = 0
let lista: number[] = []
pos = 2
led.plot(pos, 4)
loops.everyInterval(1000, function () {
    if (skada < 3) {
        for (let värde of lista) {
            listPos += 1
            led.unplot(värde, lista.length - listPos)
        }
        led.plot(pos, 4)
        listPos = 0
        lista.push(randint(0, 4))
        for (let värde of lista) {
            listPos += 1
            led.plot(värde, lista.length - listPos)
        }
        if (lista.length > 5) {
            if (pos != lista[1]) {
                skada += 1
            } else {
                score += 1
            }
            lista.shift()
        }
        listPos = 0
        if (skada == 3) {
            images.iconImage(IconNames.Sad).showImage(0)
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(311, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(277, music.beat(BeatFraction.Breve))
            basic.showNumber(score)
        }
    }
})
basic.forever(function () {
	
})
