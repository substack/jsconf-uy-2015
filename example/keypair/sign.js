var EC = require('elliptic').ec;
var e = new EC('ed25519')
var k = e.genKeyPair()
var buf = Buffer(k.sign(Buffer('cool beans')).toDER())
console.log(buf.toString('hex'))
