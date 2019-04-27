import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import faker from '@benmaruchu/faker';
import chai from 'chai';

/* ensure test environment */
process.env.NODE_ENV = 'test';

/* setup chai */
chai.use(sinonChai);
const { expect, should } = chai;

/* setup sinon */
const { mock, spy } = sinon;

export { chai, expect, faker, mock, should, sinon, spy };
