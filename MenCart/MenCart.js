const main = document.getElementById("main");
const MenCart = JSON.parse(localStorage.getItem("MenCart")) || [];
const total = document.getElementById("total");
showData(MenCart);


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
        category.innerText = el.category;
        price.innerText = "$" + el.price;
        remove.innerText = "Remove"
        increment.innerText = "+";
        decrement.innerText = "-";
        quantity.innerText = "Quantity: " + el.quantity;

        remove.addEventListener("click", () => {
            MenCart.splice(i, 1);
            localStorage.setItem("MenCart", JSON.stringify(MenCart));
            showData(MenCart);
            sum();
        });

        increment.addEventListener("click", () => {
            el.quantity++;
            localStorage.setItem("MenCart", JSON.stringify(MenCart));
            showData(MenCart);
            sum();
        });

        decrement.addEventListener("click", () => {
            if (el.quantity > 1) {
                el.quantity--;
            }
            localStorage.setItem("MenCart", JSON.stringify(MenCart));
            showData(MenCart);
            sum();
        });
        card.append(image, category, description, price, quantity, remove, decrement, increment);
        main.append(card);
    });
}

function sum() {
    let sum = 0;
    for (let i = 0; i < MenCart.length; ++i) {
        sum += MenCart[i].quantity * MenCart[i].price;
    }
    total.innerText = "Total Price: $" + sum;
}
let flag = true;
if (flag) {
    let sum = 0;
    for (let i = 0; i < MenCart.length; ++i) {
        sum += MenCart[i].quantity * MenCart[i].price;
    }
    total.innerText = "Total Price: $" + sum;
    flag = false;
}