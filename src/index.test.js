/*jshint esversion: 6 */
import { paix } from '.';

test('should map objects based on args', () => {
    const data = { one: 1, two: 2, three: 3 };
    const conf = { one: 'ONE', three: 'THREE' };
    const res = { ONE: 1, two: 2, THREE: 3 };

    expect(paix(data, conf)).toEqual(res);
});