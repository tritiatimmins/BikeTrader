//prototype/draft of how the image storing will work.

var BikeImages = require('mongodb').BikeImages,
	Grid = mongo.Grid;

//connect ot the db
BikeImages.connect('mongodb://tritiatimmins:Harley*8@ds019638.mlab.com:19638/tritiadb', function(err, db){
	if(err) return console.dir(err);
	var grid = new Grid(db, 'fs');
	var buffer = new Buffer('Images stored!');
	grid.put.(buffer, {metadata:{category:'text'}, content_type: 'text'}, function(err, fileInfo){
		grid.get(fileInfo._id, function(err, data){
			console.log("Retrieved data:" + data.toString());
			grid.delete(fileInfo._id, function(err, result){

			});
		});
	});
});

// Example from mongo docs on how to use an fs grid
// MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
//   if(err) return console.dir(err);

//   var grid = new Grid(db, 'fs');
//   var buffer = new Buffer("Hello world");
//   grid.put.(buffer, {metadata:{category:'text'}, content_type: 'text'}, function(err, fileInfo) {
//     grid.get(fileInfo._id, function(err, data) {
//       console.log("Retrieved data: " + data.toString());
//       grid.delete(fileInfo._id, function(err, result) {
//       });
//     });
//   });
// });