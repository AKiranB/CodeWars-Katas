const rot = (string) => {
    let resArr = []
    const alphabeticSetA = 'abcdefghijklm'.split("")
    const alphabeticSetB = 'nopqrstuvwxyz'.split('')

    string.split('').forEach(char => {

        if (char.toLowerCase()) {
            if (alphabeticSetA.includes(char)) {
                resArr.push(alphabeticSetB[alphabeticSetA.indexOf(char)])
            } else if (alphabeticSetB.includes(char)) {
                resArr.push(alphabeticSetA[alphabeticSetB.indexOf(char)])
            }
        } else {
            if (alphabeticSetA.includes(char)) {
                resArr.push(alphabeticSetB[alphabeticSetA.indexOf(char)].toUpperCase())
            } else if (alphabeticSetB.includes(char)) {
                resArr.push(alphabeticSetA[alphabeticSetB.indexOf(char)].toUpperCase())
            }
        }

        //i think we can write whtehr the symbol is part of a-z in the above code, break down all seperate conditions
    })

    return resArr.join("")
}

