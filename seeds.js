





var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var campData = [
	{
		name: "Cloudland",
		image:"https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c85daa025ee04c951b6ac12fe3ba031a&auto=format&fit=crop&w=500&q=60",
		description:"Lorem ipsum dolor amet chia knausgaard mustache selvage. Bushwick ennui dreamcatcher, master cleanse roof party shoreditch fingerstache. Ugh tumblr bushwick thundercats DIY farm-to-table. Taxidermy chartreuse franzen mustache sustainable, photo booth tote bag keffiyeh church-key street art austin chambray drinking vinegar. Migas messenger bag deep v locavore scenester. IPhone vape selvage, hella thundercats williamsburg try-hard scenester copper mug."
	},
	{
	name: "happy",
	image:"https://images.unsplash.com/photo-1465695954255-a262b0f57b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06d92f647a2937af54f658e199c3d990&auto=format&fit=crop&w=500&q=60",
	description:"Freegan polaroid tumeric, bitters kale chips forage XOXO prism squid subway tile roof party master cleanse tacos williamsburg. Cronut tote bag freegan, venmo vinyl drinking vinegar affogato four loko DIY. Taxidermy iPhone vegan squid whatever viral truffaut adaptogen yuccie forage wayfarers. Forage chartreuse tumeric jianbing pok pok craft beer squid godard neutra blue bottle. Neutra flexitarian venmo air plant snackwave pour-over."
	
	},
	{
	name: "wild",
	image:"https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1c8cc988efddbda8746281871c0c8bf&auto=format&fit=crop&w=500&q=60",
	description:"Tacos adaptogen blue bottle enamel pin. Small batch brunch you probably haven't heard of them disrupt try-hard health goth umami occupy. Intelligentsia marfa trust fund, paleo farm-to-table flannel knausgaard freegan roof party. Heirloom jianbing trust fund, direct trade fingerstache biodiesel pickled humblebrag af prism ramps freegan poutine thundercats cronut. Brooklyn waistcoat XOXO, tumblr fashion axe kogi iPhone pinterest trust fund af YOLO. Shaman neutra cardigan umami tote bag master cleanse palo santo tumblr. Thundercats hashtag tbh vexillologist 90's fam."
	}
	];

function seedDB(){
	Campground.remove({}, function(err){
	if(err){
		console.log(err);
	} 
		console.log("removed campgrounds");

	campData.forEach(function(seed){
		Campground.create(seed, function(err, campInfo){
			if(err) {
				console.log(err);
			} else {
				console.log("added a new campground");
                Comment.create(
                    {
                        text:"no pain, no rain, no Maine!",
                        author:"Wise Hiker"


                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else{
                            
                            campInfo.comments.push(comment);
                            campInfo.save();
                            console.log("created new comment");
                            
                        }
                        
                    })
            
			}
		});
	});
});
	
}

module.exports = seedDB;

// var mongoose = require("mongoose");
// var Campground = require("./models/campground");
// // var Comment   = require("./models/comment");
 
// var data = [
//     {
//         name: "Cloud's Rest", 
//         image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     },
//     {
//         name: "Desert Mesa", 
//         image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     },
//     {
//         name: "Canyon Floor", 
//         image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     }
// ]
 
// function seedDB(){
   // Remove all campgrounds
   // Campground.remove({}, function(err){
        // if(err){
            // console.log(err);
        // }
        // console.log("removed campgrounds!");
        // Comment.remove({}, function(err) {
            // if(err){
                // console.log(err);
            // }
            // console.log("removed comments!");
             // add a few campgrounds
            // data.forEach(function(seed){
                // Campground.create(seed, function(err, campground){
                    // if(err){
                        // console.log(err)
                    // } else {
                        // console.log("added a campground");
                        // create a comment
                        // Comment.create(
                            // {
                            //     text: "This place is great, but I wish there was internet",
                            //     author: "Homer"
                            // }, function(err, comment){
                            //     if(err){
                            //         console.log(err);
                            //     } else {
                            //         campground.comments.push(comment);
                            //         campground.save();
                            //         console.log("Created new comment");
                            //     }
                            // });
                    // }
                // });
            // });
        // });
    // }); 
    // add a few comments
// }
 
// module.exports = seedDB;