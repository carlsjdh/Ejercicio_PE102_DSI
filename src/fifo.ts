export class Fifo<T> {
  private array :T[]= [];
  constructor() {}

  push(element :T) {
    this.array.push(element);
  };

  pop() :T {
    return this.array.pop() as T;
  }

  pseek() :T {
    return this.array[this.size()-1];
  }

  size() :number {
    return this.array.length;
  }

  print() :T[] {
    console.log(this.array);
    return this.array;
  }
};

const fifo_number = new Fifo<number>();

fifo_number.push(5);

fifo_number.print();

fifo_number.push(6);

fifo_number.print();

console.log(fifo_number.pseek());

fifo_number.print();

fifo_number.pop();

fifo_number.print();

const fifo_string = new Fifo<string>();