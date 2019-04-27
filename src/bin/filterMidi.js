import { Synth } from "./synth"

export default function (input, velocity, count){
    // Master pad list   
    // const pads = {
    //     38: "snare",
    //     40: "snare_rim",
    //     45: "tom1",
    //     57: "tom2",
    //     43: "tom3",
    //     4: "hh_general",
    //     44: "hh_pedal",
    //     42: "hh_closed",
    //     22: "hh_closed_crash",
    //     46: "hh_open",
    //     26: "hh_open_crash",
    //     49: "crash",
    //     55: "crash_crash",
    //     51: "ride",
    //     59: "ride_crash",
    //     36: "kick"
    // }

    // Dev pad list
    const pads = {
        38: ["snare", 1],
        43: ["tom3", 2],
        46: ["hh_open", 3],
        42: ["hh_closed", 3.5],
        51: ["ride", 4],
        57: ["tom2", 5],
        40: "snare_rim",
        45: "tom1",
        4: "hh_general",
        44: "hh_pedal",
        22: "hh_closed_crash",
        26: "hh_open_crash",
        49: "crash",
        55: "crash_crash",
        59: "ride_crash",
        36: "kick"
    }

    const pad = pads[input]
    const vel = velocity/127 // Max recorded hit

    Synth(pad, vel, count)

}
