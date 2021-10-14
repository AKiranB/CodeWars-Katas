
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