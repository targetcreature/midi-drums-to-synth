import getMidi from "./bin/getMidi"
import { keyboard } from "./bin/getKeyboard"
import { Synth } from "./bin/synth"

let pack = 0
keyboard.on("line", (input) => pack = input)

export const Run = () => getMidi()

export const Main = ([pad, index], vel, count) => {

    Synth(index, vel, count)

    switch (pad) {

        case "snare":
        case "snare_rim":
        case "tom1":
        case "tom2":
        case "tom3":
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
            console.log(pad, pack)
            break

    }

}