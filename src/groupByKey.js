"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByKey = groupByKey;
function groupByKey(items, key) {
    var groupedMap = {};
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        var keyValue = String(item[key]);
        if (!groupedMap[keyValue]) {
            groupedMap[keyValue] = [];
        }
        groupedMap[keyValue].push(item);
    }
    return groupedMap;
}
