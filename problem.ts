// 1. Reverse a String

function reverseString(str: string): string {
  let arr = str.split("");
  console.log(arr);
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
}

const foo = "Rahat";

// console.log(reverseString(foo))

// 2. FizzBuzz

function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(100);

// 3. Find the Largest Number in an Array

function findLargestNumber(nums: number[]): number {
  let maxValue = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxValue) {
      maxValue = nums[i];
    }
  }
  return maxValue;
}

// const arr: number[] = [1,2,31,100,40,234,500,300,100,700];
// console.log(findLargestNumber(arr))

// 4. Check for Palindrome

function isPalindrome(str: string): boolean {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));

// 5. Sum of Array Elements

function sumArray(nums: number[]): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

// const arr: number[] = [1,2,3,4,5];
// console.log(sumArray(arr));

// 6. Count Vowels
function countVowels(str: string): number {
  let count = 0;
  const vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.toLowerCase().includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels("aeioU"));

// 7. Factorial Calculation

function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(5));

// 8. Even or Odd List
function filterEvenNumbers(nums: number[]): number[] {
  return nums.filter((num) => num % 2 === 0);
}

// const arr: number[] = [1,2,3,4,5,6,7,8,9,10];
// console.log(filterEvenNumbers(arr));

// 9. Fibonacci Sequence

function fibonacci(n: number): number[] {
  if (n === 1) {
    return [0];
  }
  const sequence: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// console.log(fibonacci(10));


// 10. Find the Minimum in an Array
// Task: Given an array of integers, return the smallest value.

// Input: int[] nums
// Output: integer
// Constraints: Array will not be empty.
// Edge Case: Multiple elements with the same minimum value.
// Hint: Similar logic to finding the maximum.

function findMinimum(nums: number[]): number {
  let minValue = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minValue) {
      minValue = nums[i];
    }
  }
  return minValue;
}

const arr: number[] = [10,2,31,100,40,234,500,300,100,700];
console.log(findMinimum(arr));

