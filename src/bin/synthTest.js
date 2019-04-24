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

const freq = hz.D4
const wave = waves[0]

const presets = {
    // name: [slope, rate]
    bounce: [500, 50]
}

const [slope, rate] = presets.bounce

var note = new NodeSynth.Oscillator(wave, (t) => {
    return freq + t*slope % rate
})

synth.source = note