/**
 * 
 */
export class Fifo<T> {
  private array :T[]= [];
  constructor() {}
  /**
   * Push - Introduce el valor
   * @param element Introduce el valor en el Fifo genérico
   */
  push(element :T) {
    this.array.push(element);
  };
  /**
   * Pop - Extrae el valor de la estructura Fifo
   * @returns Devuelve el valor extraído
   */
  pop() :T {
    return this.array.pop() as T;
  }
  /**
   * Pseek - Muestra el primer valor de la estructura Fifo introducida
   * @returns Devuelve pero no extrae ese valor
   */
  pseek() :T {
    return this.array[this.size()-1];
  }
  /**
   * Size - Tamaño de la estructura
   * @returns Devuelve el tamaño de la estructura
   */
  size() :number {
    return this.array.length;
  }
  /**
   * Print - Imprime y devuelve la estructura si así se desea
   * @param activeConsole Control de mostrar consola
   * @returns Devuelve la estructura
   */
  print(activeConsole :boolean = true) :T[] {
    if (activeConsole) {
      console.log(this.array);
    }
    return this.array;
  }
};
