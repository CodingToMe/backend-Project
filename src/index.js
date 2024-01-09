// require('dotenv').config({path:'./env'})
// import mongoose from 'mongoose'
// import { DB_Name } from './constants'
// import { express } from 'express'
import connectDB from './db/index.js'
import dotenv from 'dotenv'

dotenv.config({
    path:'./env'
})
connectDB()




// const app =express()
// // IFFI function and connect to mongoDB 1 approach
// (async()=>{
//     try{
//            await mongoose.connect(`${process.env.MONGODB_URI }/${DB_Name}`)
//         app.on("error",(error)=>{
//             console.log("Error: ",error)
//             throw error
//         })

//         app.listen(process.env.PORT ,()=>{
//             console.log(`app is listing on ${process.env.PORT}`)
//         })

//     }catch(err){
//         console.error("ERROR:- ",err)
//         throw err
//     }
// })()