// For a given string s find the character c (or C) with longest consecutive repetition and return:
// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
// For empty string return:
// ["", 0]
// In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.
// Happy coding! :)

function longestRepetition(s) {
    let res = ['', 0]
    for (let i = 0; i < s.length; 0) {
        let begin = i++
        while (i < s.length && s[i] === s[begin])
            i++
        if (i - begin > res[1]) {
            res = [s[begin], i - begin]
        }
    }
    return res
}