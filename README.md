# Division by Zero Bug in JavaScript Function

This repository demonstrates a common error in JavaScript: incorrect handling of zero values during division. The `foo` function attempts to handle cases where either `a` or `b` is zero. However, its logic is flawed; it incorrectly returns 0 when only one of the operands is zero. This can lead to unexpected behavior and incorrect results.

## Bug Description

The `foo` function is designed to divide `a` by `b`, but it doesn't correctly handle the cases where `a` or `b` is zero. Instead of appropriately handling division by zero, the function incorrectly returns `0`, which might result in unexpected results or incorrect calculations in other parts of an application. 

## Solution

The bug is addressed by updating the conditional statements in the `foo` function to accurately handle the situations where either `a` or `b` is zero, thereby avoiding the division by zero error. Additionally, an informative error message is provided in case of a division by zero, improving error reporting.

## How to Reproduce

1. Clone this repository
2. Navigate to the directory containing `bug.js`
3. Run `node bug.js` in your terminal. Observe that test cases involving only one operand equal to zero will fail. 
4. Then run `node bugSolution.js` to see the fixed version.