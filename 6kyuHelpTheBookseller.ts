
class G964 {
    public static stockList = (listOfArt: string[], listOfCat: string[]) => {
        interface stockObject {
            [key: string]: number;
        };
        const entries = listOfCat.map((categoryCode: string) => {
            return [categoryCode, 0]
        });
        const stockObject = (<any>Object).fromEntries(entries);
        for (const book in stockObject) {
            listOfArt.forEach(article => {
                if (book === article[0]) {
                    stockObject[book] += parseInt(article.slice(article.length - 3))
                };
            });
        };
        return stockObject;
    };
};
//object.fromEntries can't be used with codewars, needs to be done manually

//js below
// const stockList = (listOfArt, listOfCat) => {

//     const entries = listOfCat.map((categoryCode) => {
//         return [categoryCode, 0]
//     });
//     const stockObject = Object.fromEntries(entries);
//     for (const book in stockObject) {
//         listOfArt.forEach(article => {
//             if (book === article[0]) {
//                 stockObject[book] += parseInt(article.slice(article.length - 3))
//             };
//         });
//     };
//     return stockObject;
// };






let articles = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
let categories = ["A", "B", "C", "D"];
// res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)";

console.log(G964.stockList(articles, categories));