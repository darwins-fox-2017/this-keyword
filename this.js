"use strict"

// GLOBAL CONTEXT

// Bisa kah kamu mendapatkan versi node yang terinstall menggunakan this ? BISA
// let counter = {
//   val : 0,
//   increment: function() {
//       this.val += 1
//     }
//   }
// }

// CLASS CONTEXT


// RELEASE 1
class contohClass {
  constructor(name) {
    this.name = name
  }
}

let kelasBaru = new contohClass("Test")
console.log(kelasBaru.name)
