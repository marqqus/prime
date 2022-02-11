let primes = [1, 2];
let number = 2;
let i = 1;

while (number < 100) {
  while (number % primes[i] !== 0 && i < primes.length) {
	i++;
  }
	if (i === primes.length) {
		primes.push(number);
	}
	number++;
	i = 1;
};

const showPrimes = () => {
		document.getElementById('primes').innerHTML=calcPrimes(100);
}

const calcPrimes = max => {
	let primes = [1, 2];
	let number = 2;
	let i = 1;
	while (number < max) {
		while (number % primes[i] !== 0 && i < primes.length) {
		i++;
		}
		if (i === primes.length) {
			primes.push(number);
		}
		number++;
		i = 1;
	};
	return primes;
}