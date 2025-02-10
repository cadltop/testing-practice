import * as main from "./main";

test('capitalize strings', () => {
    expect(main.capitalize('upper')).toBe('UPPER');
});
test('reverse strings', () => {
    expect(main.reverseString('reverse')).toBe('esrever');
});