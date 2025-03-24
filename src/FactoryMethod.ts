class Computer {
  protected cpu: string;
  protected ram: number;
  protected hdd: number;
  protected video: string;

  constructor(cpu: string, ram: number, hdd: number, video: string) {
    this.cpu = cpu;
    this.ram = ram;
    this.hdd = hdd;
    this.video = video;
  }

  printSpecifications(): void {
    console.log(
      `CPU: ${this.cpu}, RAM: ${this.ram}, HDD: ${this.hdd}, Video: ${this.video}`
    );
  }
}

abstract class ComputerStore {
  protected stock: Computer[];

  constructor() {
    this.stock = [];
  }

  abstract addComputerToStock(): void;

  fillStockOfBrand(): void {
    this.addComputerToStock();
    this.addComputerToStock();
    this.addComputerToStock();
    this.addComputerToStock();
  }

  printInventory(): void {
    for (const computer of this.stock) {
      computer.printSpecifications();
    }
  }
}

class HpStore extends ComputerStore {
  addComputerToStock(): void {
    this.stock.push(
      new Computer("HP Pentium III", 1024, 4096, "Geforce 2")
    );
  }
}

class DellStore extends ComputerStore {
  addComputerToStock(): void {
    this.stock.push(
      new Computer("Dell Pentium III", 2048, 4096, "Geforce 2")
    );
  }
}

const hpStore = new HpStore();
const dellStore = new DellStore();

hpStore.fillStockOfBrand();
dellStore.fillStockOfBrand();

hpStore.printInventory();
dellStore.printInventory();
