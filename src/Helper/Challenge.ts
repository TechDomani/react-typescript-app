const validBraces = (braces: string): boolean => {
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

export default validBraces;