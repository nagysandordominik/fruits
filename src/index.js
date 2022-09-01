import {choice, remove} from './helpers';
import  fruits  from "./foods";

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please`);

console.log(`Here you go:  ${fruit}!`);

console.log(`Tasty, may I have another?`);

let remaining = remove(fruits, fruit);

console.log(`I'm sorry, we are all out, We have ${remaining.length} left`);