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
test('cipher strings', () => {
    expect(main.caesarCipher('xyz', 3)).toBe('abc');
    expect(main.caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(main.caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
test('array analysis', () => {
    expect(main.analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});
