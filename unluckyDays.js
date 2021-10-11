// function unluckyDays(year) {

//     let daysUnlucky = 0;

//     for (let i = 0; i < 12; i++) {
//         const date = new Date(year, i, 13)
//         if (date.getDay() === 5) {
//             daysUnlucky++
//         }
//     }
//     return daysUnlucky
// }



// console.log(unluckyDays(2015))

function moveVowel(input) {

    let noVowels = input.split(/a|e|o|i|u/g)
    let onlyVowels = input.split(/[b-df-hj-np-tv-z]/)

    for (let i = 0; i < input.split('').length; i++) {
        noVowels.push(onlyVowels[i])
    }
    
    return noVowels.join("")
}


console.log(moveVowel('day'))
console.log(moveVowel('peace'))
console.log(moveVowel('apple'))