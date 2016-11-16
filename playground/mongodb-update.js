//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connected to MongoDB');

// findOneAndUpdate
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectId("582b7663d7fb3911b779fe75")
//
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((res) => {
//   console.log(res);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectId("582b75f9d94b68758880222b")
}, {
  $set: {
    name: "Len"
  },
  $inc: {age: 10}
}, {
  returnOriginal: false
}).then((res) => {
  console.log(res);
});
//  db.close();
});
