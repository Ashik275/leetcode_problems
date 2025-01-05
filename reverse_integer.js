function reverse_integer(n){
    let reversed = 0;
    let sign = 1;
    if (n < 0) {
        sign = -1;
        n = -n;
    }
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;
    while (n > 0) {
        let digit = n % 10;
        if (reversed > (INT_MAX - digit) / 10) {
            return 0; 
        }

        reversed = reversed * 10 + digit; 
        n = Math.floor(n / 10);
    }
    return sign * reversed;

   
}


let result = reverse_integer(1534236469);

console.log(result);