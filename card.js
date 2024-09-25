const cards = document.querySelector('.cards');
const heading = document.querySelector('.navbar-brand');

heading.addEventListener('click' , function(){
    window.location.href = 'landing.html'
})

fetchData();
function fetchData(){
    try {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            products.map((product) => {
                createProductCard(product);
            });
        })
    } catch (error) {
        console.log(error)
    }
}


const displayFilteredProducts = (products) => {
    cards.innerHTML = '';
    if(products.length == 0){
        const notFound = document.createElement('div');
        notFound.classList.add('no-result');
        notFound.innerHTML = `
            <p>No products found. Try a different search!</p>
        `;
        cards.appendChild(notFound);
    }
    else{
        products.map((product) => {
            createProductCard(product);
        });
    }
};

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img class="prod-img" src="${product.image}" alt="${product.title}">
        <p class="price">₹${product.price}</p>
        <p class="title">${product.title}</p>
    `;
    cards.appendChild(card);
}

const handleChange = (e) => {

    const filteredArray = [];
    e.preventDefault();
    const searchQuery = e.target.value;
    try {
        fetch('https://fakestoreapi.com/products')
        .then ( response =>response.json())
        .then(res=>{
            res.filter((ele)=> {
                if(ele.title.toLowerCase().includes(searchQuery.toLowerCase())){
                    filteredArray.push(ele);
                }
            })
        })
        .then(()=>{
            console.log(filteredArray)
            displayFilteredProducts(filteredArray)
        }
    )
}
 catch (error) {
        console.log(error)
    }
}
const input = document.querySelector('.input');
const filteredElements = input.addEventListener('input',handleChange);
console.log(filteredElements);