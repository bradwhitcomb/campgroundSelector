var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
	{name:"Top of Georgia", image:"https://images.unsplash.com/photo-1475564481606-0f9f5d97c047?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c8e032b27c71d96a59bb540347343ea&auto=format&fit=crop&w=500&q=60"},
	{name:"Wood Chuck", image:"https://images.unsplash.com/photo-1475564481606-0f9f5d97c047?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c8e032b27c71d96a59bb540347343ea&auto=format&fit=crop&w=500&q=60"},
	{name: "Bear Inn", image:"https://images.unsplash.com/photo-1475564481606-0f9f5d97c047?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c8e032b27c71d96a59bb540347343ea&auto=format&fit=crop&w=500&q=60"}
	];

app.get("/", function(req, res){
	res.render("landing");
});



app.get("/campgrounds", function(req,res){""

	res.render("campgrounds", {campgrounds:campgrounds});

})

app.post("/campgrounds", function(req, res){
	
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {
		name:name,
		image:image,
	}
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
})



app.listen(8080, function(){
	console.log("happy camping");
});