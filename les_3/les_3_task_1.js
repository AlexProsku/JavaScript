/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

let n_min = 0
let n_max = 100
let n
let simple_n = []

if (n_min >= 2) {
    n = n_min;
}
else {
    n = 2;  // простые числа начинаются с 2
}

while (n <= n_max) {
    if (n == 2) {
        simple_n.push(n);
        n++
    }
    else {
        let div_n = 2;
        let is_simple = true;
        while (div_n != n) {
            if (n % div_n === 0) {
                is_simple = false;
                break
            }
            else {
                div_n++;
            }
        }
        if (is_simple) { simple_n.push(n) }
        n++;
    }
}

alert(`Простые числа в промежутке от ${n_min} до ${n_max} = ${simple_n.join(', ')}`)