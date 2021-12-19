/*
    4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20
    рядов, а не 5
    x
    xx
    xxx
    xxxx
    xxxxx
*/

for (let j = 'x', n = 20; j.length <= n; j += 'x') {
    console.log(j);
}