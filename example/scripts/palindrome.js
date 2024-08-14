function palindrome(str) {
    // Rebana la cadena, la invierte y la une de nuevo
    let reversedStr = str.split('').reverse().join('');

    // Compara la cadena original con la cadena invertida
    return str === reversedStr;
}

// Ejecutar la función y mostrar los resultados en consola
console.log(palindrome("madam")); // true
console.log(palindrome("hello")); // false
console.log(palindrome("racecar")); // true
