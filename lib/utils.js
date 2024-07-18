const ACENTOS = {'á':'a','é':'e','í':'i','ó':'o','ú':'u'};

export function eliminarAcentos(str){
    return str.split("").map(letra => ACENTOS[letra] || letra).join("");
}

export function filtrarElementos(textoFiltro, producto, propiedad){
    // Obtenemos cada palabra del nombre o la propiedad del producto y de lo buscado
    // Quitamos acentos para que sea menos estricto el filtrado
    let texto = producto?.[propiedad]?.toLowerCase();
    // Si texto no existe porque la propiedad es inválida, ningún elemento será válido
    if(!texto) return false;

    let palabras = eliminarAcentos(texto).split(/\s+/);
    let buscado = eliminarAcentos(textoFiltro.toLowerCase()).split(/\s+/);

    // Si todas las palabras buscadas tienen algo en común con alguna de las de los nombres,
    // se muestra el producto
    return buscado.every(palabraB => {
        if(!palabraB) return true;

        return palabras.some(palabra => palabra.includes(palabraB));
    });
}