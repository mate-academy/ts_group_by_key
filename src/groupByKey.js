'use strict';

exports.__esModule = true;
exports.groupByKey = void 0;

function groupByKey(array, key) {
  
    var grouped = {};
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var book = array_1[_i];
        var newKey = book[key];
        grouped.hasOwnProperty(newKey)
            ? grouped[newKey].push(book)
            : grouped[newKey] = [book];
    }
    return grouped;
}
exports.groupByKey = groupByKey;
