var express       = require("express");
    app           = express();
    bodyParser    = require("body-parser");
    mongoose      = require("mongoose");
    Campground    = require("./models/campground");
    seedDB	      = require("./seeds");
    Comment       = require("./models/comment");
    passport      = require("passport");
    LocalStrategy = require("passport-local");
    User          = require("./models/user");

 var commentRoutes    = require("./routes/comments");   
     campgroundRoutes = require("./routes/campgrounds");   
     indexRoutes      = require("./routes/index");   


 seedDB(); 

 //Passport config

 app.use(require("express-session")({
 	secret:"i am the god of hell fire",
 	resave: false,
 	saveUninitialized: false
 }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function (req,res,next){
	res.locals.currentUser = req.user;
	next();
});
mongoose.connect("mongodb://localhost/campingDB");    

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))


app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use(commentRoutes);











app.listen(8080, function(){
	console.log("happy camping");
})








