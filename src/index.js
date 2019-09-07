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
const { fake, mock, restore, spy, stub } = sinon;

export { chai, expect, fake, faker, mock, restore, should, sinon, spy, stub };
