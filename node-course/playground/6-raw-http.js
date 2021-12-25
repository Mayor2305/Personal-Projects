const http = require('http');

const url ='http://api.weatherstack.com/current?access_key=12d974018c9bb18655cd4654688cd9bb&query=40,-75';

const request = http.request(url,(response)=>{

    let data='';

    response.on('data',(chunk)=>{

        data=data + chunk.toString();
        console.log(chunk);


    });

    response.on('end',()=>{

        const body=JSON.parse(data);

        console.log(body);

    });

});

request.on('error',(error)=>{
    console.log('error',error);
})
request.end();
