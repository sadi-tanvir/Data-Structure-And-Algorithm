
        // let s = "pwwkew"

        // var lengthOfLongestSubstring = function (s) {
        //     let restChar = {};
        //     for (let i = 0; i < s.length; i++) {
        //        if(!restChar[s[i]]) {
        //             restChar[s[i]] = 1;
        //        }
        //     }

        //     return Object.keys(restChar).join("").length;
        // };

        // console.warn(lengthOfLongestSubstring(s));

/*         function findLongestSubstring(str) {
            let maxLength = 0;
            let start = 0;
            let seen = new Map();

            for (let i = 0; i < str.length; i++) {
                if (seen.has(str[i]) && seen.get(str[i]) >= start) {
                    // If current character is already seen and its index is greater than or equal to start
                    // update start to be one position after the previous occurrence of the character
                    start = seen.get(str[i]) + 1;
                }
                seen.set(str[i], i); // Store the index of the current character

                // Update maxLength by taking the maximum value between maxLength and the difference between
                // the current index and start + 1
                maxLength = Math.max(maxLength, i - start + 1);
            }

            return maxLength;
        }

        // Example usage
        let str = "pwwkew";
        let longestLength = findLongestSubstring(str);
        console.log("The length of the longest substring without repeating characters: " + longestLength); */