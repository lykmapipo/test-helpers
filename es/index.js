import sinonChai from 'sinon-chai';
import nockChai from 'chai-nock';
import sinon from 'sinon';
export { default as sinon } from 'sinon';
export { default as nock } from 'nock';
import chai from 'chai';
export { default as chai } from 'chai';
export { default as faker } from '@benmaruchu/faker';

/* ensure test environment */
process.env.NODE_ENV = 'test';

/* setup chai */
chai.use(sinonChai);
chai.use(nockChai);
const { expect, should } = chai;

/* setup sinon */
const { fake, mock, restore, spy, stub } = sinon;

export { expect, fake, mock, restore, should, spy, stub };
