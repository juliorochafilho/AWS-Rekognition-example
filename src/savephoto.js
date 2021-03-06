const AWS = require("aws-sdk");

const savephoto = async (req, res) => {
  try {
    console.log(" Saving photo");

    AWS.config.update({
      region: "us-east-1",
    });

    var rekognition = new AWS.Rekognition();

    var params = {
      CollectionId: "test",
      DetectionAttributes: [],
      ExternalImageId: "myphotoid", // Todo
      Image: {
        S3Object: {
          Bucket: "face-comparing-test",
          Name: "faceid1.jfif",
        },
      },
    };

    const indexFace = rekognition.indexFaces(params, function (err, data) {
      if (err) return res.status(500).json(err, err.stack);
      // an error occurred
      else return res.status(200).json(data) // successful response
    });

    return res.status(301)
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = savephoto;
