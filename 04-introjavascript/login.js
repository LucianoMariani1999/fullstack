//Database
let email = 'admin@gmail.com';
let password = '12345';


//Recibimos datos del user
let emailUser = prompt('Introduce tu Email:');
let passwordUser = prompt('Introduce tu Password');

//Comparar los datos del User con la database
if (email == emailUser && password == passwordUser){
    window.location = "./index.html";
    alert('Bienvenido a la plataforma bancaria');
}
