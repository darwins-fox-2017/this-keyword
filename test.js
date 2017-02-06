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
