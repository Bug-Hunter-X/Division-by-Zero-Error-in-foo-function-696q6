function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This is incorrect for a === 0 and b !== 0
  } else {
    return a / b; 
  }
}