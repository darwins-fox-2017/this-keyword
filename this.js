"use strict"

// GLOBAL CONTEXT

Dalam global context, this merujuk kepada variabel global class/function dimana this tersebut dipanggil.

Dalam Node REPL, pada saat kita memanggil menggunakan perintah this, semua function dan class yang tersedia pada node akan muncul. Untuk mengetahui versi node yang digunakan, cukup dengan menuliskan perintah this.process.version.

pada saat kita menuliskan this.<class>, akan mucul isi property dari tiap class yang dirujuk.
ex : this.process.versions akan menghasilkan :

{ http_parser: '2.7.0',
  node: '6.9.1',
  v8: '5.1.281.84',
  uv: '1.9.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '57.1',
  modules: '48',
  openssl: '1.0.2j'
}

// CLASS CONTEXT

pada saat this di panggil dalam suatu class, this merujuk kepada class parent terdekat. Sebagai contoh, pada saat kita memanggil method_a pada suatu class Hitung di dalam method lain (katakanlah method_b), kita menuliskan dengan perintah this.<method_b> dan akan dicari pada class Hitung (class perent terdekat) method dengan nama method_b.


// RELEASE 1

secara umum, this bisa diistilahkan dengan arti "ini", yang merujuk kepada class parent terdekat dimana this berada.
