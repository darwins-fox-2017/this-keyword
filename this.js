"use strict"

// GLOBAL CONTEXT
/*
  Untuk melihat version pertama menggunakan syntax 'node' terlebih daulu, kemudian
  menuliskan process.version => (node.process.version). Dan untuk melihat method -  method
  yang ada dinode menggunakan syntax 'this'.
*/


// CLASS CONTEXT

class people {
  constructor (name){
    this.resultName = name;
  }
}

let resultPeople = new people ("Eri Irawan");
console.log(resultPeople.resultName);

//Version_JS
class Version_JS {
  constructor() {
    this.version = process.version;
  }
  printVersion(){
    return this.version;
  }
}

let resultVersion = new Version_JS()
console.log(resultVersion.printVersion());

// RELEASE 1
/*
  - parameter yang menggunakan this bisa dipanggil difungsi yang lain, karena sifat dari this
    adalah global.
  - apabila this digunakan di object, this bisa dipakai untuk memanggil properties object tersebut.
  - karena this sifat nya global sehingga this dapat berfungsi untuk mengembangkan nilai properties.
*/
