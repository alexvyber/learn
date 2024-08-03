"use strict";
exports.__esModule = true;
exports.callFunc = exports.doNothing = void 0;
function doNothing() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args;
}
exports.doNothing = doNothing;
function callFunc(tuple) {
    var func = tuple[0];
    var argsArr = tuple[1];
    argsArr.map(function (args) { return func.apply(void 0, args); });
}
exports.callFunc = callFunc;
