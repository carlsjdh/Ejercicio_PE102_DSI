import {Fifo} from './fifo';

/**
 * Clase Fifo Number
 */
export class FifoNumber {
  /**
   * Atributo privado donde guarda el Fifo genérico de Number
   */
  private arrayNumber :Fifo<number> = new Fifo<number>();

  /**
   * Constructor de la clase Fifo
   */
  constructor() {
  }

  /**
   * Push - Introduce el valor en el tipo de datos Fifo
   * @param element Elemento number
   */
  push(element :number) {
    this.arrayNumber.push(element);
  };

  /**
   * Pop - Extrae el valor
   * @returns Devuelve el valor extraído
   */
  pop() :Number {
    return this.arrayNumber.pop();
  }
  /**
   * Pseek - Muestra el último valor sin extraerlo
   * @returns Devuelve el último valor introducido sin extraerlo
   */
  pseek() :number {
    return this.arrayNumber.pseek();
  }
  /**
   * Size - Tamaño de la estructura de datos Fifo
   * @returns Devuelve el tamaño del Fifo
   */
  size() :number {
    return this.arrayNumber.size();
  }
  /**
   * Print - Imprimre por pantalla
   * devolviendo el array de Fifo
   * @param activateConsole Controla si el usuario
   * quiere mostrar por consola o no la estructura
   * @returns Devuelve la estructura
   */
  print(activateConsole :boolean = true) :number[] {
    return this.arrayNumber.print(activateConsole);
  }
};
