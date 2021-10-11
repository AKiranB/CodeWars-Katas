var encryptThis = function (text) {
    if (text.length <= 1) {
        return text.charCodeAt(0).toString()
    }
    const returnStr = text.split(' ').map((char, index) => {
        let length = char.split('').length
        if (char.length === 1) return char.charCodeAt(0)
        if (char.length === 2) return char.charCodeAt(0) + char[length - 1]
        return `${char.charCodeAt(0)}${char[length - 1]}${char.split('').slice(2, length - 1).join('')}${char[1]}`
    })
    return returnStr.join(' ')
}
console.log(encryptThis("A wise old owl lived in an oak"))
console.log(encryptThis("Hello World"))