var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function doNothing() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args;
}
function callFunc(tuple) {
    var func = tuple[0];
    var argsArr = tuple[1];
    argsArr.map(function (args) { return func(args); });
}
// Ok
var ok = {
    author: "Rita Dove",
    pages: 80
};
var missing = {
    pages: 80
};
doNothing(ok, missing);
var someArg = {
    text: "some text",
    count: 7
};
function canChange(arg) {
    arg.text += "!";
    arg.count += 1;
    console.log(arg);
}
function canChangeAndReturn(arg) {
    arg.text += "!";
    arg.count += 1;
    return arg;
}
function cannotChange(arg) {
    // arg.text += "!"
    // arg.count += 1
    console.log(arg);
}
// canChange(someArg)
callFunc([canChange, [__assign({}, someArg), canChangeAndReturn(__assign({}, someArg))]]);
callFunc([canChange, [__assign({}, someArg), canChangeAndReturn(__assign({}, someArg))]]);
callFunc([canChange, [__assign({}, someArg), canChangeAndReturn(__assign({}, someArg))]]);
callFunc([canChange, [__assign({}, someArg), canChangeAndReturn(__assign({}, someArg))]]);
callFunc([cannotChange, [someArg]]);
// export {}
