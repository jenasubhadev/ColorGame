var express = require("express");
var app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
	res.render("colorGame");
});

const PORT=3000;

app.listen(process.env.PORT || PORT, process.env.IP,function(){
	console.log("server has started", process.env.PORT || PORT);
});
