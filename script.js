const productNameInput = document.getElementById('productName');
const priceInput = document.getElementById('price');
const ratingInput = document.getElementById('rating');
const addProductButton = document.getElementById('addProduct');
const sortByPriceButton = document.getElementById('sortByPrice');
const sortByRatingButton = document.getElementById('sortByRating');
const priceGraph = document.getElementById('priceGraph');
const ratingGraph = document.getElementById('ratingGraph');

let products = [];

// Helper function to render the bar graph
const renderGraph = (graphContainer, data, key) => {
  graphContainer.innerHTML = '';
  data.forEach((product) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${product[key]}px`;
    bar.style.width = '50px';
    bar.textContent = product[key];
    
    const label = document.createElement('div');
    label.classList.add('bar-label');
    label.textContent = product.name;

    bar.appendChild(label);
    graphContainer.appendChild(bar);
  });
};

// Add product data
addProductButton.addEventListener('click', () => {
  const name = productNameInput.value;
  const price = Number(priceInput.value);
  const rating = Number(ratingInput.value);

  if (name && price > 0 && rating >= 1 && rating <= 5) {
    products.push({ name, price, rating });
    productNameInput.value = '';
    priceInput.value = '';
    ratingInput.value = '';

    renderGraph(priceGraph, products, 'price');
    renderGraph(ratingGraph, products, 'rating');
  } else {
    alert('Please enter valid product data!');
  }
});

// Sort by price
sortByPriceButton.addEventListener('click', () => {
  products.sort((a, b) => a.price - b.price);
  renderGraph(priceGraph, products, 'price');
  renderGraph(ratingGraph, products, 'rating');
});

// Sort by rating
sortByRatingButton.addEventListener('click', () => {
  products.sort((a, b) => a.rating - b.rating);
  renderGraph(priceGraph, products, 'price');
  renderGraph(ratingGraph, products, 'rating');
});
