
import lbttCalculator from "./calculator.js";


const zeroValue = 0;
const negativeValue = -1;
const commaValue = "250000,01";
const commaAndDotValue = "250,000.01";

describe('lbttCalculator::', () => {
    it ('Input value equal to zero', () => {
        expect(lbttCalculator(zeroValue.toString())).toBe("It should be a value greater than 0.");
    });
    it ('Negative input values', () => {
        expect(lbttCalculator(negativeValue.toString())).toBe("It should be a value greater than 0.");
    });
    it ('Input values with comma', () => {
        expect(lbttCalculator(commaValue.toString())).toBe("The LBTT value to be paid is £2100.00");
    });
    it ('Input values with comma and dot', () => {
        expect(lbttCalculator(commaAndDotValue.toString())).toBe("The LBTT value to be paid is £2100.00");
    });
});