// function scramble(str1, str2) {
//     let resArr = []
//     let arr = str1.split('').join('')
//     for (let i = 0; i < arr.length; i++) {
//         if (str1.includes(arr[i]) && (str1.split(str2[i]).length - 1 >= str2.split(str2[i]).length - 1)) {
//             resArr.push(str2[i])
//             if (resArr.length === str2.length) {
//                 return true
//             }
//         }
//     }
//     return false
// }





function scramble(str1, str2) {
    console.timeLog()
    resArr = []

    str2.split('').map(el => {
        if ((str1.includes(el)) && (str1.split(el).length - 1 >= str2.split(el).length - 1)) {
            resArr.push(el)
        }
    })
    return resArr.length === str2.length ? true : false

}

var iterations = 5;
console.time('answer time');
for (var i = 0; i < iterations; i++) {
    scramble('asfawraafasfasgagdadkgkakdgadglakeglakgllkgaklgekkgakkgkadkglekgaldkasgllaskglaworldskglakwg', 'world')
};

console.timeEnd('answer time')







