function getOrder(input) {
    const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke']
    const resultArr = []
    for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < input.split(menu[i].toLowerCase()).length - 1; j++) {
            resultArr.push(menu[i])
        }
    }
    return resultArr.join(' ');
}


const string = "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"


console.log(getOrder(string))

string.includes('milkshake')