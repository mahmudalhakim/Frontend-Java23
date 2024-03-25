async function getData() {
    let resp = await fetch('https://fakestoreapi.com/products');
    let json = await resp.json();
    //renderProductsTable(json);
    renderProductsGrid(json);
}

function renderProductsTable(products) {
    console.log(products);

    const productsDiv = document.getElementById('productsDiv');

    let output = "<table class='table'>";

    products.forEach(product => {
        // output += '<tr><td>' + product.title + '</td></tr>';
        output += `
            <tr>
                <td>${product.title}</td>
                <td>$${Math.round(product.price)}</td>
                <td><img class="img-fluid" src="${product.image}" alt="${product.title}"</td>
            </tr>

        `;
    });

    output += "</table>";

    productsDiv.innerHTML = output;
}

function renderProductsGrid(products) {
    console.log(products);

    const productsDiv = document.getElementById('productsDiv');

    let output = "";

    products.forEach(product => {
        output += `
            <div class='row'>
                <div class="col-md-4">${product.title}</div>
                <div class="col-md-2">$${Math.round(product.price)}</div>
                <div class="col-md-6">
                    <img class="img-fluid" src="${product.image}" alt="${product.title}">
                </div>
            </div>
        `;
    });

    productsDiv.innerHTML = output;
}