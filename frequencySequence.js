// function freqSeq(str, sep) {

//     let newStr = str
//         .split('')
//         .map((e) => str.split(e).length - 1)
//         .join(sep);




//     return newStr
// }

// function freqSeq(str, sep) {

//     let chars = {}

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] in chars) {
//             chars[str[i]] = chars[str[i]]
//             console.log(chars)
//         } else {
//             // console.log([str[i]])
//             chars[str[i]] = 1
//         }
//     }
//     // return chars
// }

// console.log(freqSeq("hello world", "-"))

// const freqSeq = (str, sep) =>
//   str
//     .split('')
//     .map((e) => str.split(e).length - 1)
//     .join(sep);

const myStr = 'Hello world'

let newStr = myStr
    .split('')
    .map((e) => myStr.split(e).length - 1)

console.log(newStr)
