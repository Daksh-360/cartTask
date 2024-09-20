

const outerContainer = document.querySelector('.outer');


async function fetchData(){
    try {
        const response = await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            response.map((element) => {
                createProductCard(element)
            });
    } catch (error) {
        console.log(error)
    }
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img class="prod-img" src="${product.image}" alt="${product.title}">
        <p class="price">₹${product.price}</p>
        <p class="title">${product.title}</p>
    `;
    outerContainer.appendChild(card);
}
fetchData();

