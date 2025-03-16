abstract class TextFile {
  protected extension: string = "";

  constructor(extension: string) {
    this.extension = extension;
  }

  abstract clone(): TextFile;
}

class SourceFile extends TextFile {
  protected length: number = 0;

  constructor(extension: string, length: number) {
    super(extension);
    this.length = length;
  }

  clone(): TextFile {
    return new SourceFile(this.extension, this.length);
  }

  toString(): string {
    return `Extension: ${this.extension}, Length: ${this.length}`;
  }
}

const originSource = new SourceFile(".txt", 4096);
const sources: Array<TextFile> = [];
sources.push(originSource.clone());
sources.push(originSource.clone());
sources.push(originSource.clone());
sources.push(originSource.clone());
sources.push(originSource.clone());
sources.push(originSource.clone());
sources.push(originSource.clone());

sources.forEach((s: TextFile) => {
  const source = s as SourceFile;
  console.log(source.toString());
});
