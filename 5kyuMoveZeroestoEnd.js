// Write an algorithm that takes an array and 
// moves all of the zeros to the end, 
// preserving the order of the other elements.
var moveZeros = function (arr) {
    let tmpArr = []
    arr.forEach(el => {
        if (el !== 0) {
            tmpArr.push(el)
        }
    })
      for (let i = 0; i < arr.join('').split(0).length - 1; i++) {
        tmpArr.push(0)
    }
    return tmpArr
}


