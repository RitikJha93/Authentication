const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db/db');
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
const options = {
    origin:"http://localhost:3000",
    useSuccessStatus : 200
}
app.use(cors(options))
connectDB()

app.use('/api/user',userRoutes)

app.listen(PORT,()=>{
    console.log('server started successfully')
})