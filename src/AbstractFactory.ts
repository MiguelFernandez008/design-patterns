class Ordenador {
  protected procesador: string;
  protected ram: number;
  protected disco: number;

  constructor(procesador: string, ram: number, disco: number) {
    this.procesador = procesador;
    this.ram = ram;
    this.disco = disco;
  }
}

class OrdenadorSobremesa extends Ordenador {
  public DVD: string;
  constructor(procesador: string, ram: number, disco: number, dvd: string) {
    super(procesador, ram, disco);
    this.DVD = dvd;
  }
}

class OrdenadorPortatil extends Ordenador {
  public bateria: number;
  constructor(procesador: string, ram: number, disco: number, bateria: number) {
    super(procesador, ram, disco);
    this.bateria = bateria;
  }
}

abstract class Factoria {
  abstract crearOrdenadorSobremesa(
    procesador: string,
    ram: number,
    disco: number,
    dvd: string
  ): OrdenadorSobremesa;
  abstract crearOrdenadorPortatil(
    procesador: string,
    ram: number,
    disco: number,
    bateria: number
  ): OrdenadorPortatil;
}

class FactoriaOrdenadores extends Factoria {
  crearOrdenadorSobremesa(
    procesador: string,
    ram: number,
    disco: number,
    dvd: string
  ): OrdenadorSobremesa {
    return new OrdenadorSobremesa(procesador, ram, disco, dvd);
  }
  crearOrdenadorPortatil(
    procesador: string,
    ram: number,
    disco: number,
    bateria: number
  ): OrdenadorPortatil {
    return new OrdenadorPortatil(procesador, ram, disco, bateria);
  }
}

const factoria: Factoria = new FactoriaOrdenadores();
factoria.crearOrdenadorPortatil("Pentium III", 1024, 4069, 48);
factoria.crearOrdenadorPortatil("Pentium III", 1024, 4069, 6);
