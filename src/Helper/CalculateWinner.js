"use strict";
exports.__esModule = true;
var calculateWinner = function (moves) {
    var winningMatrix = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i < winningMatrix.length; i++) {
        var _a = winningMatrix[i], a = _a[0], b = _a[1], c = _a[2];
        if (moves[a] && moves[a] === moves[b] && moves[b] === moves[c]) {
            return true;
        }
    }
    return false;
};
//console.log(calculateWinner(['X', '0', 'X', '', '', '', '', '', '']));
exports["default"] = calculateWinner;
