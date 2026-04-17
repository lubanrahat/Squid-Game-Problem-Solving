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
