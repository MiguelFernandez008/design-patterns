class Ps2Interface {
  sendSignal(signal: string): void {
    console.log(signal);
  }
}

class USBMouse {
  protected connector: Adapter;

  constructor(connector?: Adapter) {
    this.connector = connector;
  }

  move(direction: string): void {
    if (typeof this.connector !== "undefined") {
      this.connector.sendSignal(direction);
      return;
    }
    console.log(`Sending USB signal to move in ${direction} direction...`);
  }
}

abstract class Adapter {
  protected connector: Ps2Interface;
  constructor(connector: Ps2Interface) {
    this.connector = connector;
  }
  abstract sendSignal(direction: string): void;
}

class Ps2USBAdapter extends Adapter {
  constructor(connector: Ps2Interface) {
    super(connector);
  }

  sendSignal(direction: string): void {
    this.connector.sendSignal(`Sending Ps2 signal to move in ${direction} direction...`);
  }
}

class SerialUSBAdapter extends Adapter {
  constructor(connector: Ps2Interface) {
    super(connector);
  }

  sendSignal(direction: string): void {
    this.connector.sendSignal(`Sending Serial signal to move in ${direction} direction...`);
  }
}

const ps2Connector = new Ps2Interface();
const ps2Adapter = new Ps2USBAdapter(ps2Connector);
const serialAdapter = new SerialUSBAdapter(ps2Connector);
const mouse = new USBMouse();
const adaptedps2Mouse = new USBMouse(ps2Adapter);
const adaptedSerialMouse = new USBMouse(serialAdapter);

mouse.move("up");
adaptedps2Mouse.move("down");
adaptedSerialMouse.move("left");