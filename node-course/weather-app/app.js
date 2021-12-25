const express = require('express');
const request = require ('request');
const geocode = require ('./utils/geocode.js')
const forecast = require ('./utils/forecast.js')

const address=process.argv[2];

if(!address)
{
    console.log('provide an address')
}
else
{
    geocode(address,(error,{latitude, longitude, location}={})=>{
        if(error)
        {
            return console.log(error);
        }        
        forecast(latitude, longitude, (error, data) => {
            if (error)
            {
               return console.log(error);
            }

            console.log(location);
            console.log(data);
        })
    
})

}

