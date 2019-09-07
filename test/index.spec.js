import {
  chai,
  expect,
  faker,
  fake,
  mock,
  restore,
  sinon,
  spy,
  stub,
} from '../src';

describe('test-helpers', () => {
  it('should set test environment', () => {
    expect(process.env.NODE_ENV).to.exist.and.be.equal('test');
  });

  it('should expose chai', () => {
    expect(chai).to.exist;
    expect(chai.expect).to.exist.and.to.be.a('function');
    expect(chai.should).to.exist.and.to.be.a('function');
  });

  it('should expose faker', () => {
    expect(faker).to.exist;
    expect(faker.name).to.exist.and.to.be.an('object');
    expect(faker.address).to.exist.and.to.be.an('object');
    expect(faker.internet).to.exist.and.to.be.an('object');
    expect(faker.random).to.exist.and.to.be.an('object');
  });

  it('should expose sinon', () => {
    expect(sinon).to.exist;
    expect(sinon.fake).to.exist.and.to.be.a('function');
    expect(sinon.spy).to.exist.and.to.be.a('function');
    expect(sinon.stub).to.exist.and.to.be.a('function');
    expect(sinon.mock).to.exist.and.to.be.a('function');
    expect(sinon.restore).to.exist.and.to.be.a('function');
  });

  it('should expose sinon shortcuts', () => {
    expect(fake).to.exist.and.to.be.a('function');
    expect(spy).to.exist.and.to.be.a('function');
    expect(stub).to.exist.and.to.be.a('function');
    expect(mock).to.exist.and.to.be.a('function');
    expect(restore).to.exist.and.to.be.a('function');
  });

  it('should spy', () => {
    const dialer = { dial: () => {} };
    const call = number => dialer.dial(number);
    const dialed = spy(dialer, 'dial');

    call();
    expect(dialed).to.have.been.calledOnce;

    dialed.restore();
  });
});
