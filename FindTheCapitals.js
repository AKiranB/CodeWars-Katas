function capital(capitals) {
    const myArr = []
    capitals.forEach(obj => {
        myArr.push(`The capital of ${obj.state || obj.country} is ${obj.capital}`)
    })
    return myArr
}


console.log(capital([{ 'country': 'Spain', 'capital': 'Madrid' }]))
console.log(capital([{ "state": 'Maine', capital: 'Augusta' }]))
console.log(capital([{ "state": 'Maine', capital: 'Augusta' }, { country: 'Spain', "capital": "Madrid" }]))
// const myObj = { 'country': 'Spain', 'capital': 'Madrid' }

// console.log(myObj.country)