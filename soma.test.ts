import { soma } from './soma';

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(message);
}

assert(soma(2, 3) === 5, 'Error: 2 + 3 should be 5');
assert(soma(0, 0) === 0, 'Error: 0 + 0 should be 0');
assert(soma(-1, 1) === 0, 'Error: -1 + 1 should be 0');

console.log('All tests passed!');