function cleanString(s) {
    let cleaned = []
    s.split('').forEach(char => {
        if (char === '#') {
            cleaned.pop()
            console.log(cleaned)
        } else {
            cleaned.push(char)
            console.log(cleaned)
        }
    })
    return cleaned.join('')
};

console.log(cleanString("abc#d##c"))