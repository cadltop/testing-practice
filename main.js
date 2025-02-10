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