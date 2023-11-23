// UMD module definition
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.add = factory();
    }
}(this, function () {
    return function(a, b) {
        return a + b;
    };
}));
