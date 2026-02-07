function analyzeText(str) {
    if (typeof str !== 'string' || str.trim() === '') {
        return 'Invalid';
    }
    const words = str.trim().split(' ');
    const wordLengths = str.replace(/ /g, '').length;
    let longestWord = words[0];
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    return {longwords: longestWord, token: wordLengths};
}


