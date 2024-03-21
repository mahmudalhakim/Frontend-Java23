
/**
 * 
 *  Hämta text/html via Ajax-teknik
 */

// 1. Skapa en lyssnare / händelsehanterare
const loadBtn = document.getElementById('loadBtn');
loadBtn.addEventListener('click', loadText);

// 2. Skapa en Ajax-funktion
function loadText() {
    console.log("Inne i funktionen loadText");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'demo.html');
    xhr.onload = function () {
        document.getElementById('loadTextDiv').innerHTML = xhr.responseText;
    };
    xhr.send()

    console.log(xhr);
}


/**
 * 
 *  Hämta JSON via Ajax-teknik
 */
// 1. Skapa en lyssnare / händelsehanterare
const loadBtnJSON = document.getElementById('loadBtnJSON');
loadBtnJSON.addEventListener('click', loadJSON);

// 2. Skapa en Ajax-funktion
function loadJSON() {
    console.log("Inne i funktionen loadJSON");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'demo.json');
    xhr.onload = function () {
        // Innan konvertering 
        console.log(xhr.responseText); // OBS! En sträng
        // Efter konvertering 
        const json = JSON.parse(xhr.responseText); // OBS! Ett JSON-Objekt
        console.log(json);

        renderJSON(json);
    };
    xhr.send()

    console.log(xhr);
}

function renderJSON(json) {
    document.getElementById('loadJsonDiv').innerHTML = `
        <h2 id="name" class="text-info">${json.name}</h2>
        <h3>${json.email}</h3>
        <h4>Company: ${json.company.name}</h4>
    `;
}

function changeName() {
    const name = document.getElementById('name');
    if (name)
        name.innerHTML = "HELLO";
    else
        document.getElementById('loadJsonDiv').innerHTML = `
            <div class="alert alert-danger my-2">Du måste hämta data först</alert>`;

}

/**
 * 
 * Hämta data från ett externt API
 * 
 */
const loadBtnApi = document.getElementById('loadBtnApi');
loadBtnApi.addEventListener('click', loadUsers);

function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.onload = function () {
        // Innan konvertering 
        // console.log(xhr.responseText); // OBS! En sträng
        // Efter konvertering 
        const json = JSON.parse(xhr.responseText); // OBS! Ett JSON-Objekt
        console.log(json);

        renderUsers(json);
    };
    xhr.send()
}

function renderUsers(users) {
    let output = '<table class="table table-striped">';
    output += '<tr><th>Name</th><th>Email</th><th>City</th></tr>'
    users.forEach(user => {
        console.log(user);
        output += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.address.city}</td>
            </tr>
        `;
    });
    output += "</table>";
    document.getElementById('loadApiDiv').innerHTML = output;
}


/**
 * 
 *      Hämta data via jQuery
 * 
 */

$(function () {
    console.log("--- Hello jQuery ---");
    $('#jqueryText').load('demo.html');

    $.getJSON('demo.json', function (response) {
        $('#jqueryJson').html(response.name);
    })

});


/**
 * 
 *   Hämta data via Fetch API
 * 
 */

fetch('demo.html')
    .then(resp => resp.text())
    .then(data => console.log(data))
    .catch(err => console.error(err));

fetch('demo.json')
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

async function getData() {
    let resp = await fetch('https://fakestoreapi.com/products');
    let json = await resp.json();
    console.log(json);
}

getData();