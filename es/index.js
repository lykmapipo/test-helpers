import sinonChai from 'sinon-chai';
import sinon from 'sinon';
export { default as sinon } from 'sinon';
export { default as faker } from '@benmaruchu/faker';
import chai from 'chai';
export { default as chai } from 'chai';

/* setup chai */
chai.use(sinonChai);
const { expect, should } = chai;

/* setup sinon */
const { mock, spy } = sinon;

export { expect, mock, should, spy };
