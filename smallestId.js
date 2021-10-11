
//find the smallest unused number in an array of numbers
// ie if array is 1 ,3 ,4 ,5 then number === 2
//use indexOf while looping through the arr, when indexOf(i) aka 1, 2 ,3 ,4 5
//up to the length of the array + 1 === -1 than that's the number
// loop has to run the full length of the array +1 because number could be at the end
//indexOf matches the number i and if it doesn't exist in the array, return i



function nextId(ids) {

    for (let i = 0; i < ids.length + 1; i++) {

        if (ids.indexOf(i) === -1) {

            return i

        }
    }
}