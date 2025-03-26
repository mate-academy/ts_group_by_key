"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByKey = groupByKey;
function groupByKey(items, key) {
    var nObj = {};
    for (var i = 0; i < items.length; i++) {
        var student = items[i];
        var studKey = String(student[key]);
        if (studKey in nObj) {
            nObj[studKey].push(student);
        }
        else {
            nObj[studKey] = [student];
        }
    }
    return nObj;
}
