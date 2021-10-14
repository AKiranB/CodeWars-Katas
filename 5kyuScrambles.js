function scramble(str1, str2) {
    console.timeLog()
    resArr = []
    str2.split('').map(el => {
        if ((str1.includes(el)) && (str1.split(el).length - 1 >= str2.split(el).length - 1)) {
            resArr.push(el)
        }
    })
    return resArr.length === str2.length ? true : false

}
var iterations = 5;
console.time('answer time');
for (var i = 0; i < iterations; i++) {
    scramble('asfawraafasfasgagdadkgkakdgadglakeglakgllkgaklgekkgakkgkadkglekgaldkasgllaskglaworldskglakwg', 'world')
};

console.timeEnd('answer time')







