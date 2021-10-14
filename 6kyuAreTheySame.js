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

