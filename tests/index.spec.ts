import 'mocha';
import {expect} from 'chai';
import {FifoNumber} from '../src/fifoNumber';
import {Fifo} from '../src/fifo';

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
    expect(fifoNumber.print(false)).to.be.eql([8, 41]);
  });
});

describe(('Generic Fifo'), () => {
  const fifoString :Fifo<string> = new Fifo<string>();
  it(('Push'), () => {
    fifoString.push('a');
    expect(fifoString.pseek()).to.be.equal('a');
  });

  it(('Pop'), () => {
    expect(fifoString.pop()).to.be.equal('a');
  });

  it(('Pseek'), () => {
    fifoString.push('c');
    expect(fifoString.size()).to.be.equal(1);
    expect(fifoString.pseek()).to.be.equal('c');
    expect(fifoString.size()).to.be.equal(1);
  });

  it(('Size'), () => {
    fifoString.push('h');
    expect(fifoString.size()).to.be.equal(2);
  });

  it(('Print'), () => {
    expect(fifoString.print(false)).to.be.eql(['c', 'h']);
  });
});
