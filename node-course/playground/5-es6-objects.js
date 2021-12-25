const name='mayor';
const userAge=20;
const user={
    name,
    age: userAge,
    location: 'burnaby'
}
console.log(user);
const product={

    label:'red notebook',
    price:3,
    stock: 43,
    salePrice:undefined,
    rating:4


}


// const {label:productLabel, stock, rating=5}=product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction=(type,{label, stock})=>{

    console.log(type,label,stock);

}

transaction('order',product);

