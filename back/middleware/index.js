const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const FileStore = require('session-file-store')(session);
const { cookiesCleaner } = require('./auth');
const dbConnect = require('./db-connect');

module.exports = function useMiddleware(app) {
  app.use(morgan('dev'));
  dbConnect();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());

  app.use(
    session({
      store: new FileStore(),
      key: 'client',
      secret: 'anything string here',
      resave: true,
      saveUninitialized: false,
      cookie: {
        expires: 1000*60*60*10, // cookies lives 5 min
        httpOnly: true,
      },
    }),
  );

  app.use(cookiesCleaner);
};