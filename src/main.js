import getMidi from "./bin/getMidi"
import { keyboard } from "./bin/getKeyboard"
import { Synth } from "./bin/synth"

let pack = 0
keyboard.on("line", (input) => pack = input)

export const Run = () => getMidi()