"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByKey = groupByKey;
function groupByKey(items, key) {
    var result = {};
    items.forEach(function (item) {
        var itemKeyValue = String(item[key]);
        if (Object.hasOwn(result, itemKeyValue)) {
            result[itemKeyValue].push(item);
        }
        else {
            result[itemKeyValue] = [item];
        }
    });
    return result;
}
