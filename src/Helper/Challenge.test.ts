import { validBraces } from './Challenge';
import { fizzBuzz } from './Challenge';
import { anagram } from './Challenge';
import { spinWords } from './Challenge';

test('test words spun correctly', () => {
  expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw"); 
  expect(spinWords("This is a test")).toBe("This is a test");
  expect(spinWords("This is another test")).toBe("This is rehtona test");  
})

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
});

test('test anagrams grouped correctly', () => {
   let words = ["star", "wrong", "car", "arc", "arts", "stars"];
   let results = [ [ 'star', 'arts' ], [ 'wrong' ], [ 'car', 'arc' ], [ 'stars' ] ];
   expect(anagram(words)).toStrictEqual(results);
})
