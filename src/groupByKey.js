"use strict";
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
exports.__esModule = true;
exports.groupByKey = void 0;
function groupByKey(items, key) {
    return items.reduce(function (groupedItems, item) {
        var itemKey = String(item[key]);
        var updatedGroupedItems = __assign({}, groupedItems);
        if (itemKey in updatedGroupedItems) {
            updatedGroupedItems[itemKey].push(item);
        }
        else {
            updatedGroupedItems[itemKey] = [item];
        }
        return updatedGroupedItems;
    }, {});
}
exports.groupByKey = groupByKey;
