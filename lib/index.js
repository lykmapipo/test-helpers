'use strict';

const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const faker = require('@benmaruchu/faker');
const chai = require('chai');

/* setup chai */
chai.use(sinonChai);
const { expect, should } = chai;

/* setup sinon */
const { mock, spy } = sinon;

exports.sinon = sinon;
exports.faker = faker;
exports.chai = chai;
exports.expect = expect;
exports.mock = mock;
exports.should = should;
exports.spy = spy;
