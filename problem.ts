// 1. Reverse a String

function reverseString(str: string) : string {
    let arr = str.split("");
    console.log(arr)
    let left = 0,right = arr.length-1;
    while(left < right) {
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }
    return arr.join("");
}

const foo = "Rahat";

// console.log(reverseString(foo))
