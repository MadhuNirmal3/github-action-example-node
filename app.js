const express = require('express');

const app = express();
const createError = require('http-errors');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res) => res.send('This is a POC for the github workflow!'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
