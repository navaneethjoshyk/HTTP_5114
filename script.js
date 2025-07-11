let duplicateCount = 0;  // Count how many runs have duplicates
const runs = 1000;

for (let run = 0; run < runs; run++) {
  // Generate random array of 23 numbers between 0 and 365
  let numbers = Array.from({ length: 23 }, () => Math.floor(Math.random() * 366));

  let hasDuplicates = false;

  // Check duplicates with nested loops
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        hasDuplicates = true;
        break;  
      }
    }
    if (hasDuplicates) break;  
  }

  if (hasDuplicates) {
    duplicateCount++;
  }
}


let percentage = (duplicateCount / runs) * 100;

console.log(`Duplicates found in ${percentage.toFixed(2)}% of the runs.`);
