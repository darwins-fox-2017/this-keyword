"use strict"

// GLOBAL CONTEXT
/*
- Pemanggilan this pada node.js merujuk/mengarah pada variabel global 
- Jika pada browser this merujuk pada global objectnya window	
*/

class testing_this {
    constructor (kategori) {
        this.kategori = kategori
    }

    testing() {
        return this.kategori
    }
}

let jenis = new testing_this('Mobil')
console.log(jenis.kategori)


class Version_JS {
	constructor() {
		this.version = process.version
	}	

	js_Version() {
		return this.version
	}

}

let new_version = new Version_JS()
console.log(new_version.js_Version)

// CLASS CONTEXT


// RELEASE 1
