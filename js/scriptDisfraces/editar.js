/**
 * Invoca peticion WS GET con parametro (id) para recuperar información del registro
 * y pintar información en el formulario de edición
 */
function editarRegistro(llaveRegistro) {
    //crea un objeto javascript
    let datos = {
        id: llaveRegistro
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: URL_DIFRACES + llaveRegistro,

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
        //data: datosPeticion,

        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'GET',

        contentType: "application/JSON",

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);
            $("#mensajes").show(1000);
            $("#mensajes").html("Información recuperada...");
            $("#mensajes").hide(1000);
            editarRespuesta(respuesta.items);
            activaEditar();
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            $("#mensajes").show(1000);
            $("#mensajes").html("Error peticion PUT..." + status);
            //$("#mensajes").hide(1000);
        }
    });
}

/* 
    Esta función se encarga de recorrer el listado de datos 'items' recibido como parametro,
    construir una tabla html en la variable javascript 'tabla',
    acceder al elemento elemento identificado con el id 'listado'
    y modificar su html agregando el contenido de la variable 'tabla'.
    
*/
function editarRespuesta(items) {
    $("#idEdit").val(items[0].id);
    $("#nameEdit").val(items[0].name);
    $("#brandEdit").val(items[0].brand);
    $("#modelEdit").val(items[0].model);
    $("#categoryEdit").val(items[0].category_id);    
}

//Esta función ejecuta la petición asincrona al servidor de Oracle, envia una
//petición al ws de tipo PUT
function actualizar() {

    //crea un objeto javascript
    let datos = {
        id: $("#idEdit").val(),
        brand: $("#brandEdit").val(),
        model: $("#modelEdit").val(),
        category_id: $("#categoryEdit").val(),
        name: $("#nameEdit").val()
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    if (validarEditar()) {
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "https://g2c7d8c8e491995-db202109201320.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume",

            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
            data: datosPeticion,

            // especifica el tipo de petición http: POST, GET, PUT, DELETE
            type: 'PUT',

            contentType: "application/JSON",

            // el tipo de información que se espera de respuesta
            //dataType: 'json',

            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (respuesta) {
                //escribe en la consola del desarrollador para efectos de depuración
                console.log(respuesta);
                $("#mensajes").show(1000);
                $("#mensajes").html("Registro actualizado...");
                $("#mensajes").hide(1000);
                listar();
                estadoInicial();
            },

            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Error peticion Post..." + status);
                //$("#mensajes").hide(1000);
            }
        });
    }
}

/**
 * Configura el aspecto de la página para actualizar el registro
 */
function activaEditar() {
    $("#idEdit").hide();
    $("#editar").show(500);
    $("#idEdit").focus();
    $("#nuevo").hide();
    $("#nuevoRegistro").hide(500)
    $("#listado").hide(500);
}