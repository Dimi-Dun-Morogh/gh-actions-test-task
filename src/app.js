class PrintHello {
  constructor(phrase) {
    this.phrase = phrase;
  }
  print() {
    console.log(this.phrase);
  }
}

const helloWorld = new PrintHello('hello world');

helloWorld.print();

module.exports = helloWorld;
