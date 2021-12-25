const fs=require('fs');

// const book={
//     title: 'intelligent investor',
//     author: 'ben graham'
// }

// 

// console.log(data.title);

const dataBuffer=fs.readFileSync('1-JSON.json');

const dataJson=dataBuffer.toString();
const user=JSON.parse(dataJson);


user.name='mayor';
user.planet='mars';
user.age='20';

const userJSON=JSON.stringify(user);// to convert an object to string
fs.writeFileSync('1-JSON.json',userJSON);//to make a file names 1-json.json with bookJson strings value inside it


