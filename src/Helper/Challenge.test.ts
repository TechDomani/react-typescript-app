import validBraces from './Challenge';

test('test valid brace function', () => {
   expect(validBraces('(())')).toBe(true);
   expect(validBraces('(){}[]')).toBe(true);
   expect(validBraces('([{}])')).toBe(true);
   expect(validBraces('(}')).toBe(false);
   expect(validBraces('[(])')).toBe(false);
   expect(validBraces('[({})](]')).toBe(false);
});

console.log(validBraces('(())'));
//console.log(validBraces(')()('));
//console.log(validBraces('[(])'));
console.log(validBraces("()")); 