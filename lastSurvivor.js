function lastSurvivor(letters, coords) {

    const lettersArr = letters.split('')

    for (let j = 0; j < coords.length; j++) {
        lettersArr.splice(coords[j], 1)
    }

    return lettersArr.join('')

}


console.log(lastSurvivor('kbc', [0, 1]))