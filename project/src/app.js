const path =require ('path')
const express =require('express')
console.log(__dirname)
console.log(path.join(__dirname ,'../public'))
const app=express()
const publicDirectoryPath=path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))




app.listen(1000 , ()=>{
    console.log('server is up on port 1000')
})
