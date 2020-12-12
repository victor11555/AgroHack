const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
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
        expires: 1000 * 60 * 60, // cookies lives 1 hour
        httpOnly: true,
      },
    }),
  );
  app.use(cors());

  app.use(cookiesCleaner);
};
