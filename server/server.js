import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectCloudinary from "./configs/cloudinary.js"

import { clerkMiddleware,requireAuth } from '@clerk/express'
import aiRouter from "./routes/aiRoutes.js"
import userRouter from "./routes/userRoutes.js"

const app=express()
await connectCloudinary()

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())


app.get('/',(req,res)=>{
  res.send('server is Live!')
})

// all the routes has being protected and only logined in users can access them
app.use(requireAuth())

app.use('/api/ai',aiRouter)
app.use('/api/user',userRouter)

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
  console.log(`server is listening at localhost ${PORT}`);
})

