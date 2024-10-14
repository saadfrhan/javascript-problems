const n = 5;
let n1 = 0;
let n2 = 1;
let nextTerm;

console.time("Iterative");
for (let i = 1; i <= 5; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
console.timeEnd("Iterative")

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time("Recursion");
fibonacci(n)
console.timeEnd("Recursion")