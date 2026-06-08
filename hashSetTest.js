import { HashSet } from "./hash-set.js";

const hashSet = new HashSet();

hashSet.set('aw');
hashSet.set('banana');
hashSet.set('dfg');

console.log(hashSet.buckets)