(function () {
    'use strict';

    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function isPositive(sum) {
        const positive = sum >= 0;
        return [sum, positive];
    }
    module.exports = { isPositive, add, subtract };

}());
//# sourceMappingURL=bundle.js.map
