
const map = new Map([
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M']
]);

// get the last digit one by one 
// and generate the result
function intToRoman(number) {
    let base = 1;
    const result = [];
    while (number > 0) {
        last = number % 10;
        // console.log(last);

        if (last < 4) {
            for (let k = last; k > 0; k--) {
                result.unshift(map.get(base));
            }
        } else if (last === 4) {
            result.unshift(...[map.get(base), map.get(base * 5)]);
        } else if (last === 5) {
            result.unshift(map.get(base * 5));
        } else if (last < 9) {
            for (let k = last; k > 5; k--) {
                result.unshift(map.get(base));
            }
            result.unshift(map.get(base * 5));
        } else {
            result.unshift(...[map.get(base), map.get(base * 10)]);
        }
        base *= 10
        number = (number - last) / 10;
    }
    // return result;
    return result.join('');
}

let r = intToRoman('3749');

console.log(r);
