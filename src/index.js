const express=require("express")
const app=express()

app.get('/',(req,res)=>{
	res.send("Epc Lab")
})

app.listen(8080,()=>{
	console.log("ok")
})
