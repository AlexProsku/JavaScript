/*
    2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно
    реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине
    хранятся в массиве. Задачи:<br>
    a) Организовать такой массив для хранения товаров в корзине;<br>
    b) Организовать функцию countCartPrice, которая будет считать стоимость корзины.
*/

// basket[прайс, количество]
let basket = [['LADA Granta', 1], ['Hyundai Creta', 2]]

function countCartPrice(basket_in) {
    // price[Наименование, цена] пока прописали вручную, т.к. неоткуда получить
    let price = [['LADA Granta', 587900], ['KIA Rio', 984900], ['Hyundai Creta', 1239000], ['Skoda Rapid', 1020000]]
    let sum_basket = 0
    for (let i in basket_in) {
        for (let j in price) {
            if (basket_in[i][0] == price[j][0]) {
                sum_basket += (basket_in[i][1] * price[j][1]);
            }
        }
    }
    return sum_basket
}

alert(`Стоимость корзины = ${countCartPrice(basket)}`)