var NodeSynth = require("nodesynth")

require("nodesynth/notes")

var synth = new NodeSynth.Synth()

synth.play()

const waves = [
    "sine",
    "triangle",
    "cosine",
    "square",
    "sawtooth"
]

const hz = {
    C4: 261.6,
    D4: 293.7,
    E4: 329.6,
    F4: 349.2,
    A4: 440,
    B4: 493.9
}

const presets = {
    // name: [slope, rate]
    none: [0, 1],
    bounce: [500, 50]
}

export const Synth = ([, pad], vel, count = 1) => {

    let freq, slope, rate

    switch (pad) {

        case 1:
            freq = hz.A4;
            [slope, rate] = presets.bounce
            break
        
        case 2:
            freq = hz.B4;
            [slope, rate] = presets.none
            break

        case 3:
            freq = hz.C4;
            [slope, rate] = presets.none
            break

        case 4:
            freq = hz.D4;
            [slope, rate] = presets.none
            break

        case 5:
            freq = hz.E4;
            [slope, rate] = presets.none
            break

        case "hh_general":
        case "hh_pedal":
        case "hh_open":
        case "hh_open_crash":
        case "hh_closed":
        case "hh_closed_crash":
        case "crash":
        case "crash_crash":
        case "ride":
        case "ride_crash":
        case "kick":

        default:
            return
            break

    }

    const wave = waves[0]

    var note = new NodeSynth.Oscillator(wave, (t) => {
        return freq + t * slope % rate
    })

    synth.source = note

}

