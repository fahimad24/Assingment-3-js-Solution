function finalScore(omr) {
    const totalQts = omr.right + omr.wrong + omr?.skip;
    const correct = omr.right - (omr.wrong * 0.5);

    if (totalQts === 100 && Object.prototype.toString.call(omr) === '[object Object]') {
        return Math.round(correct);
    }
    return 'Invalid';
   
}