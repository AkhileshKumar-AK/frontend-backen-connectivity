const express = require('express')
const app = express()
app.get("/app",(req, res)=>{
    res.json({"users": ["1.Apple","2.Pineapple","3.Grape","4.Orange","5.Banana","6.Kiwi","7.Strawberry","8.Jack fruit","9.Mango","10.Watermelon"] })
})
app.listen(5000,() => {console.log("server started on port 5000") }) 