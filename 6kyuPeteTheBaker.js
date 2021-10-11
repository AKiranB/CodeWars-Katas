function cakes(recipe, available) {
    const resultArr = []
    const recipeArr = Object.keys(recipe)
    const availableArr = Object.keys(available)
    for (let ingredient of recipeArr) {
        if (available[ingredient]) {
            resultArr.push(Math.floor(available[ingredient] / recipe[ingredient]))
        }
    }
    if (resultArr.length === recipeArr.length) {
        return Math.min(...resultArr)
    } else {
        return 0
    }
}

const recipe = { flour: 500, sugar: 200, eggs: 1 };
const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available))

// function cakes(recipe, available) {
//     const resultArr = []
//     const recipeArr = Object.keys(recipe)
//     const availableArr = Object.keys(available)

//     if (availableArr.length === 0) {
//         return 0
//     }
//     for (let i = 0; i < recipeArr.length; i++) {
//         for (let j = 0; j < availableArr.length; j++) {
//             if (availableArr.includes(recipeArr[i]) === false) {
//                 return 0
//             }
//         }
//     }
//     for (let ingredient of recipeArr) {
//         if (available[ingredient]) {
//             resultArr.push(Math.floor(available[ingredient] / recipe[ingredient]))
//         }
//     }
//     // for (const rIngredient in recipe) {
//     //     for (const aIngredient in available) {
//     //         if (rIngredient === aIngredient) {
//     //             resultArr.push(Math.floor(available[aIngredient] / recipe[rIngredient]))
//     //         }
//     //     }
//     // }
//     return Math.min(...resultArr)
// }










