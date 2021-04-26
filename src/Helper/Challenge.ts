export const validBraces = (braces: string): boolean => {
  let stack: string[] = [];
  let start: string[] = ['{', '[', '('];
  let end: string[] = ['}', ']', ')'];
  let values: string[] = braces.split('');
  for (let i = 0; i < values.length; i++) {
    let value: string = values[i];
    if (start.indexOf(value) != -1) {
      stack.push(values[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let pos = end.indexOf(value);
      if (stack[stack.length - 1] === start[pos]) {
        stack.pop();
      }
      else {
        return false;
      }
      continue;
    }
  }

  return stack.length === 0;
}

export const fizzBuzz = (num: number): string => {
  let ret = '';
  if (num % 3 == 0){
    ret += 'Fizz';
  } 
  if (num % 5 == 0){
    ret += 'Buzz';
  }
  ret = ret.length > 0 ? ret : num.toString();
  return ret;
}

export const anagram = (words: string[]): string[][] => {
  let sortedWords = new Map<string, string[]>();
  words.forEach((w) => {
    const letters = w.split('');
    let key = letters.sort().join('');
    let val = sortedWords.get(key);
    if (val){
      val.push(w);      
    } else {
      val = [w];
    }
    sortedWords.set(key, val);
  })
  let values = Array.from(sortedWords.values());    
  //console.log(values);
  return values;
}