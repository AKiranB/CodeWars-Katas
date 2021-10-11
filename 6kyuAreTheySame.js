function comp(array1, array2) {

    if (!array1 || !array2) { return false }

    let array1Squared = array1.map(num => num * num).sort()
    let array2Sorted = array2.sort()
    let status = true

    array1Squared.forEach((num, index) => {

        if (num !== array2Sorted[index]) {
            status = false
        }
    })
    return status

}


a1 = []
b2 = null

a2 = [121, 144, 19, 161, 19, 144, 19, 11]
b3 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

a = [2, 8, 5, 4, 6, 10, 7, 5, 7, 8]
b = [4, 36, 25, 25, 16, 64, 64, 49, 49, 100]

console.log(comp(a1, b2))

console.log(comp(a2, b3))
console.log(comp(a, b))
