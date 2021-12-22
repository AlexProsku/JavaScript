/*
    1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе
    объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны
    получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать
    соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function transform(n) {
    let numb_obj = {}
    let reminder_n = 0
    if (n >= 0 && n <= 999) {
        while (true) {
            if (n === 0) {
                numb_obj['единицы'] = 0;
                return numb_obj
            }
            else if (n >= 100) {
                reminder_n = n % 100
                if (reminder_n === 0) {
                    numb_obj['сотни'] = n / 100;
                    return numb_obj
                }
                else {
                    numb_obj['сотни'] = (n - reminder_n) / 100;
                    n = reminder_n
                }
            }
            else if (n >= 10) {
                reminder_n = n % 10
                if (reminder_n === 0) {
                    numb_obj['десятки'] = n / 10;
                    return numb_obj
                }
                else {
                    numb_obj['десятки'] = (n - reminder_n) / 10;
                    n = reminder_n
                }
            }
            else {
                numb_obj['единицы'] = n;
                return numb_obj
            }
        }
    }
    else if (n > 999) {
        console.log(`Переданное число ${n} превышает значение 999`);
        return numb_obj
    }
    else {
        console.log(`Переданное число ${n} является отрицательным!`);
        return numb_obj
    }
}

console.log(transform(245))
