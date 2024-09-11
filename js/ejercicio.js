const analizarNumeros = (num1, num2, num3) => {
    const mayor = Math.max(num1, num2, num3);
    const menor = Math.min(num1, num2, num3);
  
    let repetidos = '';
    if (num1 === num2 && num1 === num3) {
      repetidos = 'Los tres números son iguales.';
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
      repetidos = 'Hay números repetidos.';
    } else {
      repetidos = 'No hay números repetidos.';
    }
  
    console.log(`El número mayor es: ${mayor}`);
    console.log(`El número menor es: ${menor}`);
    console.log(repetidos);

    document.write(`El número mayor es: ${mayor} \nEl número menor es: ${menor} \n`, repetidos);
  };
  
  // Ejemplo de uso
  analizarNumeros(5, 8, 5);
  
  