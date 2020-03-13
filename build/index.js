"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*jshint esversion: 6 */
var paix = exports.paix = function paix(obj, configs) {
    for (var keys in configs) {
        var value = configs[keys];
        var src_keys = Object.keys(obj);
        if (src_keys.includes(keys)) {
            var src_value = obj[keys];
            delete obj[keys];
            obj[value] = src_value;
        }
    }
    return obj;
};