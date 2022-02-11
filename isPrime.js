let number = 1;

const isPrime = n => {
    let isPrime = true;
    for (let i=2; i<n; i++){
        if (n % i === 0) isPrime = false;
    }
    return isPrime;
}

let primes = [];

let start = Date.now();

while (number < 100000) {
    if (isPrime(number)) primes.push(number);
    number++;
}

console.log(primes.length);

console.log(Date.now()-start);