
function generatePairs(m, n) {
    const resultArr = [];
    // if (n === 0) return [[0, 0]]

    for (let i = m; i <= n; i++) {
        for (let j = i; j <= n; j++) {

            resultArr.push([i, j])

        }
    }
    return resultArr
}

//Test.assertSimilar(generatePairs(2, 4), [ [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4] ]);

console.log(generatePairs(2, 4))
console.log(generatePairs(4, 4))
console.log(generatePairs(-5, -2))