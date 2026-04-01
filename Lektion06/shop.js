//fetch('https://dummyjson.com/products/?limit=10')
fetch('products.json')
    .then(resp => resp.json())
    .then(data => render(data))
    .catch(err => console.error(err));

function render(data) {
    const products = data.products;
    // console.log(products);

    let output = '<div class="row">';

    products.forEach(product => {
        // console.log(product);
        let category = product.category;
        console.log(category);
        if (category == 'groceries') {
            output += `
            <div class="col-md-4">
            <h2 class="text-secondary">${product.title}</h2>
            <p>${product.description}</p>
            <img src="${product.images[0]}" alt="${product.title}" class="img-fluid">
            <p>Price: ${product.price}$</p>
            <button class="btn btn-info">Buy Now</button>
            <hr>
            </div>
            `;
        }
    });
    output += '</div>';
    document.getElementById('shop').innerHTML = output;
}