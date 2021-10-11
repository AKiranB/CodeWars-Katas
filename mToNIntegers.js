function generateIntegers(m, n) {

    let resArr = []
    for (let i = m; i < n + 1; i++) {

        let currNum = i
        resArr.push(currNum)

    }

    return resArr
}

console.log(generateIntegers(2, 5))