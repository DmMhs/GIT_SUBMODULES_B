const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const { routes } = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(routes);

app.listen(100, () => {
  console.log('Listening on 100');
});