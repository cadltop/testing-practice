import * as main from "./main";

test('capitalize strings', () => {
    expect(main.capitalize('upper')).toBe('UPPER');
});
test('reverse strings', () => {
    expect(main.reverseString('reverse')).toBe('esrever');
});
test('calculate', () => {
    const calc = main.calculator;

    expect(calc.add(2, 2)).toBe(4);
    expect(calc.subtract(2, 2)).toBe(0);
    expect(calc.divide(2, 2)).toBe(1);
    expect(calc.multiply(2, 2)).toBe(4);
});
