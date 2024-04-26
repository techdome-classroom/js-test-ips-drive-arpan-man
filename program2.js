function longestSubstring(s)  {
    const n = s.length;
    const charIndexMap = new Map(); 

    let maxLength = 0;
    let left = 0; 

    for (let right = 0; right < n; right++) {
        const char = s[right];
        
        if (charIndexMap.has(char)) {
          
            left = Math.max(left, charIndexMap.get(char) + 1);
        }

        charIndexMap.set(char, right);

      
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
module.exports = { longestSubstring };
