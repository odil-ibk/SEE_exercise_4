function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

// Simple manual tests
console.log("Test 1 (3,4,5):", isTriangle(3, 4, 5)); // true
console.log("Test 2 (1,2,3):", isTriangle(1, 2, 3)); // false
console.log("Test 3 (0,4,5):", isTriangle(0, 4, 5)); // false
console.log("Test 4 (-1,4,5):", isTriangle(-1, 4, 5)); // false
console.log("Test 5 (5,5,5):", isTriangle(5, 5, 5)); // true
