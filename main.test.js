import { capitalize } from "./main";

test('capitalize strings', () => {
    expect(capitalize('lower')).toBe('LOWER');
});