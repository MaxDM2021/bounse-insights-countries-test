const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const countriesRouter = require('./routes/api/countries')

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';


app.use(cors());
app.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Origin',
    'https://keen-cascaron-8399a0.netlify.app',
  );
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});


app.use(logger(formatsLogger));
app.use(express.json());


app.use('/api/countries', countriesRouter);


app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app
