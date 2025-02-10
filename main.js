export function capitalize(value) {
    return value.toUpperCase();
}
export function reverseString(value) {
    const stringArr = value.split("");
    let reverse = [];
    for (let i = stringArr.length - 1; i >= 0; i--) {
        reverse.push(stringArr[i]);
    }
    return reverse.join("");
}
export const calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    divide: function(a,b) {
        return a / b;
    },
    multiply: function(a,b) {
        return a * b;
    }
};