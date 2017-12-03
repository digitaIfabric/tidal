const fib = (n) => {
  console.log(`Calculating fibonacci number for position ${n}`)
  if (n === 0){
    return 0;
  }
  if (n === 1){
    return 1;
  }

  return fib(n - 1) + fib(n - 2);

}
