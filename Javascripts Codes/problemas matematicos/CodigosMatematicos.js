document.getElementById('PruebaPar').addEventListener('submit', function (event) {
  event.preventDefault();
  const numeroIngresado = parseInt(document.getElementById('numeroPar').value);
  verificarNumeroPar(numeroIngresado);
});

document.getElementById('PruebaPrimo').addEventListener('submit', function (event) {
  event.preventDefault();
  const numeroIngresado = parseInt(document.getElementById('numeroPrimo').value);
  verificarNumeroPrimo(numeroIngresado);
});

document.getElementById('serieFibonacci').addEventListener('submit', function (event) {
  event.preventDefault();
  const numeroIngresado = parseInt(document.getElementById('numeroCiclos').value);
  Fibonacci(numeroIngresado);
});

function verificarNumeroPar(numero) {
  if (isNaN(numero)) {
    resultadoPar.textContent = 'Por favor, ingresa un número válido.';
    return;
  }

  if (numero % 2 === 0) {
    resultadoPar.textContent = `El número ${numero} es par.`;
  } else {
    resultadoPar.textContent = `El número ${numero} no es par.`;
  }
}

function verificarNumeroPrimo(numero) {
  if (isNaN(numero)) {
    resultadoPrimo.textContent = 'Por favor, ingresa un número válido.';
    return;
  }

  if (numero <= 1) {
    resultadoPrimo.textContent = `El número ${numero} no es primo.`;
    return;
  }

  if (esPrimo(numero)) {
    resultadoPrimo.textContent = `El número ${numero} es primo.`;
  } else {
    resultadoPrimo.textContent = `El número ${numero} no es primo.`;
  }
}

function esPrimo(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(numero)) + 1; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function Fibonacci(numero){
  let x = 0;
  let z = 0;
  let y = 1;
  let arrFibo = [];

  for (let i = 1; i <= numero; i++){
    z = x + y;
    y = x;
    x = z;
    
    arrFibo.push(z);
  }
  mostrarEnTabla(arrFibo);
}

function mostrarEnTabla(arrFibo) {
  const tabla = document.getElementById('resultadoFibonacci');

  // Limpiar tabla existente
  while (tabla.firstChild) {
    tabla.removeChild(tabla.firstChild);
  }

  // Crear filas y columnas en la tabla
  let fila = document.createElement('tr');
  let contador = 0;

  arrFibo.forEach(numero => {
    let columna = document.createElement('td');
    columna.textContent = numero;
    if (esPrimo(numero)) {
      columna.classList.add("primo");
    }
    if (numero % 2 === 0) {
      columna.classList.add("par");
    }
    // Verificar si el número es tanto primo como par
    if (esPrimo(numero) && numero % 2 === 0) {
      columna.classList.add("primo", "par");
    }
    fila.appendChild(columna);
    contador++;

    // Crear nueva fila cada 10 columnas
    if (contador === 10) {
      tabla.appendChild(fila);
      fila = document.createElement('tr');
      contador = 0;
    }
  });

  // Asegurarse de agregar la última fila si no estaba llena
  if (contador > 0) {
    tabla.appendChild(fila);
  }
}