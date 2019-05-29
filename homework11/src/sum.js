"use strict";
exports.__esModule = true;

function sum(numberOne) {
    var count = numberOne;
    return function by(numberNext) {
        if (numberNext === undefined) {
            return count;
        } else {
            count += numberNext;
            return by;
        }
    };
}
exports["default"] = sum;;
