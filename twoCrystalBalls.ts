export default function two_crystal_balls(breaks: boolean[]): number {
    //EG breaks array [0, 0, 0, 0, 0, 0, 0, 1,1 ,1 ,1 ,1]
    //define the jump amount, or the smallest step we can take
    //this is the squre root of the length of the array
    const jmpAmount = Math.floor(Math.sqrt(breaks.length))
    //Would be 3 in the example above
    //Set our index to the jump amount
    let i = jmpAmount;
    //Loop through the array, each time breaks[i] is falsy, add the jump amount to i
    //eg 3, 6 ,9
    for(;i < breaks.length; i += jmpAmount){
    //once we hit a truthy value, break
        if(breaks[i]){
            break
        }
    }
    //With the example above, we'd be at 9
    //Now we walk back to the last falsy value
    i -= jmpAmount
    //i is now 6

    //We need to walk up to the closest truthy value
    //This shoould only run while j is less than 3, and i is less than the length of the array
    for(let j = 0; j < jmpAmount && i < breaks.length; j++, i++){
    //EG i is now 7
        if(breaks[i]){
            return i
        }
    }
    return -1
} 
