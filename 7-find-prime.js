function sieveOfEratosthenes(n) {
  let primes = Array(n + 1).fill(true)
  primes[0] = primes[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes.reduce((acc, isPrime, index) => {
    if (isPrime) acc.push(index);
    return acc
  }, [])

}

const result = sieveOfEratosthenes(10)

console.log(result)