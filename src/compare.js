const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
});

var rekognition = new AWS.Rekognition();

var params = {
  CollectionId: "test",
  FaceId: "2f10c4f17863f0653a09db39c2d91f5a",
  FaceMatchThreshold: 70,
  MaxFaces: 1,
};
rekognition.searchFaces(params, function (err, data) {
  if (err) console.log(err, err.stack);
  // an error occurred
  else console.log(data); // successful response
});
