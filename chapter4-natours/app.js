const express = require('express');
const morgan = require('morgan');
const app = express();
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
app.use(express.json());

// 1-Middlewares
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('MIDDLEWARES');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3-Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4-Start server
module.exports = app;
