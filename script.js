const empresa = "¡Bienvenido a R&A Grúas Ltda!"
const BIENVENIDA = ("¡Bienvenido a " + empresa +"!");

console.log(empresa);
alert(empresa);


var userIngreso = prompt("Ingrese su usuario")
var email = prompt("Ingrese su correo")
var contrasenia = prompt("Ingrese su contraseña")
// const usuarioRegistrado = `${user}`
var usuarioConEmail = email
var userPassword = contrasenia


var validacion = false;
function comparaDatos (dato1, dato2) {
    return dato1 === dato2;
}

function nuevoUsuario (user) {
    var validacionUser = false;
    do {
        if(!user.includes("@")) {
            usuarioConEmail = prompt("Ingrese nuevo email")
            validacionUser = true;    
            user = prompt("Ingrese nuevo email")
        } 

    } while(validacionUser)
}

function nuevoUsuariov2 (user) {
        if(!user.includes("@")) {
            usuarioConEmail = prompt("Ingrese un email correcto que contenga @")
            nuevoUsuariov2(usuarioConEmail)
        } 
   
}
const nombre = userIngreso
if( nombre.length <6){
    alert("Nombre ingresado es muy corto. Por favor ingrese su nombre y apellido")
} else {
    alert("El nombre ingresado es valido")
}
    do { 
        const usuario = prompt("Ingrese correo con cual se registro");
        const password = prompt("Ingrese su contraseña");
        const usuarioValido = comparaDatos(usuario, usuarioConEmail);
        const passwordValida = comparaDatos(password, userPassword);

        if (usuarioValido && passwordValida) {
            alert(`¡Bienvenido ${nombre}!`)
            nuevoUsuario(usuario)
        } else {
            if (!usuarioValido && !passwordValida) {
                alert("Usuario y contraseña no son validos") 
            } else {
                if (!usuarioValido ) {
                    alert("El usuario ingresado no existe")
                } else {
                    alert("La contraseña ingresada no es valida") 
                }
            } 
            validacion = true
        }
        console.log("validacion:" + validacion)
    } while (validacion)
