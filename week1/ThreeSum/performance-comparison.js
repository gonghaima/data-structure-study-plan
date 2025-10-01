/**
 * Performance Comparison Script for 3Sum Solutions
 * 
 * This script benchmarks all the different 3Sum implementations
 * with various input sizes to demonstrate their performance characteristics.
 */

const solutions = {
  'Two Pointer (Original)': require('./solution'),
  'Brute Force': require('./solution-brute-force'),
  'HashMap': require('./solution-hashmap'),
  'No Sort': require('./solution-no-sort'),
  'Optimized Two Pointer': require('./solution-optimized-two-pointer'),
  'Divide and Conquer': require('./solution-divide-conquer')
};

// Generate test data of different sizes
function generateTestData(size) {
  const nums = [];
  for (let i = 0; i < size; i++) {
    nums.push(Math.floor(Math.random() * 200) - 100); // Random numbers between -100 and 100
  }
  return nums;
}

function benchmark(solutionName, solutionFn, testData, iterations = 1) {
  const start = process.hrtime.bigint();
  
  for (let i = 0; i < iterations; i++) {
    // Create a fresh copy for each iteration to avoid side effects
    const dataCopy = [...testData];
    solutionFn(dataCopy);
  }
  
  const end = process.hrtime.bigint();
  return Number(end - start) / 1000000 / iterations; // Convert to milliseconds and average
}

function runComparison() {
  const testSizes = [10, 20, 50, 100];
  const iterations = 10; // Number of times to run each test for averaging
  
  console.log('3Sum Performance Comparison');
  console.log('=' .repeat(80));
  console.log();
  
  testSizes.forEach(size => {
    console.log(`Test Size: ${size} elements`);
    console.log('-'.repeat(50));
    
    const testData = generateTestData(size);
    const results = [];
    
    Object.entries(solutions).forEach(([name, fn]) => {
      try {
        const avgTime = benchmark(name, fn, testData, iterations);
        results.push({ name, time: avgTime });
        console.log(`${name.padEnd(25)}: ${avgTime.toFixed(3)}ms`);
      } catch (error) {
        console.log(`${name.padEnd(25)}: ERROR - ${error.message}`);
      }
    });
    
    // Show relative performance
    console.log();
    const fastest = Math.min(...results.map(r => r.time));
    console.log('Relative Performance (vs fastest):');
    results
      .sort((a, b) => a.time - b.time)
      .forEach(({ name, time }) => {
        const ratio = (time / fastest).toFixed(1);
        console.log(`${name.padEnd(25)}: ${ratio}x`);
      });
    
    console.log();
    console.log('='.repeat(80));
    console.log();
  });
}

// Memory usage comparison
function memoryComparison() {
  console.log('Memory Usage Analysis');
  console.log('=' .repeat(50));
  console.log();
  
  const testData = generateTestData(100);
  
  Object.entries(solutions).forEach(([name, fn]) => {
    const memBefore = process.memoryUsage().heapUsed;
    
    // Run multiple times to amplify memory usage
    for (let i = 0; i < 100; i++) {
      fn([...testData]);
    }
    
    // Force garbage collection if available
    if (global.gc) {
      global.gc();
    }
    
    const memAfter = process.memoryUsage().heapUsed;
    const memDiff = (memAfter - memBefore) / 1024 / 1024; // Convert to MB
    
    console.log(`${name.padEnd(25)}: ${memDiff.toFixed(2)}MB`);
  });
}

if (require.main === module) {
  runComparison();
  memoryComparison();
}

module.exports = { benchmark, generateTestData };