// proble-22:count totle prodects

let products=[
 {
   name:"Laptop",
   price:800
 },
 {
   name:"Phone",
   price:500
 },
 {
   name:"Mouse",
   price:50
 }
];


function totleProduct(products){
    let sum=0;

    for(let product of products){
        sum=sum+product.price;

    }
    return sum;

}
console.log(totleProduct(products))