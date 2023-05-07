//función que determina la cantidad de días hasta navidad
function calcularDiasParaNavidad(){
    var hoy = new Date('05 05 2023');
    var navidad = new Date('12 24 2023');
    var diasFaltantes = navidad - hoy;
    var resultado = "Faltan " + Math.round(diasFaltantes/(1000*60*60*24)) + " días para navidad.";
    return resultado;
}

//console.log(diasParaNavidad());

//función que devuelve la edad de una persona habiendo ingresado su fecha de nacimiento
function calcularEdad() {
    var fecha_nacimiento = new Date('09 27 2003');
    var hoy = new Date('05 05 2023');
    var diasFaltantes = hoy - fecha_nacimiento;
    var resultado = "Tienes o vas a cumplir " + Math.round(diasFaltantes/(1000*60*60*24*365)) + " años.";
    return resultado;
}

//console.log(calcularEdad());

//validador de formularios: debe recibir todos los datos de un formulario, conocer de antemano los que son obligatorios y los opcionales y validar si son correctos (fechas son fechas, emails son emails, etc).
function validarDatos() {
    var booleano = false;
    var numero = 20;
    var texto = "hola";

    if (typeof booleano == 'boolean') {
        validacion1 = "OK";
    } else {
        validacion1 = "El primer campo no ha sido llenado correctamente.";
    }

    if (typeof numero == 'number') {
        validacion2 = "OK";
    } else {
        validacion2 = "El segundo campo no ha sido llenado correctamente.";
    }

    if (typeof texto == 'string') {
        validacion3 = "OK";
    } else {
        validacion3 = "El tercer campo no ha sido llenado correctamente.";
    }

    mensaje = validacion1 + "\n" + validacion2 + "\n" + validacion3;

    return mensaje;
}

console.log(validarDatos());