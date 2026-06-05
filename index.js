import { HashMap } from "./hash-map.js";

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log('length: ' + test.length());
test.set('moon', 'silver')
test.set('sagit', 'cat');
test.set('sagitas', 'cat');
test.set('sagitas', 'cat');
console.log('length: ' + test.length());
console.log(test.get('dog'));
console.log(test.has('dog'));
console.log(test.entries())

console.log(test.get('sagitas'))
console.log('Values: ' + test.values());

// console.log(test.buckets)

// console.log(test.set('gasi', 'cat'))
// console.log(test.set('sagi', 'miming'))
// console.log(test.set('mimoy', 'aw'))
// console.log(test.set('mimoy', 'cat'))
// console.log(test.set('mimoy', 'aw'))
// console.log(test.buckets);
// console.log(test.buckets[11]);

// console.log('Get')
// console.log(test.get('gasi'));
// console.log(test.get('mimoy'));
// console.log(test.get('sagi'));
// console.log(test.get('sagiasd'));

// console.log(test.has('mimoy'));
// console.log(test.has('sagi'));
// console.log(test.has('sagiasd'));
// console.log(test.has('gasi'));

// console.log(test.buckets);
// console.log(test.remove('mimoy'))
// console.log(test.buckets);
// test.set('mimoy', 'aw')
// console.log(test.buckets);

// console.log(test.length());
// test.set('powder', 'waw')
// console.log(test.length());

// console.log('keys:' + test.keys());

// console.log(test.buckets);
// console.log('values:' + test.values());
// console.log('entries:' + test.entries());

// test.clear();
// console.log(test.buckets);

// console.log('keys:' + test.keys());

// console.log('values:' + test.values());