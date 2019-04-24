import filterMidi from "./filterMidi"

export default function(){

    const midi = require("midi")
    const input = new midi.input()
    const ports = input.getPortCount()
    
    for(let i=0; i<=ports; i++){
        const name = input.getPortName(i)
        if (name.match(/TD-1*/)){
            console.log("Opening port ", i, ":", name)
            input.openPort(i)
            break
        }
    }

    const throttle = 0.101

    let last
    let count = 1
    
    input.on("message", (delta, msg) => {

        const [, pad, vel ] = msg

        if(pad === last){
            if (delta < throttle) return
            count += 1
        }
        else{
            last = pad
            count = 1
        }

        filterMidi(pad, vel, count)
    })

}
