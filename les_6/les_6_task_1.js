class Product {

    constructor(name, price, unit) {
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.count = 0;
    }
}

class Bascket {

    constructor() {
        this.bask = [];
    }

    basket_cnt_sum() {
        let rdcr = (sum, cur) => sum + cur.price * cur.count;
        let result = this.bask.reduce(rdcr, 0);
        return result;
    }

    add_goods(item, count, in_basket) {
        let add_count = count - item.count;
        item.count = item.count + add_count;
        if (in_basket === false) {
            this.bask.push(item);
        }
        if (item.count === 0) {
            this.bask.pop(item);
        }
    }

    find_goods(name) {
        let result = "";
        this.bask.forEach(el => {
            if (el.name === name) {
                result = el;
            }
        });
        return result;
    }

    getInfoProduct() {
        let resCount = 0;
        let resName = ' ';
        this.bask.forEach(el => {
            resCount += el.count;
            resName += el.name + ' ';
        });
        return {
            resCount: resCount,
            resName: resName
        };
    }

}

let bascket = new Bascket();
let prod_change = document.querySelectorAll('.prod_change');
function get_count(value, name) {
    let prod_cnt = document.querySelector('.' + name);
    if (value === '-') {
        if (Number(prod_cnt.value) > 0) {
            prod_cnt.value = Number(prod_cnt.value) - 1;
        }
    }
    else {
        prod_cnt.value = Number(prod_cnt.value) + 1;
    }
};
prod_change.forEach(elem => elem.addEventListener('click', (e) => get_count(elem.value, elem.name)));

let cart = document.querySelector('#cart');
let catalog = document.querySelector('#catalog');
let prod_buy = document.querySelectorAll('.prod_buy');
function add_cart(value, name) {
    let product_name = document.querySelector('#' + name + ' .name');
    let product_price = document.querySelector('#' + name + ' .price');
    let product_unit = document.querySelector('#' + name + ' .unit');
    let prod_cnt = document.querySelector('.' + name);
    let in_basket = true;
    let product = bascket.find_goods(product_name.innerHTML);
    if (product === "") {
        product = new Product(product_name.innerHTML, Number(product_price.innerHTML), product_unit.innerHTML);
        in_basket = false;
    };
    bascket.add_goods(product, Number(prod_cnt.value), in_basket);
    let res = bascket.getInfoProduct();
    let resCount = res.resCount;
    let resName = res.resName;
    let resSum = bascket.basket_cnt_sum();
    if (resSum === 0 && resCount === 0) {
        cart.textContent = "Корзина пуста";
        catalog.textContent = "Состав корзины: - ";
    }
    else {
        cart.textContent = `В корзине: ${resCount} товаров на сумму ${resSum} рублей`;
    }

    catalog.textContent = `Корзина с товарами: ${resName} `;
};
prod_buy.forEach(elem => elem.addEventListener('click', (e) => add_cart(elem.value, elem.name)));
