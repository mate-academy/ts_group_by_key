"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByKey = void 0;
function groupByKey(items, key) {
    var organised = {};
    items.forEach(function (item) {
        var val = item[key];
        if (!(val in organised)) {
            organised[val] = [];
        }
        organised[val].push(item);
    });
    return organised;
}
exports.groupByKey = groupByKey;
