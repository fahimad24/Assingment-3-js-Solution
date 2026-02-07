function gonoVote(array) {
    if (!Array.isArray(array)) {
        return 'Invalid';
    }
    let haVoted = 0;
    let naVoted = 0;
    for (let arr of array ) {
        if (arr === 'ha') {
            haVoted++;
        } else if (arr === 'na') {
            naVoted++;
        }
    }
    return haVoted > naVoted ? true : haVoted === naVoted ? "equal" : false;
}