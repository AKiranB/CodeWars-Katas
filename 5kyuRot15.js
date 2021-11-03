const rot13 = (message) => {
    let resArr = []
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ"
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    message.split('').forEach(char => {
        if (!alphabet.includes(char)) { return resArr.push(char) }
        resArr.push(alphabet[cipher.indexOf(char)])
    })
    return resArr.join("")
}

console.log(rot13('Pbqrjnef'))