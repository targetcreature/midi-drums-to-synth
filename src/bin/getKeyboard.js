import readline from "readline"

export const keyboard = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
