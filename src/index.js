import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import faker from '@benmaruchu/faker';
import chai from 'chai';

/* setup chai */
chai.use(sinonChai);
const { expect, should } = chai;

export { chai, expect, faker, should, sinon };
