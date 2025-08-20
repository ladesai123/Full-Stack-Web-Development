let products = ["Laptop", "phone", "earphone"]

let greetings = products.map(product =>
    `Welcome Check our our products ${product}.`
);

console.log(greetings)

let updatedProducts = [...products, "Smartphone"];

let updatedGreetings = updatedProducts.map(product => 
    `Welcome Check our our latest products ${product}`
);

console.log(updatedGreetings);