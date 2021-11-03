//count letters in given string and return an object with {letter:count}
function letterCount(s) {
    let resObj = {}
    s.split('').forEach(letter => {
        resObj[letter] = s.split(letter).length - 1
    })
    return resObj
}