function capital(capitals) {
    const myArr = []
    capitals.forEach(obj => {
        myArr.push(`The capital of ${obj.state || obj.country} is ${obj.capital}`)
    })
    return myArr
}