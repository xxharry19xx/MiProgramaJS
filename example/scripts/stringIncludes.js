function stringIncludes(substring, mainString) {
    // Verificar si la primera cadena está incluida en la segunda
    return mainString.includes(substring);
}

// Ejecutar la función y mostrar los resultados en consola
console.log(stringIncludes("hello", "hello world")); // true
console.log(stringIncludes("test", "This is a test string")); // true
console.log(stringIncludes("bye", "goodbye everyone")); // false
