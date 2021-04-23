import { validBraces } from './Challenge';
import { fizzBuzz } from './Challenge';

test('test valid brace function', () => {
   expect(validBraces('(())')).toBe(true);
   expect(validBraces('(){}[]')).toBe(true);
   expect(validBraces('([{}])')).toBe(true);
   expect(validBraces('(}')).toBe(false);
   expect(validBraces('[(])')).toBe(false);
   expect(validBraces('[({})](]')).toBe(false);
});

test('test fizzbuzz function working correctly', () => {
   expect(fizzBuzz(2)).toBe('2');
   expect(fizzBuzz(3)).toBe('Fizz');
   expect(fizzBuzz(6)).toBe('Fizz');
   expect(fizzBuzz(5)).toBe('Buzz');
   expect(fizzBuzz(10)).toBe('Buzz');
   expect(fizzBuzz(15)).toBe('FizzBuzz');
   expect(fizzBuzz(30)).toBe('FizzBuzz');
   expect(fizzBuzz(14)).toBe('14');
})
