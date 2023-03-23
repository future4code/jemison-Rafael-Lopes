import { findFirstRecurringCharacter } from "./exercicio1";  

const inputString = "bcdefghiacj";
const firstRecurringChar = findFirstRecurringCharacter(inputString);
const i = performance.now()
findFirstRecurringCharacter(inputString)
const f = performance.now()

console.log(f-i);

console.log(firstRecurringChar);