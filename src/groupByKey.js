"use strict";
exports.__esModule = true;
exports.groupByKey = void 0;
function groupByKey(items, key) {
    var groupedItems = {};
    items.forEach(function (item) {
        var itemKey = String(item[key]);
        if (itemKey in groupedItems) {
            groupedItems[itemKey].push(item);
        }
        else {
            groupedItems[itemKey] = [item];
        }
    });
    return groupedItems;
}
exports.groupByKey = groupByKey;
