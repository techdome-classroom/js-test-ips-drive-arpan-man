function longestSubstring(s)  {
    const n = s.length;
    const charIndexMap = new Map(); // Map to store the index of each character

    let maxLength = 0; // Initialize the maximum length
    let left = 0; // Left pointer of the sliding window

    for (let right = 0; right < n; right++) {
        const char = s[right];

        if (charIndexMap.has(char)) {
            // If the character is already in the map, update the left pointer
            left = Math.max(left, charIndexMap.get(char) + 1);
        }

        // Update the character's index in the map
        charIndexMap.set(char, right);

        // Update the maximum length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

module.exports = { longestSubstring };
