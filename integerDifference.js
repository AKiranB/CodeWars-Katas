const intDiff = (arr, n) => {

    let intDiffCounter = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((Math.abs(arr[j] - arr[i])) === n) {
                intDiffCounter++
                // console.log(arr[j] - arr[i])
            }

        }
    }

    return intDiffCounter
}



const myArr = [1, 1, 5, 6, 9, 16, 27]
const myArr2 = [1, 1, 3, 3]



console.log(intDiff(myArr, 4))
console.log(intDiff(myArr2, 2))
// console.log(intDiff(myArr, 4))




// for (let i = 0; i < myArr.length; i++) {
//     for (let j = 0; j < myArr.length; j++) {
//         console.log(myArr[i])
//         console.log(myArr[j])
//     }
// }

