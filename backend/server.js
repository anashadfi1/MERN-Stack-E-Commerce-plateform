const express = require('express')

const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const port = process.env.PORT || 4000
connectDB()
const app = express()
app.get('/',(req,res)=>{
    res.send('api is running ...')
})
app.use('/api/products', productRoutes)
app.listen(port,()=>console.log(`API is running on port ${port}`))