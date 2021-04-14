import 'mocha';
import {expect} from 'chai';
import {Calculator} from '../src/calculator';


const calculadora :Calculator = new Calculator();

describe('Calculadora', () => {
  it(('Suma'), () => {
    expect(calculadora.add(2, 2)).to.be.equal(4);
  });

  it('Resta', () =>{
    expect(calculadora.substraction(4, 2)).to.be.equal(2);
  });
});
