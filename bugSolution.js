function foo(a, b) {
  if (a === null || b === null) {
    // Handle null values explicitly
    console.error('Error: Null values encountered!');  //Or throw new Error('Null values not allowed'); 
    return null; // Or a default value appropriate for your use case.
  }
  // ... rest of your function logic ...
}