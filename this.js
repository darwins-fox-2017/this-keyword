"use strict"

// GLOBAL CONTEXT
//
// Bisakah kamu mendapatkan versi node yang terinstal menggunakan this ?
// ->bisa
// versions:
//      {
//        node: '7.4.0',
//      }
//
// tuliskan penjelasan yang sudah anda mengerti dari challange ini
// -> this menunjuk ke variabel global
// -> In the global execution context (outside of any function), this refers to the global object, whether in strict mode or not.
//
// -> The this Keyword
// In JavaScript, the thing called this, is the object that "owns" the JavaScript code.
//
// The value of this, when used in a function, is the object that "owns" the function.
//
// The value of this, when used in an object, is the object itself.
//
// The this keyword in an object constructor does not have a value. It is only a substitute for the new object.
//
// The value of this will become the new object when the constructor is used to create an object.

// CLASS CONTEXT
//cotoh menggunakan this

'use strict'

class House {

  constructor (rumah) {
    this.address = rumah['address']
  }
    to_s () {
 return `${this.address} `    }
  }

  let rincian = {
    address: "Jalan Cisitu no 45b, Dago, Coblong, Kota Bandung, Jawa Barat 40135",

  }

  const pertama = new House(rincian)

  console.log(pertama.to_s());
