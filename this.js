"use strict"

// GLOBAL CONTEXT
/*
dengan mengakses this di REPL node, version dari node bisa di dapatkan seperti yang terlihat dibawah:

> this
{ global: [Circular],
  process:
   process {
     title: 'node',
     version: 'v7.4.0',


*/
// CLASS CONTEXT
/*

Berikut ini adalah contoh class yang telah dibuat:

class House {

  constructor (object) {
    this.address = object['address']
    this.square_feet = object['square_feet']
    this.num_bedrooms = object['num_bedrooms'] || 3
    this.num_baths = object['num_baths'] || 2
    this.cost = object['cost'] || 320000
    this.down_payment = object['down_payment'] || 0.20
    this.sold = object['sold'] || false
    this.short_sale = object['short_sale']
    this.has_tenants = object['has_tenants'] || false
  }

  obscure_address () {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy (money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment () {
    return cost * this.down_payment
  }

  to_s () {
    return `DIJUAL \nAlamat: ${this.obscure_address()} :${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. Harga ${this.cost}`
  }
}

const cool = new House({address: 'Pondok Indah. Aquarius',square_feet: 1000,num_bedrooms: 7,num_baths: 8,cost: 50000000000,down_payment: 10000000000,sold: true,has_tenants: true})

console.log(cool.to_s())
*/

// RELEASE 1
/*
Apabila kita menjalankan 'this' di REPL node, makan output nya adalah spesifikasi dari node itu sendiri termasuk didalamnya ada versi
node.
Apabila menjalankan code diatas di REPL node, maka hasilnya akan sama seperti pada saat dijalankan diluar REPL node. pada saat di REPL node
maka class tersebut akan di simpan dan dapat dipanggil kembali.
*/
