var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var app = express();

//create a reference to the imagePath
var imgPath = 'images.txt';

//connect to db
mongoose.connect('mongodb://tritiatimmins:Harley*8@ds019638.mlab.com:19638/tritiadb');

//var port
var port = 3000;

//create the imageSchema
var imageSchema = new mongoose.Schema({
	id: Number,
	img: {data: Buffer, contentType: String}
});

//export model
var Image = mongoose.model('Image', imageSchema);

mongoose.connection.on('open', function(){
	console.error('mongo is open');

	//empty the collection
	Image.remove(function(err){
	 if(err) throw err;
	  console.error('removed old docs');

	//store an image in binary in mongo
	var image = new Image;
	//need to define the img path
	image.img.data = fs.readFileSync(imgPath);
	image.img.contentType = 'image/jpeg';
	image.save(function(err, a){
		if(err) throw err;

		console.error('saved image to mongo');

		app.get('/', function(req, res, next){
			Image.findById(image, function(err, doc){
				if(err) return next(err);
				res.contentType(doc.img.contentType);
				res.send(doc.img.data);
			});
		});

		app.on('close', function (){
			console.error('dropping db');
			mongoose.connection.db.dropDatabase(function(){
			console.error('closing db connection');
			mongoose.connection.close();
			});
		});

		app.listen(port, function(err){
			console.error('server is listening on ', port);
		});

		process.on('SIGINT', function(){
			app.close();
		});

		});
	});
});
