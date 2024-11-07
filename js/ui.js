import { getCartItems } from "./cart.js";

const products = [
    {
        id: 1,
        title: "Pava electrica",
        price: 45.000,
        image:
        "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
    },
    {
        id: 2,
        title: "Horno",
        price: 150.000,
        image:
        "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
    },
    {
        id: 3,
        title: "Televisor",
        price: 700.000,
        image:
        "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
    },
    {
        id: 4,
        title: "Notebook",
        price: 500.000,
        image:
        "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
    },
    {
        id: 5,
        title: "Computadora",
        price: 900.000,
        image:
        "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
    },
    {
        id: 6,
        title: "Batidora",
        price: 14.000,
        image:
        "https://www.solumex.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
    },
];

export const renderProducts = () => {
    const productList = document.getElementById("productList");

    products.forEach((product) => {
        const productCard = document.createElement("article");
        productCard.classList.add("product");
        productCard.setAttribute("data-id", product.id);

        productCard.innerHTML = `
        <div>
            <img class="product__image" src="${product.image}" alt="${
        product.title
        }" />
        </div>
        <div>
            <h5 class="product__title">${product.title}</h5>
            <p class="product__price">$${product.price.toFixed(2)}</p>
        </div>
        <button class="product__add">Agregar</button>
        `;
        productList.append(productCard);
    });
    };

export const updateCartUi = () => {
    const cartContainer = document.querySelector(".cart__container");
    cartContainer.innerHTML = "";
    const cartItems = getCartItems();
    cartItems.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart__item");
        cartItem.setAttribute("data-id", item.id);

        cartItem.innerHTML = `
        <div class="cart__item">
            <div class="cart__item-title">${item.title}</div>
            <div>${item.price}</div>
            <div>
            <button class="cart__increase">+</button>
            <button class="cart__decrease">-</button>
            <button class="cart__remove">Eliminar</button>
            </div>
        </div>
        
        `;

        cartContainer.appendChild(cartItem);
    });
};