const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose.connect('mongodb+srv://victor:2010Victor30@cluster0.a9zcb.mongodb.net', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};
module.exports = dbConnect;