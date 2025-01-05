
function longest_substrin_without_repeating_characters(s){
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;
    let length = s.length;
    
    for (let right = 0; right < length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
    
        charSet.add(s[right]);
        let currentSubstring = Array.from(charSet).join('');
        let currentLength = currentSubstring.length;
        maxLength = Math.max(maxLength, currentLength);
    }
    return maxLength;
}

let s = "abcabcbb";

let result = longest_substrin_without_repeating_characters(s);
console.log(result);

