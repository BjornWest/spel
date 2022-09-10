input.onButtonPressed(Button.A, function () {
    if (skada < 3) {
        if (pos > 1) {
            led.unplot(pos + 1, 4)
            pos += -1
            led.plot(pos - 1, 4)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (skada < 3) {
        if (pos < 3) {
            led.unplot(pos - 1, 4)
            pos += 1
            led.plot(pos + 1, 4)
        }
    }
})
let list = 0
let listPos = 0
let score = 0
let skada = 0
let pos = 0
let lista: number[] = []
pos = 2
led.plot(pos - 1, 4)
led.plot(pos, 4)
led.plot(pos + 1, 4)
let bomb: number[] = []
basic.forever(function () {
    control.waitMicros(1500000 - 15000 * score)
    for (let value of bomb) {
        value = value + 1
        bomb[listPos] = value
        if (value > 4) {
            bomb.pop()
        }
        listPos += 1
    }
    listPos = 0
    if (skada < 3) {
        for (let värde of lista) {
            led.unplot(värde, listPos)
            listPos += 1
        }
        led.plot(pos - 1, 4)
        led.plot(pos, 4)
        led.plot(pos + 1, 4)
        listPos = 0
        lista.unshift(randint(0, 4))
        if (randint(0, 4) == 0) {
            bomb.unshift(0)
        }
        for (let värde of lista) {
            led.plot(värde, listPos)
            listPos += 1
        }
        list = bomb[bomb.length - 1]
        if (lista.length > 5) {
            if (lista[4] < pos - 1 || lista[4] > pos + 1) {
                if (bomb[bomb.length - 1] > 3) {
                    score += 1
                } else {
                    skada += 1
                }
            } else {
                if (bomb[bomb.length - 1] > 3) {
                    skada += 1
                    bomb.pop()
                } else {
                    score += 1
                }
            }
            lista.pop()
        }
        listPos = 0
        if (skada == 3) {
            images.iconImage(IconNames.Sad).showImage(0)
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Breve))
            basic.showNumber(score)
        }
    }
})
basic.forever(function () {
    for (let value of bomb) {
        led.plot(lista[value], value)
    }
    control.waitMicros(100000)
    for (let value of bomb) {
        led.unplot(lista[value], value)
    }
    control.waitMicros(50000)
})
