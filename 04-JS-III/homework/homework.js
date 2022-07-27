// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var priEl = array[0];
  return priEl;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultEl = array[array.length - 1];
  return ultEl;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var largoArray = array.length;
  return largoArray; 
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(i=0 ; i<array.length ; i++){
    array[i] = array[i] + 1;
  } 
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = palabras[0] 
  for(i=1 ; i < palabras.length ; i++){
    frase = frase + ' ' + palabras[i];
  } 
 
  return frase;
  
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(i=0; i < array.length; i++){
    if(array[i] == elemento){
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for(i=0; i<numeros.length; i++){
    suma = suma + numeros[i];
  } 
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for(i=0; i<resultadosTest.length; i++){
    suma = suma + resultadosTest[i];
  }
  var prom = suma / resultadosTest.length;
  return prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var masgrande = 0;
  for(i=0; i<numeros.length; i++){
    if(numeros[i] >= masgrande){
      masgrande=numeros[i];
    }
  }
  return masgrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var mult = 1;
  if(arguments.length == 0){
    return 0;
  }
  for(i=0; i<arguments.length; i++){
    mult = mult * arguments[i];
  }
  return mult;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var ctdEl = 0;
  for(i=0; i<arreglo.length; i++){
    if(arreglo[i]>18){
      ctdEl++;
    }
  }
  return ctdEl;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia==1 || numeroDeDia==7){
    return 'Es fin de semana';
  }
  else {
    return 'Es dia Laboral';
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  //var numerostr = n.toString();
  var es9;
  var numerostr = n.toString()
  es9 = numerostr[0];
  
  if(es9 == 9){
    return true;
  } 
  else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for(i=0; i<arreglo.length; i++){
    for(j=0; j<arreglo.length; j++){
      if(arreglo[i]!=arreglo[j]){
        return false;
      }
    }
  }
  return true;  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var EMN =[];
  for(i=0; i<array.length; i++){
    if(array[i]=='Enero'){
      EMN.push(array[i]);
    }
    if(array[i]=='Marzo'){
      EMN.push(array[i]);
    }
    if(array[i]=='Noviembre'){
      EMN.push(array[i]);
    }
  }
  if(EMN.length != 3){
    return 'No se encontraron los meses pedidos';
  }
  else {
    return EMN;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var cienmas =[];
  for(i=0; i<array.length; i++){
    if(array[i]>100){
      cienmas.push(array[i]);
    }
  }
  return cienmas;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoarray = [];
  var iteracion = 1;
  for(i=0; i<10; i++){
    numero += 2;
    nuevoarray.push(numero);
    if(iteracion==numero){
      return 'Se interrumpió la ejecución';
    }
    iteracion++
  }
  return nuevoarray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoarray = [];
  var iteracion = 1;
  for(i=0; i<9; i++){
    /*if(iteracion==5){
      continue;
    }*/
    numero += 2;
    nuevoarray.push(numero);
    iteracion++
  }
  return nuevoarray;
}
//Esta mal el test en esta ultima prueba


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
