const express = require('express')
const app = express()



app.get('/',(req,res)=> {
    res.send('Thank You For Calling Me')
})

app.listen(3000,()=>{
    console.log('Listening Port 3000');
})