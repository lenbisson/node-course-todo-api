//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connected to MongoDB');

  // //deleteMany
  // db.collection('Todos').deleteMany({text: 'A todo to test with'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
// db.collection('Todos').deleteOne({text: 'testing'}).then((result) => {
//   console.log(result.result.ok);
//   console.log(result.result.n);
// })
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //deleteMany
  db.collection('Users').deleteMany({name: 'Len'}).then((result) => {
    console.log(result.result.n);
  });
  //
  db.collection('Users').findOneAndDelete({_id: new ObjectID("582c9942908dab8a84eceb26")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });



//  db.close();
});
