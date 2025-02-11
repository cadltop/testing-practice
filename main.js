export function capitalize(value) {
    return value.toUpperCase();
}
export function reverseString(value) {
    let reverse = [];
    for (let i = value.length - 1; i >= 0; i--) {
        reverse.push(value.at(i));
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
export function caesarCipher(value, factor) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let newString  = [];
    for (let lv = 0; lv < value.length; lv++) {
        if (value.at(lv).match(/[A-z]/g)) {
            for (let la = 0; la < alpha.length; la++) {
                let pos = la + factor;
                if (pos >= alpha.length) pos = pos - alpha.length;
                switch (value.at(lv)) {
                    case alpha.at(la):
                        newString.push(alpha.at(pos));
                        break;
                        case alpha.at(la).toUpperCase():
                            newString.push(alpha.at(pos).toUpperCase());
                            break;
                        }
            }
        } else {
            newString.push(value.at(lv));
        }
    }
    return newString.join("");
}
export function analyzeArray(arr) {
    const object = {
        average: 0,
        min: arr[0],
        max: arr[0],
        length: arr.length
    };
    for (const num of arr) {
        if (num > object.max) object.max = num;
        if (num < object.min) object.min = num;
        object.average += num;
    }
    object.average /= object.length;
    return object;
}