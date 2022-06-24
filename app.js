const  express=require("express");
const request=require("request");
const bodyParser=require("body-parser");
const https=require("https");
const cc=require("currency-converter-lt");

const app=express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.get("/",function(req,res){

  res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
  const from=req.body.from;
  const num=req.body.amount;
  const  to=req.body.to;
  let currencyConverter=new cc({
    from: from,
    to: to,
    num: num

  });
   currencyConverter.convert().then((response)=>{
     res.send("<h1>"+num+" "+from+"is equal to"+response*num+" "+to+"</h1>");
   });

})




app.listen(process.env.PORT|3000,function(req,res){
  console.log("my serever is started at 3000");
})
