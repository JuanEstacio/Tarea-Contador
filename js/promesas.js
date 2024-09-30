const sumar = (a, b) => {
    return new Promise((resolve, reject) => {
        if(a < 0 || b < 0){
            reject("no es valido");
        }else{
            resolve(a + b);
        }
    })
}