function error(mensaje, codigo){
    let e = new Error(mensaje);

    if (code)
        e.statusCode = code;

    return e;
}

module.exports = error;