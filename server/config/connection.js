const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

// mongoURI: 'mongodb+srv://slebron:password7272@cluster0.0g8zrjg.mongodb.net/?retryWrites=true&w=majority'

// const uri = process.env.mongoURI;
// // process.env.config_variable_name

// mongoose
// .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
// .then(() => console.log('MongoDB connected!'))
// .catch(err => console.log('Error:- ' + err));