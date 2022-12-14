import createBlakeHash from 'blake-hash';

const msg = (new TextEncoder()).encode("blake256");
const msgB = Buffer.from(msg)


const toHexString = bytes =>
  bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');

const h1 = createBlakeHash('blake256').digest();



console.log(toHexString(h1));
