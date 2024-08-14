function lengthOf(str) {
    if (str === "") {
        return "Invalid input";
    }
    return str.length;
}

console.log(lengthOf("hello")); // 5
console.log(lengthOf("")); // "Invalid input"
console.log(lengthOf("ChatGPT")); // 7