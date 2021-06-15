// #1
const fib = n => {
  if (n <= 2) return 1;
  return fib(n - 2) + fib(n - 1);
}

// #2
const fibo = (n, lst = {}) => {
  if (n in lst) return lst[n];
  if (n <= 2) return 1;
  lst[n] = fibo(n - 1, lst) + fibo(n - 2, lst);
  return lst[n];
}

console.log(fibo(5));

