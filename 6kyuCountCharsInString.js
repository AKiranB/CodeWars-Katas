// function count(string) {
//     const strSplit = string.split('')
//     const obj = strSplit.reduce((acc, curr) => (acc[curr] = '', acc), {})
//     for (const prop in obj) {
//         strSplit.forEach(el => {

//             if (prop === el) {

//                 obj[prop]++
//             }
//         })
//     }
//     return obj
// }


// function count(string) {
//     let obj = {};
//     for (el of [...string]) {
//         console.log(el)
    
//     }
//     return obj
// }

console.log(count('abacd'))



