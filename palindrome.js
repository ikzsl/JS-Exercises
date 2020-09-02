const palindrome = (str) => {
    const isPalindrome = str === str.split('').reverse().join('');
    console.log(`${str} is${isPalindrome ? '' : ' not'} palindrome`);
};

palindrome('abba');












