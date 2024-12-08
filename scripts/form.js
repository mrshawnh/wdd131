const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productName = document.querySelector('#productName');

function createOptions(products) {
    products.forEach((product) => {
        let option = document.createElement('option');

        option.setAttribute('value', product.id);
        option.innerHTML = product.name;

        productName.appendChild(option);
    });


}

createOptions(products);

let count = localStorage.getItem('reviewCount') || 0;
const displayCount = document.querySelector('#reviewCounter');

function addReviews() {
    count++;
    displayCount.innerHTML = count;
}

document.querySelector('#button').addEventListener('click', addReviews());