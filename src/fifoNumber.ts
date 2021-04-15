import {Fifo} from './fifo';

export class FifoNumber {
  private arrayNumber :Fifo<number> = new Fifo<number>();
  constructor() {
  }

  push(element :number) {
    this.arrayNumber.push(element);
  };

  pop() :Number {
    return this.arrayNumber.pop();
  }

  pseek() :number {
    return this.arrayNumber.pseek();
  }

  size() :number {
    return this.arrayNumber.size();
  }

  print() :number[] {
    return this.arrayNumber.print();
  }
};

const fifoNumber :FifoNumber = new FifoNumber();

fifoNumber.push(7);

fifoNumber.print();

fifoNumber.print();

console.log(fifoNumber.pseek());
