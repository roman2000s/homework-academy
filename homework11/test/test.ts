import { expect } from 'chai';
import sum from '../src/sum';

describe("sum", () => {
    it("Should  be calculated", () => {
        let calcSum: number;
        calcSum = sum(1)(2)(3)(4)(5)();
        expect(calcSum).to.equal(15);
    });
    it("Should be calculated with dif amount of parametres", () => {
        let calcSum: number;
        calcSum = sum(1)(2)(3)();
        expect(calcSum).to.equal(6);
    });
    it("Should  be calculated with the first parametres", () => {
        let calcSum: number;
        calcSum = sum(1)(2)(3, 4, 6)(4)(5)();
        expect(calcSum).to.equal(15);
    });
});
