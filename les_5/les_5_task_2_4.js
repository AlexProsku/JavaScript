
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
    countbasketPrice: function () {   // функция возвращает сумму корзины
        let sum_basket = 0
        for (let i in this.goods_lst) {
            for (let p in products) {
                if (this.goods_lst[i].p_id == products[p].p_id) {
                    sum_basket += (products[p].price * this.goods_lst[i].quantity)
                }
            }
        }
        return sum_basket
    },
    countbasket_quant: function () {   // функция возвращает количество товаров в корзине
        let cnt_basket = 0
        for (let i in this.goods_lst) {
            cnt_basket += this.goods_lst[i].quantity
        }
        return cnt_basket
    }
}

// вывод каталога с наименованием продуктов
let catalog = document.querySelector('#catalog');
let products_name = '';
for (let i in products) {
    products_name += (products[i].make + ' ' + products[i].model + ', ')
}
catalog.insertAdjacentHTML('afterBegin', `Каталог: ${products_name} `);


basket.add_goods('p1003', 2)
basket.add_goods('p1003', 1)
basket.subtraction_goods('p1003')
basket.add_goods('p1001', 1)

console.log(`Стоимость корзины = ${basket.countbasketPrice()}`)

let basket_cnt_sum = document.querySelector('#basket_cnt_sum');
let sum_bask = basket.countbasketPrice()
let cnt_bask = basket.countbasket_quant()
if (cnt_bask == 0) {
    basket_cnt_sum.insertAdjacentHTML('afterBegin', `Корзина пуста!`);
}
else {
    basket_cnt_sum.insertAdjacentHTML('afterBegin', `В корзине ${cnt_bask} товаров на сумму ${sum_bask} рублей`);
}
