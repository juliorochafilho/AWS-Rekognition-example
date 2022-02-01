const AWS = require("aws-sdk");

const createcollection = async (req, res) => {
  try {
    console.log(" Creating collection");

    AWS.config.update({
      region: "us-east-1",
    });

    var rekognition = new AWS.Rekognition();

    var params = {
      CollectionId: "test",
    };

    const collection = rekognition.createCollection(
      params,
      function (err, data) {
        if (err) return res.status(500).json(err, err.stack);
        // an error occurred
        else return res.status(200).json(data)// successful response
      }
    );

    return res.status(301)
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = createcollection;
