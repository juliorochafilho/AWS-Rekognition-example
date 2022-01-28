const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
});

var rekognition = new AWS.Rekognition();

var params = {
  CollectionId: "test",
};

rekognition.createCollection(params, function (err, data) {
  if (err) console.log(err, err.stack);
  // an error occurred
  else console.log(data); // successful response{
});
