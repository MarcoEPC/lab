const express=required("express")
const app=express()

app.get('/',(req,res)=>{
	res.send("Olá mundo")
})

app.listen(8000,()=>{
	console.log("Servidor ok")
})
