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

export const Synth = (pad, vel, count=1) => {

    const norm = vel < 0.5
        ? 0.5
        : vel < 0.6
            ? 1
            : 2
            
    const freq = hz[pad][1] * norm
    const wave = waves[0]

    var play = new NodeSynth.Oscillator(wave, freq)

    ns.source = play

}
