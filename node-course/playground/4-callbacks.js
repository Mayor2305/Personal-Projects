
const doWorkCallback=(callback)=>{

    setTimeout(()=>{
        callback(undefined,[1,2,4])
    },2000)


}
doWorkCallback((error,result)=>{

    if(error)
    return console.log(error);
    console.log(result)

})