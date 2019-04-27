import { expect, sinon, chai, faker } from '../src/index';

describe('test-helpers', () => {
  it('should expose chai', () => {
    expect(chai).to.exist;
    expect(chai.expect).to.exist.and.to.be.a('function');
    expect(chai.should).to.exist.and.to.be.a('function');
  });

  it('should expose sinon', () => {
    expect(sinon).to.exist;
    expect(sinon.spy).to.exist.and.to.be.a('function');
    expect(sinon.stub).to.exist.and.to.be.a('function');
    expect(sinon.mock).to.exist.and.to.be.a('function');
  });

  it('should expose faker', () => {
    expect(faker).to.exist;
    expect(faker.name).to.exist.and.to.be.an('object');
    expect(faker.address).to.exist.and.to.be.an('object');
    expect(faker.internet).to.exist.and.to.be.an('object');
    expect(faker.random).to.exist.and.to.be.an('object');
  });
});
