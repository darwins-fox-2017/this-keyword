"use strict"

// GLOBAL CONTEXT
// node > this
  process:
   process {
     title: 'node',
     version: 'v7.4.0',
     moduleLoadList:
      [ 'Binding contextify',
        'Binding natives',
        'NativeModule events',
        'Binding config',
        'Binding icu',
        'NativeModule util',
        'Binding uv',
        'NativeModule buffer',
        'Binding buffer',
        'Binding util',
        'NativeModule internal/util',
        'NativeModule internal/buffer',
        'NativeModule timers',
        'Binding timer_wrap',
        'NativeModule internal/linkedlist',
        'NativeModule assert',
        'NativeModule internal/process',
        'NativeModule internal/process/warning',
        'NativeModule internal/process/next_tick',
        'NativeModule internal/process/promises',
        'NativeModule internal/process/stdio',
        'Binding constants',
        'NativeModule tty',
        'NativeModule net',
        'NativeModule stream',
        'NativeModule _stream_readable',
        'NativeModule internal/streams/BufferList',
        'NativeModule _stream_writable',
        'NativeModule _stream_duplex',
        'NativeModule _stream_transform',
        'NativeModule _stream_passthrough',
        'NativeModule internal/net',
        'Binding cares_wrap',
        'Binding tty_wrap',
        'Binding tcp_wrap',
        'Binding pipe_wrap',
        'Binding stream_wrap',
        'NativeModule internal/repl',
        'NativeModule readline',
        'NativeModule internal/readline',
        'NativeModule repl',
        'NativeModule internal/module',
        'NativeModule vm',
        'NativeModule path',
        'NativeModule fs',
        'Binding fs',
        'Binding fs_event_wrap',
        'NativeModule internal/fs',
        'NativeModule console',
        'Binding signal_wrap',
        'NativeModule module',
        'NativeModule domain',
        'NativeModule os',
        'Binding os',
        'NativeModule string_decoder' ]

// CLASS CONTEXT
class bike {
  constructor(type,cc) {
    this.type = type
    this.cc = cc
  }

  print() {
    console.log(`motor bertype ${this.type} & memiliki kapasistas ${this.cc}`);
  }
}

let cbr = new bike('sport',250)
cbr.print();

// RELEASE 1
/*
- this yang diakses dari terminal bersifat global contect
- this yang berada dalam class/object, hanya dapat diakses di dalam class tersebut
*/
console.log(process.title);
