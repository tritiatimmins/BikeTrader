var multipart = require('connect-multiparty');

app.use(multipart({
  uploadDir: 'api/post'
}));


// create file upload
exports.create = function(req, res, next) {
  var data = _.pick(req.body, 'type');
  var uploadPath = path.normalize(fcg.data + '/uploads');
  var file = req.files.file;

  console.log('file.name', file.name); //original file name
  console.log('file.path', file.path); //tmp path
  console.log('uploadPath', uploadPath); // uploads directory
};