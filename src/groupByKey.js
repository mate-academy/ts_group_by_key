"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByKey = void 0;
function groupByKey(items, key) {
    var resultMap = {};
    items.forEach(function (item) {
        var itemKey = String(item[key]);
        if (!resultMap[itemKey]) {
            resultMap[itemKey] = [item];
        }
        else {
            resultMap[itemKey].push(item);
        }
    });
    return resultMap;
}
exports.groupByKey = groupByKey;
