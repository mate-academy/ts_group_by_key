"use strict";
exports.__esModule = true;
exports.groupByKey = void 0;
function groupByKey(items, key) {
    var res = {};
    items.forEach(function (obj) {
        var property = obj[key];
        if (typeof property !== 'string' && typeof property !== 'number') {
            throw new Error('Value of key for grouping should have type string');
        }
        if (!(property in res)) {
            res[property] = [];
        }
        res[property].push(obj);
    });
    return res;
}
exports.groupByKey = groupByKey;
