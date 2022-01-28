const AWS = require("aws-sdk");

module.exports = (req, res) => {
  var rekognition = new AWS.Rekognition();
  AWS.config.update({ region: "us-east-1" });
  
  var params = {
    CollectionId: "initialTest",
    DetectionAttributes: [],
    ExternalImageId: "myphotoid", // Todo
    Image: {
      S3Object: {
        Bucket: "face-comparing-test",
        Name: "faceid4.jfif",
      },
    },
  };

  rekognition.indexFaces(params, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
};
