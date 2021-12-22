/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return.
*/

function sum_f(x, y) {
    return x + y;
}

function substraction_f(x, y) {
    return x - y;
}

function division_f(x, y) {
    if (y != 0) {
        return x / y;
    }
    else {
        return 'Нельзя делить на ноль!';
    }

}

function multiple_f(x, y) {
    return x * y;
}
