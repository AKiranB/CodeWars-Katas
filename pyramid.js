

function pyramid(n) {

    var output = ''

    for (let i = 0; i < n; i++) {
        output += '0'
        output += `${'/n'}`
        for (let j = 0; j < i + 1; j++) {

            // console.log('#')
            output += `'j ='${j}`
            for (let k = j + 1; k >= j; k--) {

                // output += `${ [k] } `
                output += `'k ='${k} `
            }
        }
    }

    return output
}




let myStr = ''

for (let i = 0; i < 10; i++) {
    myStr += 'a'
}

console.log(myStr)


console.log(pyramid(3))