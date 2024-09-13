function fibonacci(num) {
// your code here
	if (num === 0) {
        return 0; // Fibonacci(0) is 0
    } 
	else if (num === 1) {
        return 1; // Fibonacci(1) is 1
    }

    // Recursive case: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
    return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
