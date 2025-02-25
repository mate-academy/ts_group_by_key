"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByKey = groupByKey;
function groupByKey(items, key) {
    // write code here;
    return items.reduce(function (accumulator, currentValue) {
        var groupKey = String(currentValue[key]);
        if (!accumulator[groupKey]) {
            accumulator[groupKey] = [];
        }
        accumulator[groupKey].push(currentValue);
        return accumulator;
    }, {});
}
