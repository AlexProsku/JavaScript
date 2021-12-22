/*
    2. Продолжить работу с интернет-магазином:
    В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
    Реализуйте такие объекты.
    Перенести функционал подсчета корзины на объектно-ориентированную базу.

    3. * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для
    корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных
    модулей сайта, но в разных местах давал возможность вызывать разные методы.
*/

/*  БЫЛО
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
*/

let products = [
    {
        p_id: 'p1001',
        make: 'LADA',
        model: 'Granta',
        color: 'white',
        passengers: 4,
        price: 587900
    },
    {
        p_id: 'p1002',
        make: 'KIA',
        model: 'Rio',
        color: 'black',
        passengers: 4,
        price: 984900
    },
    {
        p_id: 'p1003',
        make: 'Hyundai',
        model: 'Creta',
        color: 'white',
        passengers: 4,
        price: 1239000
    },
    {
        p_id: 'p1004',
        make: 'Skoda',
        model: 'Rapid',
        color: 'greem',
        passengers: 4,
        price: 1020000
    }
]


let basket = {
    goods_lst: [],
    // принимает id товара, количесто и добавляет его в goods_lst и возвращает OK при успехе или FALSE при неудаче
    add_goods: function (p_id_add, quantity_add) {
        for (let g in this.goods_lst) {
            if (this.goods_lst[g].p_id == p_id_add) {
                this.goods_lst[g].quantity += quantity_add;
                return 'OK'
            }
        }
        for (let i in products) {
            if (p_id_add == products[i].p_id) {
                this.goods_lst.push({ p_id: p_id_add, quantity: quantity_add })
                return 'OK'
            }
        }
        return 'FALSE'
    },
    // принимает объект с товаром и уменьшает его количество на 1 (вплоть до нуля, если товар найден)
    // и возвращает OK при успехе или FALSE при неудаче
    subtraction_goods: function (p_id_del) {
        for (let g in this.goods_lst) {
            if (this.goods_lst[g].p_id == p_id_del) {
                if (this.goods_lst[g].quantity > 0) {
                    this.goods_lst[g].quantity--;
                    return 'OK'
                }
                else {
                    return 'FALSE'
                }
            }
        }
        return 'FALSE'
    },
    countCartPrice: function () {   // функция возвращает сумму корзины
        let sum_basket = 0
        for (let i in this.goods_lst) {
            for (let p in products) {
                if (this.goods_lst[i].p_id == products[p].p_id) {
                    sum_basket += (products[p].price * this.goods_lst[i].quantity)
                }
            }
        }
        return sum_basket
    }
}

basket.add_goods('p1003', 2)
basket.add_goods('p1003', 1)
basket.subtraction_goods('p1003')
basket.add_goods('p1001', 1)

console.log(`Стоимость корзины = ${basket.countCartPrice()}`)
