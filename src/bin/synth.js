var NodeSynth = require("nodesynth")
 
require("nodesynth/notes")
 
var ns = new NodeSynth.Synth()
ns.play()

export const Synth = (pad, vel, count=1) => {
    
    const hz = [
        ["C4", 261.6],
        ["D4", 293.7],
        ["E4", 329.6],
        ["F4", 349.2],
        ["A4", 440],
        ["B4", 493.9]
    ]

    const freq = hz[pad][1] * count

    var play = new NodeSynth.Oscillator("sin", freq)

    ns.source = play

}
