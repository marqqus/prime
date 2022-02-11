
const showPrimes = () => {
		document.getElementById('primes').innerHTML=calcPrimes();
}

const calcPrimes = () => {
	let max = prompt("What is the maximum number?");
	let primes = [1, 2];
	let number = 2;
	let i = 1;
	while (number <= max) {
		while (number % primes[i] !== 0 && i < primes.length) {
		i++;
		}
		if (i === primes.length) {
			primes.push(number);
		}
		number++;
		i = 1;
	};
	return 'There are <b><u>'+primes.length+'</u></b> prime numbers between 0 and '+max+': '+primes.join(', ')+'.';
}