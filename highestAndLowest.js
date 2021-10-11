function highAndLow(numbers) {
    let splitNumbers = numbers.split(" ")
        .map(function (n) {
            return parseInt(n)
        })
    let newStr = `'${Math.max(...splitNumbers)} ${Math.min(...splitNumbers)}'`
    return newStr
}


console.log(highAndLow("1 2 3 4 5"))