# JavaScript Zero Division Handling Bug

This repository demonstrates a common bug in JavaScript related to handling zero values in division operations.  The `foo` function incorrectly handles cases where either `a` or `b` is 0, resulting in `Infinity` or `NaN` outputs instead of 0 as expected.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected implementation.

## Bug Description

The `foo` function aims to perform division, but it doesn't explicitly handle the case where either the numerator or denominator is 0, resulting in unexpected outputs.

## Solution

The solution explicitly checks for zero values before performing the division.  If either input is 0, the function now correctly returns 0.