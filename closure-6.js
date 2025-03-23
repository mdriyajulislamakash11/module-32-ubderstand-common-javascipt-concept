

// 32-6 (advanced) Closure, encapsulation, private variable


function watch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
const count = watch();

console.log(count()) //1
console.log(count()) //2
console.log(count()) //3
console.log(count()) //4
console.log(count()) //5
console.log(count()) //6
console.log(count()) //7
console.log(count()) //8