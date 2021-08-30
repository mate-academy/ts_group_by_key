"use strict";
exports.groupByKey = void 0;
function groupByKey(items, field) {
    var sortByKey = {};
    items.forEach(function (element) {
        if (!sortByKey[element[field]]) {
            sortByKey[element[field]] = [];
        }
        sortByKey[element[field]].push(element);
    });
    return sortByKey;
}
exports.groupByKey = groupByKey;
