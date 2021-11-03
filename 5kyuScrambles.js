function scramble(str1, str2) {
    resArr = []
    str2.split('').map(el => {
        if ((str1.includes(el)) && (str1.split(el).length - 1 >= str2.split(el).length - 1)) {
            resArr.push(el)
        }
    })
    return resArr.length === str2.length ? true : false
}

console.log(scramble('asfawraafasfasgagdadkgkakdgadglakeglakgllkgaklgekkgakkgkadkglekgaldkasgllaskglasskglakwg', 'world'))










