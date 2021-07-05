const total = 100;
const ordered = 100;
let result;

window.addEventListener("click", function () {


    if (total >= ordered) {
        console.log("Заказ оформлен, с вами свяжется менеджер");

    } else {
         console.log("На складе недостаточно твоаров")
    }
});