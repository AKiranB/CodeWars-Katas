// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    const strSplit = string.split('')
    const charCountObject = strSplit.reduce((acc, curr) => (acc[curr] = '', acc), {})
    for (const prop in charCountObject) {
        strSplit.forEach(el => {
            if (prop === el) {
                charCountObject[prop]++
            }
        })
    }
    return charCountObject
}



console.log(count('abacd'))



