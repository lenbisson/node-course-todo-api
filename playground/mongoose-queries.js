const {mongoose} = require('./../server/db/mongoose.js');
const {User} = require('./../server/models/user.js');

var id = '582ca9aba2bc1a7a98d2c223';

User.findById(id).then((user) =>{
  if (!user){
    return console.log('User Id not found');
  }
  console.log('User: ', user);
}).catch((e) => console.log(e));
