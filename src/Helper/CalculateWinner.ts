const calculateWinner = (moves: (string | null)[]): boolean => {
    const winningMatrix = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]] ;
    for (let i=0; i<winningMatrix.length; i++){
        const [a, b, c] = winningMatrix[i];
        if (moves[a] && moves[a] === moves[b] && moves[b] === moves[c]){
            return true;
        }
    }
    return false;
}

//console.log(calculateWinner(['X', '0', 'X', '', '', '', '', '', '']));

export default calculateWinner;
