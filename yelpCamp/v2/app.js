var express    = require("express");
    app        = express();
    bodyParser = require("body-parser");
    mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost/campingDB");    

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//schema set-up
var campgroundSchema = new mongoose.Schema({
	name:String,
	image:String,
	description:String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// {
// 	name:"Wood Chuck", 
// 	image:"https://images.unsplash.com/photo-1475564481606-0f9f5d97c047?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c8e032b27c71d96a59bb540347343ea&auto=format&fit=crop&w=500&q=60",
//     description: "This is a lovely place to overnight.  water source 50 yards to the east."
// }, function(err, campgrounds){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log("Newly created campground: ");
// 		console.log(campgrounds);
// 	}
// }); 
// 
// var campgrounds = [
// 	{name:"Top of Georgia", image:"https://images.unsplash.com/photo-1475564481606-0f9f5d97c047?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c8e032b27c71d96a59bb540347343ea&auto=format&fit=crop&w=500&q=60"},
// 	{name:"Wood Chuck", image:"https://images.unsplash.com/photo-1475564481606-0f9f5d97c047?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c8e032b27c71d96a59bb540347343ea&auto=format&fit=crop&w=500&q=60"},
// 	{name: "Bear Inn", image:"https://images.unsplash.com/photo-1475564481606-0f9f5d97c047?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c8e032b27c71d96a59bb540347343ea&auto=format&fit=crop&w=500&q=60"},
// 	{name:"marshmellows-i", image:"https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=12ad75c31d4e110e677b814a6d61066a&auto=format&fit=crop&w=800&q=60"},
// 	{name:"yellow tent -i", image:"https://images.unsplash.com/photo-1465695954255-a262b0f57b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06d92f647a2937af54f658e199c3d990&auto=format&fit=crop&w=800&q=60"},
// 	{name:"starry night-i", image:"https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0f33e637f4bf5e38b990ee05fdcf318&auto=format&fit=crop&w=500&q=60"},
// 	{name:"great view-i", image:"https://images.unsplash.com/photo-1502943615053-d8bd8c74eb1b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=40d964592f9995ad211152551f466838&auto=format&fit=crop&w=800&q=60"},
// 	{name:"teepee-i", image:"https://images.unsplash.com/photo-1520732713659-8f14034ba7d6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7a330e0a93ad58039a3d719ee837c6a4&auto=format&fit=crop&w=500&q=60"},
// 	{name:"campfire-i", image:"https://images.unsplash.com/photo-1461220830992-5a8d6a54af75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ccd3ffc99d668a52977c5b60113a08cb&auto=format&fit=crop&w=800&q=60"},
// 	{name:"feet view-i", image:"https://images.unsplash.com/photo-1510328891636-a131d5d751e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=54e92653f0bfd76f769d79207b171961&auto=format&fit=crop&w=500&q=60"},
// 	{name:"conifer-i", image:"https://images.unsplash.com/reserve/J3URHssSQyqifuJVcgKu_Wald.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=589423add37e168c0601a481e74569ca&auto=format&fit=crop&w=800&q=60"}

// 	];

app.get("/", function(req, res){
	res.render("landing");
});



app.get("/campgrounds", function(req,res){
	Campground.find({}, function(err, allCampgrounds){
		if (err){
			console.log(err);
		} else {res.render("index", {campgrounds:allCampgrounds});
	}
	});
	

});

app.post("/campgrounds", function(req, res){
	
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {
		name:name,
		image:image,
		description:desc
	}
	//create new campground
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			res.redirect("/campgrounds");
		}
	})
	
})

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
})

app.get("/campgrounds/:id",function(req, res){
	Campground.findById(req.params.id, function (err, foundCampground){
		if(err){
			console.log(err);
		} else { res.render("show", {campgrounds:foundCampground});

		}

	});
	
});

app.listen(8080, function(){
	console.log("happy camping");
});