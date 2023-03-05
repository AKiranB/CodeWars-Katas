
    export default function bs_list(haystack: number[], needle: number): boolean {
        //instantiate and assign low and high variables
        let low = 0
        let high = haystack.length
        //eg,
        //The length is 50
        do{
            //mid gets calculated each run
            let mid = Math.floor(low + (high - low) / 2)
            //mid is calculated as 0 + (50 - 0) / 2 = 25
            //v is our current checked value
            let v = haystack[mid]
            if(v === needle){
                //first case, we found the needle
               return true
            }else if( v > needle){
                //second case, we need to go lower
                //now our high = 25
                //our low is still 0
                //and we recalculate mid by 0 + (25 - 0) / 2 = 12
                //so 0 12 25
                high = mid 
            }else{
                //third case, we need to go higher
                //we add 1 because we already checked the value at mid
                //in this case our low = 26
                //our high is still 50
                //we recalculate mid by 26 + (50 - 26) / 2 = 38
                low = mid + 1
            }
        }while(low < high)
        return false
    }
    
