import { HashMap } from "./hash-map.js";

const test = new HashMap();

console.log(test.set('gasi', 'cat'))
console.log(test.set('sagi', 'miming'))
console.log(test.set('mimoy', 'aw'))
console.log(test.set('mimoy', 'cat'))
console.log(test.set('mimoy', 'aw'))
console.log(test.buckets);
console.log(test.buckets[11]);

console.log('Get')
console.log(test.get('gasi'));
console.log(test.get('mimoy'));
console.log(test.get('sagi'));
console.log(test.get('sagiasd'));

console.log(test.has('mimoy'));
console.log(test.has('sagi'));
console.log(test.has('sagiasd'));
console.log(test.has('gasi'));

console.log(test.buckets);
console.log(test.remove('mimoy'))
console.log(test.buckets);
test.set('mimoy', 'aw')
console.log(test.buckets);

console.log(test.length());
test.set('powder', 'waw')
console.log(test.length());

console.log('keys:' + test.keys());

console.log(test.buckets);
test.clear();
console.log(test.buckets);

console.log('keys:' + test.keys());