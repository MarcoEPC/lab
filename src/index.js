const express=require("express")
const app=express()

app.get('/',(req,res)=>{
	res.send("Epc Lab")
})

app.listen(3000,()=>{
	console.log("ok")
})
