var products = {
    samsung: [
        { productName: "Samsung TV", price: 40000 },
        { productName: "Samsung Mobile", price: 20000 },
        { productName: "Samsung Monitor", price: 15000 },
    ],
    LG: [
        { productName: "LG TV", price: 50000 },
        { productName: "LG Mobile", price: 30000 },
        { productName: "LG Monitor", price: 25000 },
    ]
}

let prodName;
let prodPrice;

for (let item in products) {
    let productItem = products[item]
    if (item === 'samsung') {
        for (let i = 0; i < productItem.length; i++) {
            prodName = "prodName" + i
            prodPrice = "prodPrice" + i
            document.getElementById(prodName).innerText = productItem[i].productName
            document.getElementById(prodPrice).innerText = productItem[i].price 
        }
    }
    if (item === 'LG') {
        for (let i = 0; i < productItem.length; i++) {
            prodName = "lgProdName" + i
            prodPrice = "lgProdPrice" + i
            document.getElementById(prodName).innerText = productItem[i].productName
            document.getElementById(prodPrice).innerText = productItem[i].price
        }
    }
}
