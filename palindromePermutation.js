export class Solution {
    /**
     * @param s: the given string
     * @return: if a permutation of the string could form a palindrome
     */
    canPermutePalindrome(s) {
        // write your code here
        const hashMap = {};
        for (let i = 0; i < s.length; i++) {
            hashMap[s[i]] = hashMap[s[i]] === undefined ? 1 : hashMap[s[i]] + 1;
        }
        let hasOdd = false;
        for (let c of Object.keys(hashMap)) {
            if (hashMap[c] % 2 !== 0) {
                if (hasOdd) {
                    return false;
                }
                else {
                    hasOdd = true;
                }
            }
        }
        return true;
    }
}