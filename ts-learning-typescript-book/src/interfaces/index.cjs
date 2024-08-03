"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
// Ok
var ok = {
    author: "Rita Dove",
    pages: 80
};
var missing = {
    pages: 80
};
(0, utils_1.doNothing)(ok, missing);
var someArg = {
    text: "some text",
    count: 7
};
function canChange(arg) {
    arg.text += "!";
    arg.count += 1;
}
(0, utils_1.callFunc)([canChange, [someArg]]);
