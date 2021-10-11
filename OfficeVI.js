// function sabb(s, val, happiness) {
//     let word = 'sabticl'
//     let points = 0
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < word.length; j++) {
//             if (s[i] === word[j]) {
//                 points++
//             }
//         }
//     }
//     if (points + val + happiness > 22) {
//         return 'Sabbatical! Boom!'
//     } else {
//         return 'Back to your desk, boy.'
//     }
// }

function sabb(s, val, happiness) {
    let points = 0
    for (char of s) {
        if ('sabbatical'.includes(char)) {
            points++
        }
    }
    //     if (points + val + happiness > 22) {
    //         return 'Sabbatical! Boom!'
    //     } else {
    //         return 'Back to your desk, boy.'
    //     }

    ponts + val + happ
}

console.log(sabb('Can I have a sabbatical?', 5, 5))
console.log(sabb('Why are you shouting?', 7, 2))

