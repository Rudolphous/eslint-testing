// test for Array.prototype.at() - iOS Safari >= 15.0
const arr = [10, 20, 30];
console.log(arr.at(-1));

// test for WeakRef - iOS Safari >= 15.4
console.log(new WeakRef({}));

// test for static response which only works on safari 17+
console.log(Response.json('{}'));

// test for BigInt
console.log(BigInt(1234567890123456789012345));

// test for BigInt
console.log(1n);

// test for fetch
fetch('/data').then(response => response.json());

// test for Intl.DisplayNames iOS Safari >= 15.4
console.log(new Intl.DisplayNames(['en'], { type: 'region '}));
