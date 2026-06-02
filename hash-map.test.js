import { HashMap } from "./hash-map";

const hashMap = new HashMap();

console.log(hashMap.set('gasi', 'cat'))
console.log(hashMap.set('mimoy', 'aw'))
console.log(hashMap.set('mimoy', 'cat'))
console.log(hashMap.set('mimoy', 'aw'))

test('Test get', () => {
    expect(hashMap.get('gasi').toBe(true));
});