let objBasket = JSON.parse(window.localStorage.basket);
const basketDivLink = document.querySelector('.contain-div');
basketDivLink.innerHTML = htmlGenerateBasket(objBasket);

function htmlGenerateBasket(objBasket) {
    let result = [];
    let bask = objBasket.bask;
    if (bask.length > 0) {
        bask.forEach(items => result.push(
            `<div class='item-wrap' data-name='${items.name}'>
				<div class='item-desc'>
					${items.name}
				</div>
				<div class='item-stats'>
					<div class='item-plus''>
						<img src="pics/plus.png" />
					</div>
					<div class='item-count' data-name='${items.name}'>
						${items.count}
					</div>
					<div class='item-minus''>
						<img src="pics/minus.png" />
					</div>
					<div class='items-sum' data-name='${items.name}'>
						${items.price} руб.
					</div>
				</div>
			</div>`));
    } else {
        result.push(
            `<div class='item-wrap'>
				<div class='item-desc'>
					<p>Корзина пуста</p>
				</div>
				<div class='item-stats'>
				</div>
			</div>`);
    }
    const chck_basket = document.querySelector('#chck_basket');
    if (!chck_basket) {
        let rdcr = (sum, current) => sum + current.price * current.count;
        let resSum = bask.reduce(rdcr, 0);
        result.push(
            `<div class='basket_ftr'>
				<div id="chck_basket" class='total-sum'>
				Сумма: ${resSum} руб.
				</div>
				<div class='next_btn'>
					<p>Далее</p>
				</div>
			</div>`)
    }

    return result.join('');
};

const next_lnk = document.querySelectorAll('.next');

next_lnk.forEach((elem) => {
    let arr_lnk = elem.querySelector('.arrow');
    arr_lnk.addEventListener('click', (e) => {
        arr_lnk.classList.toggle('up');
        arr_lnk.classList.toggle('down');

        let hide_lnk = elem.querySelector(".show");
        hide_lnk.classList.toggle('hidden');
    });
});

next_lnk.forEach((elem, index) => {
    let next_btn = elem.querySelector(".next_btn");
    next_btn.addEventListener('click', (e) => {
        if (elem === next_lnk[next_lnk.length - 1]) {
        }
        else {
            let arr_lnkParent = elem.querySelector(".arrow");
            let arr_lnkParentSibling = next_lnk[index + 1].querySelector(".arrow");
            let panelShow = next_lnk[index + 1].querySelector('.hidden');
            let panelHide = elem.querySelector('.show');

            if (panelShow != null && panelShow.classList.contains('hidden')) {
                arr_lnkParent.classList.toggle('up');
                arr_lnkParent.classList.toggle('down');
                arr_lnkParentSibling.classList.toggle('up');
                arr_lnkParentSibling.classList.toggle('down');
                panelHide.classList.toggle('hidden');
                panelShow.classList.toggle('hidden');

            } else {
                arr_lnkParent.classList.toggle('up');
                arr_lnkParent.classList.toggle('down');
                if (panelHide != null) {
                    panelHide.classList.toggle('hidden');
                }

            }
        }
    });
});

const basket_div_lnk_all = document.querySelectorAll('.item-wrap');
basket_div_lnk_all.forEach((elem) => {
    let item_plus = elem.querySelector('.item-plus');
    let item_count = elem.querySelector('.item-count');
    let item_minus = elem.querySelector('.item-minus');
    item_plus.addEventListener('click', (e) => {
        item_count.textContent = Number(item_count.textContent) + 1;
    });
    item_minus.addEventListener('click', (e) => {
        if (item_count.textContent > 0) {
            item_count.textContent = Number(item_count.textContent) - 1;
        }
    });
});
