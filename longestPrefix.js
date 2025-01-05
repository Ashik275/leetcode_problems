function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    let i = 0;
    let prefix = strs[0]; 
    while (i < strs.length) {
        console.log("Checking string: " + strs[i] + " with current prefix: " + prefix);
        
        while (strs[i].indexOf(prefix) !== 0) {
            console.log("Prefix '" + prefix + "' doesn't match. Shortening prefix...");
            prefix = prefix.substring(0, prefix.length - 1); 
            console.log("New prefix: " + prefix);
            if (prefix === "") {
                console.log("No common prefix found!");
                return ""; 
            }
        }

        i++;
    }

    console.log("Longest common prefix: " + prefix);
    return prefix;
}

// Example usage:
let strs = ["fleower", "fleow", "fleight"];
let result = longestCommonPrefix(strs);
console.log("Result:", result);
