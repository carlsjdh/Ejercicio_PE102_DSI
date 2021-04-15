import 'mocha';
import {expect} from 'chai';
import {FifoNumber} from '../src/fifoNumber';

describe('Fifo Number', () => {
  const fifoNumber = new FifoNumber();
  it(('Push'), () => {
    fifoNumber.push(5);
    expect(fifoNumber.pseek()).to.be.equal(5);
  });

  it(('Pop'), () => {
    expect(fifoNumber.pop()).to.be.equal(5);
  });

  it(('Pseek'), () => {
    fifoNumber.push(8);
    expect(fifoNumber.size()).to.be.equal(1);
    expect(fifoNumber.pseek()).to.be.equal(8);
    expect(fifoNumber.size()).to.be.equal(1);
  });

  it(('Size'), () => {
    fifoNumber.push(41);
    expect(fifoNumber.size()).to.be.equal(2);
  });

  it(('Print'), () => {
    expect(fifoNumber.print()).to.be.eql([8, 41]);
  });
});
