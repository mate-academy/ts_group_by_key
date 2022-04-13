"use strict";
exports.__esModule = true;
exports.groupByKey = void 0;
function groupByKey(items, key) {
    var grouppedItems = {};
    items.forEach(function (item) {
        if (!Object.prototype.hasOwnProperty.call(grouppedItems, item[key])) {
            grouppedItems[item[key]]
                = items.filter(function (element) { return item[key] === element[key]; });
        }
    });
    return grouppedItems;
}
exports.groupByKey = groupByKey;
