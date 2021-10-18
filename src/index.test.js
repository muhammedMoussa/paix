/*jshint esversion: 6 */
import { paix } from "."

import * as index from "./index"
test('should map objects based on args', () => {
    const data = { one: 1, two: 2, three: 3 };
    const conf = { one: 'ONE', three: 'THREE' };
    const res = { ONE: 1, two: 2, THREE: 3 };

    expect(paix(data, conf)).toEqual(res);
});

// @ponicode
describe("index.paix", () => {
    test("0", () => {
        let callFunction = () => {
            index.paix({ key: "Dillenberg" }, ["Sales", "Software Engineer", "Software Engineer"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.paix({ key: "Elio" }, ["Data Scientist", "Software Engineer", "Marketing"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.paix({ key: "Elio" }, ["Data Scientist", "Software Engineer", "Chief Product Officer"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.paix({ key: "elio@example.com" }, ["Software Engineer", "Data Scientist", "Software Engineer"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.paix({ key: "Dillenberg" }, ["Sales", "Chief Product Officer", "Data Scientist"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.paix(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
