// Return an output string that translates an input string s/$s by replacing each character 
// in s/$s with a number representing the number of times that character 
// occurs in s/$s and separating each number with the character(s) sep/$sep.

function freqSeq(str, sep) {
    let newStr = str
        .split('')
        .map((e) => str.split(e).length - 1)
        .join(sep);

    return newStr
}


