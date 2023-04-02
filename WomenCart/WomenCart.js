const main = document.getElementById("main");
const WomenCart = JSON.parse(localStorage.getItem("WomenCart")) || [];
const total = document.getElementById("total");
showData(WomenCart);

function showData(data) {
    main.innerHTML = "";

    data.forEach((el, i) => {
        const card = document.createElement("div");

        const image = document.createElement("img");
        const category = document.createElement("h3");
        const description = document.createElement("p");
        const price = document.createElement("h4");
        const remove = document.createElement("button");
        const increment = document.createElement("button");
        const decrement = document.createElement("button");
        const quantity = document.createElement("h4");

        image.setAttribute("src", el.image);
        description.innerText = el.description;
        category.innerText = "Category: " + el.category;
        price.innerText = "$" + el.price;
        remove.innerText = "Remove"
        increment.innerText = "+";
        decrement.innerText = "-";
        quantity.innerText = "Quantity: " + el.quantity;

        remove.addEventListener("click", () => {
            WomenCart.splice(i, 1);
            localStorage.setItem("WomenCart", JSON.stringify(WomenCart));
            showData(WomenCart);
            sum();
        });

        increment.addEventListener("click", () => {
            el.quantity++;
            localStorage.setItem("WomenCart", JSON.stringify(WomenCart));
            showData(WomenCart);
            sum();
        });

        decrement.addEventListener("click", () => {
            if (el.quantity > 1) {
                el.quantity--;
            }
            localStorage.setItem("WomenCart", JSON.stringify(WomenCart));
            showData(WomenCart);
            sum();
        });

        card.append(image, category, description, price, quantity, remove, decrement, increment);
        main.append(card);
    });
}

function sum() {
    let sum = 0;
    for (let i = 0; i < WomenCart.length; ++i) {
        sum += WomenCart[i].quantity * WomenCart[i].price;
    }
    total.innerText = "Total Price: $" + sum;
}

let flag = true;
if (flag) {
    let sum = 0;
    for (let i = 0; i < WomenCart.length; ++i) {
        sum += WomenCart[i].quantity * WomenCart[i].price;
    }
    total.innerText = "Total Price: $" + sum;
    flag = false;
}