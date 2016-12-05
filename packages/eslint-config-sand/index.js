'use strict';

module.exports = {
  extends: [
    '@sandjs/base'
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'script',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {},

  globals: {
    Controller: false, // sand-http Controller
    sand: false, // sand global
    BadRequestError: false,
    ConflictError: false,
    DatabaseError: false,
    ForbiddenError: false,
    GeneralError: false,
    HttpError: false,
    InvalidArgumentError: false,
    NotAuthorizedError: false,
    NotFoundError: false,
    NotImplementedError: false,
    ServerError: false
  }
};
