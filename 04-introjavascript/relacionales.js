

//operadores relacionales en javascript
// > mayor que
let uno = 150;
let dos = 500;

let mayor = uno > dos;
console.log('El número' + uno + 'es mayor que' + dos + ':' + mayor);

let menor = uno < dos
console.log('El número' + uno + 'es menor que' + dos + ':' + mayor);

let igual = uno = dos
console.log('El número' + uno + 'es igual que' + dos + ':' + igual);


let distinto = uno = dos
console.log('El número' + uno + 'es distinto que' + dos + ':' + distinto);

//Combinaciones
let mayorIgual = uno >= dos;
console.log('El número' + uno + 'es mayor o igual que' + dos + ':' + mayorIgual);

let menorIgual = uno <= dos;
console.log('El número' + uno + 'es menor o igual que' + dos + ':' + menorIgual);

let identicoTodo = uno === dos; //idéntico en valor, tipo de dato, etc
console.log('El número' + uno + 'es idéntico que' + dos + ':' + identicoTodo);

//Condicionales
// () ==> condición que evalúa el "si" lógico
// {} ==> bloque de código que se ejecuta si la condición se cumple
// La condición se cumple con un buleano: true / false
// si es true se ejecuta el bloque de código
// si es false no se ejecuta el bloque de código

let octavos = 'true';

if (octavos) {
    console.log ('El partido de octavos de final se juegae le 4 de Julio')
}

console.log('===================');

let edad = 18;
let inscripto = true;
let argentino = true;

if (edad < 18){
    console.log('1. Puede votar');
}

console.log('===================');

//if anidado
if (edad => 18) {
    if (inscripto){
        if(argentino){
            console.log('2. Puede votar');
        }
    }
}

console.log('===================');

//operadores lógicos && (and) || (or) ! (not)
if (edad => 18 && inscripto && argentino){
    console.log('3. Puede votar');
}

console.log('===================');

let email = 'pepe@gmail.com';
let password = '1234';

//       true                            true
if (email === 'pepe@gmail.com' && password === '1234'){
    console.log('4. Bienvenido a la plataforma');
}

console.log('===================');

let emailUno = 'pepe@gmail.com';
let passwordUno = '123456789';
// || con que uno de los dos sea true se ejecuta un bloque de código
//             true                        false
if (emailUno = 'peppppe@gmail.com' || passwordUno ==='1234'){
    console.log('5. Bienvenido a la plataforma');
}

console.log('===================');

let club = 'true';
console.log(club);

if (!club) {
    console.log('6 Genial con tu Club!!');
}
console.log(!club);

console.log('===================');


