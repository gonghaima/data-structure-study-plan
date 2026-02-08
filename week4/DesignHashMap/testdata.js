// testdata.js
// Add test cases as an array of objects: { input, expected }

module.exports = [
  // Example test cases (to be updated with real cases)
  { input: [ ["put", 1, 1], ["put", 2, 2], ["get", 1], ["get", 3], ["put", 2, 1], ["get", 2], ["remove", 2], ["get", 2] ], expected: [null, null, 1, -1, null, 1, null, -1] },
  // Add more cases as needed
];
