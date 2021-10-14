function boredom(staff) {
    let departmentObj = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        'pissing about': 25
    }
    let total = 0;
    let departmentVals = Object.entries(departmentObj)
    for (const property in staff) {
        for (let i = 0; i < departmentVals.length; i++) {
            if (staff[property] === departmentVals[i][0]) {

                total += departmentVals[i][1]

            }
        }
    }

    if (total <= 80) {
        return 'kill me now'
    } else if (total < 100 && total > 80) {
        return 'i can handle this'
    } else {
        return 'party time!!'
    }

}










