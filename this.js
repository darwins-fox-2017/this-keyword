"use strict"

 /*GLOBAL CONTEXT
Jika pemanggilan this pada node.js maka akan merujuk pada global object di node tersebut.
Jika pemanggilan this pada browser maka global object-nya window pada browser tersebut.
Contoh penggunaan Global context;
	class Animal {
  		constructor (habitat){
    		this.habitat = habitat;
  		}
	}
let varNew = new Animal ();
console.log(varNew.Animal());

//Class context;
class animal{
	constructor(animal)
	this.jenis = animal["jenis"]
	this.berkebang_biak = animal["bekembang_biak"]
}
// RELEASE 1
/*
  - parameter yang menggunakan this bisa dipanggil difungsi yang lain, karena sifat dari this
    adalah global.
  - this yang di gunakan di object. This dapat memanggil property object.
  - karena this sifat nya global.this dapat berfungsi untuk mengembangkan nilai properties.
*/
