"use strict";
exports.__esModule = true;
exports.groupByKey = void 0;
function groupByKey(items, key) {
    var resObj = {};
    items.forEach(function (item) {
        var keyForElement = "".concat(item[key]);
        if (!resObj[keyForElement]) {
            resObj[keyForElement] = [];
        }
        resObj[keyForElement].push(item);
    });
    return resObj;
}
exports.groupByKey = groupByKey;
