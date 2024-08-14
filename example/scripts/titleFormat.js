function titleFormat(str) {
    // Obtener la primera letra y el resto del título
    let firstLetter = str.charAt(0).toUpperCase(); // Primera letra en mayúsculas
    let restOfTitle = str.slice(1).toLowerCase(); // Resto del título en minúsculas

    // Concatenar ambas partes
    let formattedTitle = firstLetter + restOfTitle;

    // Mostrar el título formateado en la consola
    console.log(formattedTitle);

    // Retornar la longitud de la cadena formateada
    return formattedTitle.length;
}

// Ejecutar la función y mostrar los resultados en consola
console.log(titleFormat("javascript")); // Output: "Javascript", 10
console.log(titleFormat("hello WORLD")); // Output: "Hello world", 11
console.log(titleFormat("tITLE cAsE")); // Output: "Title case", 10
