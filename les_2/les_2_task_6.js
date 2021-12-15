/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения
    аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну
    из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/

function mathOperation(arg1, arg2, operation) {
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

    switch (operation) {
        case 'summing':
            return sum_f(arg1, arg2);
        case 'substraction':
            return substraction_f(arg1, arg2);
        case 'division':
            return division_f(arg1, arg2);
        case 'multiple':
            return multiple_f(arg1, arg2);
        default:
            return 'Операция не распознана'
    }
}

//alert(mathOperation(7, 3, 'division'))