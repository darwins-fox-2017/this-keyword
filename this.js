"use strict"

// GLOBAL CONTEXT
// Penggunaan this dalam global context:
// Penggunaan pada CLI node.js akan memanggil global object di node tersebut
// Penggunaan pada browser maka akan memanggil object window itu sendiri
// Contoh this di browser :
// >this
// >Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}
// >this == window
// >true
// Contoh penggunaan this di Node.js adalah di file node.txt
// ==>
//
class NodeVersion {
  constructor () {
    this.version = process.version
  }
}

var version = new NodeVersion()
console.log(version.version)

// CLASS CONTEXT
// Contoh penggunaan this dalam sebuah class di JavaScript:

// RELEASE 1
// Output dari pemanggilan this pada node.js menampilkan object node.js, contohnya ada di file node.txt
// Pada Object Oriented Programming JavaScript, class menggunakan this untuk mendeklarasikan global variable pada constructor atau bisa juga memanggil class itu sendiri
// class Test {
//   method() {
//     return this
//   }
// }
