const { connect, connection } = require('mongoose');

connect('mongodb://localhost/newsocial', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;

