'use strict';

var _ = require('.');

test('should map objects based on args', function () {
    var data = { one: 1, two: 2, three: 3 };
    var conf = { one: 'ONE', three: 'THREE' };
    var res = { ONE: 1, two: 2, THREE: 3 };

    expect((0, _.paix)(data, conf)).toEqual(res);
}); /*jshint esversion: 6 */