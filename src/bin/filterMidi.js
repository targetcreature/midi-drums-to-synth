import { Main } from "../main"

export default function (num, velocity, count){
    
    const pads = {
        38: ["snare", 0],
        40: ["snare_rim", 1],
        45: ["tom1", 2],
        57: ["tom2", 3],
        43: ["tom3", 4],
        4: ["hh_general", 5],
        44: ["hh_pedal", 6],
        42: ["hh_closed", 7],
        22: ["hh_closed_crash", 8],
        46: ["hh_open", 9],
        26: ["hh_open_crash", 10],
        49: ["crash", 11],
        55: ["crash_crash", 12],
        51: ["ride", 13],
        59: ["ride_crash", 14],
        36: ["kick", 15]
    }

    const pad = pads[num]
    const vel = velocity/127 // Max recorded hit

    Main(pad, vel, count)

}
