const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = cb => {
  MongoClient.connect(
    "mongodb+srv://jiraties:I6ypznfi4assh7uA@cluster0.uvbti.mongodb.net/?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log("Connected to MongoDB");
      cb(client);
    })
    .catch(err => console.log(err));
};

module.exports = mongoConnect;
