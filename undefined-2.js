// //______________________________ module 32 er 2 ________________________//
// 32-2 Null Vs Undefined, different ways you will get undefined
/**
 * 8 way to get undifined
 
 * 1. variable that is not intialized will give undefined.
 * 2. function with no return.
 * 3. paremeter that in not passed will be undefined.
 * 4. if return has nothing on the right side will return undefined 
 * 5. poperty that dosen't exist on an object will give you undifined.
 * 6. accessing array elements outside of the index range
 * 7. deleting an element inside an array
 * 8. set a value directly to undefined
 * 
*/

// 1 way _________/
let first;
console.log(first) //Output: undefined 


// 2 way  ____________/
function second(a, b) {
    const total = a + b;
};
const result = second(2, 3);
console.log(result)  //Output: undefined 

// 3 way _________________/
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d)
}
third(4, 3) // output: 4 3 undefined undefined


// 4 way ___________________/





/*
১. ভেরিয়েবল ডিক্লেয়ার করা হয়েছে, কিন্তু ভ্যালু দেওয়া হয়নি
যদি কোনো ভেরিয়েবল ডিক্লেয়ার করা হয়, কিন্তু সেটাকে কোনো ভ্যালু অ্যাসাইন করা না হয়, তাহলে সেটি undefined হবে।

উদাহরণ:
javascript
Copy
Edit
let x;
console.log(x);  // Output: undefined
✅ কারণ x ডিক্লেয়ার করা হয়েছে, কিন্তু কোনো মান দেওয়া হয়নি।

২. ফাংশনের return স্টেটমেন্ট কিছু রিটার্ন না করলে
যদি কোনো ফাংশনের return স্টেটমেন্টে কিছু না থাকে, তাহলে undefined রিটার্ন হয়।

উদাহরণ:
javascript
Copy
Edit
function myFunction() {
  return;
}

console.log(myFunction());  // Output: undefined
✅ কারণ return স্টেটমেন্ট দেওয়া হলেও কোনো ভ্যালু রিটার্ন করা হয়নি।

৩. অবজেক্টের মধ্যে প্রপার্টি না থাকলে
যদি কোনো অবজেক্টের এমন একটি প্রপার্টি এক্সেস করা হয়, যা অবজেক্টের মধ্যে নেই, তাহলে undefined পাওয়া যাবে।

উদাহরণ:
javascript
Copy
Edit
const person = {
  name: "Akash"
};

console.log(person.age);  // Output: undefined
✅ কারণ person অবজেক্টে age নামে কোনো প্রপার্টি নেই।

৪. অ্যারের ইনডেক্সের বাইরে কোনো এলিমেন্ট এক্সেস করলে
যদি কোনো অ্যারের এমন ইনডেক্স এক্সেস করা হয়, যা এক্সিস্ট করে না, তাহলে undefined পাওয়া যাবে।

উদাহরণ:
javascript
Copy
Edit
const numbers = [10, 20, 30];

console.log(numbers[5]);  // Output: undefined
✅ কারণ numbers অ্যারেতে ৫ নম্বর ইনডেক্স নেই।

৫. অ্যারের কোনো এলিমেন্ট delete করলে
যদি delete অপারেটর দিয়ে অ্যারের একটি এলিমেন্ট ডিলিট করা হয়, তাহলে সেটি অ্যারে থেকে সরবে না, বরং empty হয়ে যাবে, তবে এক্সেস করলে undefined পাওয়া যাবে।

উদাহরণ:
javascript
Copy
Edit
const arr = [1, 2, 3, 4];

delete arr[1]; 
console.log(arr);  // Output: [1, empty, 3, 4]
console.log(arr[1]);  // Output: undefined
✅ arr[1] ডিলিট করা হলেও অ্যারেতে সেই স্থানটি ফাঁকা থেকে গেছে, কিন্তু এক্সেস করলে undefined হয়।

৬. সরাসরি undefined সেট করলে
যদি কোনো ভেরিয়েবলের মান undefined সেট করা হয়, তাহলে সেটি undefined হয়ে যাবে।

উদাহরণ:
javascript
Copy
Edit
let y = 100;
y = undefined;

console.log(y);  // Output: undefined
✅ এটি করা সম্ভব হলেও ভালো প্র্যাকটিস নয়। এর পরিবর্তে null ব্যবহার করা ভালো।

🚀 পরামর্শ:
👉 সরাসরি undefined সেট না করে null ব্যবহার করা উচিত, কারণ undefined সাধারণত কোনো ভ্যালু না থাকার ইঙ্গিত দেয়, আর null ব্যবহার করলে বোঝায় যে মান ইচ্ছাকৃতভাবে ফাঁকা রাখা হয়েছে।

সংক্ষেপে JavaScript-এ undefined পাওয়ার কারণ:
#	কারণ	উদাহরণ
১	ভেরিয়েবল ডিক্লেয়ার করা হয়েছে, কিন্তু মান দেওয়া হয়নি	let x;
২	ফাংশন কিছু রিটার্ন না করলে	return;
৩	অবজেক্টে প্রপার্টি না থাকলে	person.age
৪	অ্যারের বাইরে ইনডেক্স এক্সেস করলে	numbers[5]
৫	অ্যারে থেকে delete করলে	delete arr[1];
৬	সরাসরি undefined সেট করলে	x = undefined;
❌ কিন্তু কখনোই undefined ম্যানুয়ালি সেট করা উচিত নয়!
এর পরিবর্তে null ব্যবহার করাই ভালো। 😊

ভালো উপায়:
javascript
Copy
Edit
let x = null;
console.log(x);  // Output: null









*/