export class G964 {

    public static calcPrimeNumbers(from: number, to: number): number[] {
        let arr: boolean[] = new Array(to).fill(true);
        arr[0] = false;
        arr[1] = false;
        for (let i=2; i < arr.length; i++){
            if (arr[i] === true){
                for (let j=2; j*i < arr.length; j++){
                   arr[j*i] = false;
                }
            }            
        }
        let ret: number[] = [];
        arr.forEach((val, ind) => {
            if (val === true){
                ret.push(ind);
            }
        })
        ret = ret.filter(p => p >= from);
        return ret;
    }


    public static gap = (g: number, m: number, n: number): number[] | null => {
        let primes = G964.calcPrimeNumbers(m, n);
        if (primes.length < 2){
           return null;
        }
        for (let i=1; i < primes.length; i++) {
           if (primes[i] - primes[i-1] === g){
               return [primes[i-1], primes[i]];
           }
        }
        return null;
    }
        
}





export const lcd = (lst: [number, number][]): string => {
    let gcd = (a: number, b: number): number => {
        if (b === 0)
            return a;
        else
            return gcd(b, (a % b));
    }

    let simplified = lst.map((num) => {
        let divisor = gcd(num[0], num[1])
        return [num[0] / divisor, num[1] / divisor]
    });
    let denoms = simplified.map(l => l[1]).sort((a, b) => b - a);
    let lowest = denoms.reduce((acc, cur) => (acc * cur) / gcd(acc, cur), 1);
    let newFractions = simplified.map((frac) => {
        let top = (lowest / frac[1]) * frac[0];
        return `(${top},${lowest})`;
    })
    let result = newFractions.join('');
    return result;
}


export const longestConsec = (strarr: string[], k: number): string => {
    if (strarr.length === 0 || k === 0 || k > strarr.length) {
        return "";
    }
    let longestString = "";
    for (let i = 0; i <= strarr.length - k; i++) {
        let currString = "";
        for (let j = i; j < i + k; j++) {
            currString += strarr[j];
        }
        longestString = longestString.length >= currString.length ? longestString : currString;
    }
    return longestString;
}

/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
    let ret: number[] = [];
    let commands = data.split('');
    let currValue = 0;
    for (let i = 0; i < commands.length; i++) {
        switch (commands[i]) {
            case ("i"):
                currValue++;
                break;
            case ("d"):
                currValue--;
                break;
            case ("s"):
                currValue = currValue * currValue;
                break;
            case ("o"):
                ret.push(currValue);
                break;
        }
    }
    return ret;
}