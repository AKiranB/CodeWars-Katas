// For a given nonempty string s 
// find a minimum substring t and 
// the maximum number k, such that 
// the entire string s is equal to t 
// repeated k times. The input string consists of lowercase 
// latin letters. 
// Your function should return a tuple (in Python) (t, k) 
// or an array (in Ruby and JavaScript) [t, k]

function f(s) {
    let subString = s[0];
    for (let i = 1; i < s.length; i++) {
        let re = new RegExp(subString)
        if (!re.test(s.split('').slice(i, i + subString.length).join(''))) {
            subString += s[i]
        } else {
            break
        }
    }
    return [subString, s.split(subString).length - 1]
}