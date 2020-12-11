const express = require('express');

const app = express();

const useMiddleware = require('./middleware/index');

const useErrorHandlers = require('./middleware/error-handlers');

const mainRouter = require('./routes/main');
const authRouter = require('./routes/auth');
const ordersRouter = require('./routes/orders');


useMiddleware(app);

app.use('/', mainRouter);
app.use('/auth', authRouter);
app.use('/orders', ordersRouter);

useErrorHandlers(app);

module.exports = app;
