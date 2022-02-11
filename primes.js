let primes = [1, 2];
let number = 2;
let i = 1;

let start = Date.now();

while (number < 100000) {
  while (number % primes[i] !== 0 && i < primes.length) {
	i++;
  }
	if (i === primes.length) {
		primes.push(number);
	}
	number++;
	i = 1;
};

console.log(primes.length);

console.log(Date.now()-start);