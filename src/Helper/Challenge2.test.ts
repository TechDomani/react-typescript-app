import { longestConsec } from './Challenge2';
import { lcd } from './Challenge2';
import { G964 } from './Challenge2';

test('test primes are correct', () => {
    expect(G964.calcPrimeNumbers(0, 10)).toStrictEqual([2, 3, 5, 7])
})

test('test lcd returned', () => {
    expect(lcd([[1, 2], [1, 3], [1, 4]])).toBe("(6,12)(4,12)(3,12)"); 
    expect(lcd([[69, 130], [87, 1310], [9, 12]])).toBe("(18078,34060)(2262,34060)(25545,34060)"); 
})

test('test longest word returned', () => {
  expect(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)).toBe("folingtrashy"); 
  expect(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)).toBe("oocccffuucccjjjkkkjyyyeehh"); 
 
})
