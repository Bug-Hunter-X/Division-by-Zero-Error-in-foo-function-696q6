function foo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero'); // Handle division by zero
  } else if (a === 0) {
    return 0; // Correctly handle the case where a is zero
  } else {
    return a / b; 
  }
} 