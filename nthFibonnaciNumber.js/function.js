const fib = (n) => {
    if (n <= 2) return 1
    // return (n + 1) + (n - 2)
    return fib(n - 1) + fib(n - 2)
}


console.log(fib(6))
console.log(fib(50))