import { HashMap } from "./hash-map.js";

const test = new HashMap();

console.log(test.set('gasi', 'cat'))
console.log(test.set('mimoy', 'aw'))
console.log(test.set('mimoy', 'cat'))
console.log(test.set('mimoy', 'aw'))
console.log(test.buckets);
console.log(test.buckets[11]);

console.log(test.get('mimoy'));
console.log(test.get('sagi'));

console.log(test.has('mimoy'));
console.log(test.has('sagi'));
console.log(test.has('sagiasd'));