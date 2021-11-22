function isBalanced(s, caps) {
    let symbols = caps
    let total = 0
    for (let i = 0; i < s.split('').length; i++) {
        for (let j = 0; j < symbols.split('').length; j++) {
            if (s[i] === symbols[j]) {
                symbols.indexOf(symbols[j]) % 2 === 1 ? total-- : total++
            }
            if (total <= -1) {
                return false
            }
        }
    }
    return total != 0 ? false : true
}


console.log(isBalanced("(Sensei says] yes!)", "()[]"))
console.log(isBalanced("(Sensei says no!", "()"))
console.log(isBalanced("(Sensei [says) no!]", "()"))



let string = 'dog'



console.log(string.indexOf('d'))