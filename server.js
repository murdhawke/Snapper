const express =  require('express')         // Import express module
const port =  1234
const scripts =  require('./scripts/movidb')
const  app =  express()                     // Instantiate express


app.get('/', (req,res)=>{
   scripts.snapper()
})
app.listen(port, ()=>{
    console.log('Server connected successfully!')
})