import sinonChai from 'sinon-chai';
import nockChai from 'chai-nock';
import sinon from 'sinon';
import nock from 'nock';
import chai from 'chai';
import faker from '@benmaruchu/faker';

/* ensure test environment */
process.env.NODE_ENV = 'test';

/* setup chai */
chai.use(sinonChai);
chai.use(nockChai);
const { expect, should } = chai;

/* setup sinon */
const { fake, mock, restore, spy, stub } = sinon;

export {
  chai,
  nock,
  expect,
  fake,
  faker,
  mock,
  restore,
  should,
  sinon,
  spy,
  stub,
};
