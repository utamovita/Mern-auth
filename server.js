/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB config
const db = config.get('mongoURI');

// connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(`MongoDB connection failed, error: ${err}`));

// Use Routes
app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started and running on port ${port}`));
