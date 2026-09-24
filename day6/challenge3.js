const product = {
    name : "iphone 12 pro ",
    price : 5000,
    category : "telephone",
    quantity : 8,
    available : true
};
console.log("name : ",product.name);
console.log("prix : ",product.price);
console.log("categorie : ",product.category);
if(product.available === true && product.quantity>0){
    console.log('le produit est disponible ');
}else {
    console.log("le produit est indisponible");
}
let prixtotal = product.price * product.quantity;  
console.log("le prix total du stock: " ,prixtotal);





