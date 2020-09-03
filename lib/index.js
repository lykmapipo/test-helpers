'use strict';

const sinonChai = require('sinon-chai');
const nockChai = require('chai-nock');
const sinon = require('sinon');
const nock = require('nock');
const chai = require('chai');
const faker = require('faker');

/* ensure test environment */
process.env.NODE_ENV = 'test';

/* setup chai */
chai.use(sinonChai);
chai.use(nockChai);
const { expect, should } = chai;

/* setup sinon */
const { fake, mock, restore, spy, stub } = sinon;

exports.sinon = sinon;
exports.nock = nock;
exports.chai = chai;
exports.faker = faker;
exports.expect = expect;
exports.fake = fake;
exports.mock = mock;
exports.restore = restore;
exports.should = should;
exports.spy = spy;
exports.stub = stub;
