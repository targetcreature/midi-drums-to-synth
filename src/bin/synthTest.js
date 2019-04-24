var NodeSynth = require("nodesynth")

require("nodesynth/notes")

var ns = new NodeSynth.Synth()
ns.play()

const waves = [
    "sine",
    "cosine",
    "square",
    "triangle",
    "sawtooth"
]

const hz = [
    ["C4", 261.6],
    ["D4", 293.7],
    ["E4", 329.6],
    ["F4", 349.2],
    ["A4", 440],
    ["B4", 493.9]
]

const freq = hz[0][1]
const wave = waves[2]

const presets = {
    // name: [slope, rate]
    bounce: [500, 50]
}

const mod = presets.bounce

var play = new NodeSynth.Oscillator(wave, (t) => {
    const [slope, rate] = mod    
    return freq + t*slope % rate
})

ns.source = play