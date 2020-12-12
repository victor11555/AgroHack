const mongoose = require('mongoose');

const dbConnect = () => {
  // mongoose.connect('mongodb+srv://victor:2010Victor30@cluster0.a9zcb.mongodb.net', {
  mongoose.connect('mongodb://localhost:27017/AGROHACK' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};
module.exports = dbConnect;
