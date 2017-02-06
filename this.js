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

// Output dari pemanggilan this pada node.js yaitu semua isi path maupun version di sistem node.js.
// Dan jika membuat class baru pada node.js tersebut akan bisa dipanggil lagi isi dari class-nya dengan menggunakan this.
