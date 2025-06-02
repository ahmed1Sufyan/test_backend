import express from 'express'

const app = express()
app.use("/health",(req,res)=>{
    res.json({
        msg : "Everything is ok"
    })
})

app.listen(7000,()=>{
    console.log("server is listening on port 7000");
    
})