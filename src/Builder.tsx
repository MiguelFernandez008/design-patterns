class BuildComputer {
  protected cpu: string;
  protected ram: number;
  protected hdd: number;
  protected video: string;

  constructor() {}

  assembleCPU(): void {
    this.cpu = "Pentium III";
  }
  assembleMemory(): void {
    this.ram = 1024;
  }
  assembleHDD(): void {
    this.hdd = 4096;
  }
  assembleVideoCard(): void {
    this.video = "GeForce 2";
  }

  specs(): string {
    return `CPU: ${this.cpu}, RAM: ${this.ram}, HDD: ${this.hdd}, Video: ${this.video}`;
  }
}

const builder: BuildComputer = new BuildComputer();
builder.assembleCPU();
builder.assembleMemory();
builder.assembleHDD();
builder.assembleVideoCard();
builder.specs();
