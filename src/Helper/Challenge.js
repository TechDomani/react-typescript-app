"use strict";
exports.__esModule = true;
var validBraces = function (braces) {
    var stack = [];
    var start = ['{', '[', '('];
    var end = ['}', ']', ')'];
    var values = braces.split('');
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        if (start.indexOf(value) != -1) {
            stack.push(values[i]);
        }
        else {
            if (stack.length === 0) {
                return false;
            }
            var pos = end.indexOf(value);
            if (stack[stack.length - 1] === start[pos]) {
                stack.pop();
            }
            else {
                return false;
            }
            continue;
        }
    }
    return stack.length === 0;
};
//console.log(validBraces('(())'));
//console.log(validBraces(')()('));
console.log(validBraces('[(])'));
//console.log(validBraces("()")); 
exports["default"] = validBraces;
