'use strict';

const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const faker = require('@benmaruchu/faker');
const chai = require('chai');

/* ensure test environment */
process.env.NODE_ENV = 'test';

/* setup chai */
chai.use(sinonChai);
const { expect, should } = chai;

/* setup sinon */
const { fake, mock, restore, spy, stub } = sinon;

exports.sinon = sinon;
exports.faker = faker;
exports.chai = chai;
exports.expect = expect;
exports.fake = fake;
exports.mock = mock;
exports.restore = restore;
exports.should = should;
exports.spy = spy;
exports.stub = stub;
