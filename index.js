const express=require('express');
const app=express();
var a=[];
const bodyParser=require('body-parser');
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));
app.get("/",function(req,res){
    res.render('sorted',{DIV:a});
})

app.post("/",function(req,res){
    a=[];    
for(var i=0;i<20;i++){
    var c=Math.random();

    c=c*20;
    c=Math.floor(c);
    
    a.push(c);
}
res.render('sorted',{DIV:a})
console.log(a);
})
app.listen(3000,function(){
    console.log("yah..")
})
