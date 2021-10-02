class getAll{
 //costructor recibe la URL del servico
    constructor(url){
        this.url=url;
    }








//Esta función ejecuta la petición asincrona al servidor de Oracle, envia una
//petición al ws de tipo GET
listar() {
    
    $.ajax({
        
        //url servicio
        url: this.url,
        
        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'GET',
        
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        
        



        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: (respuesta)=>{
            //escribe en la consola del desarrollador para efectos de depuración
            
            let listar = new listarClientes();
            listar.listarRespuesta(respuesta);
           console.log(respuesta);
           // return respuesta.items;
             
            
            


            //recibe el arreglo 'items' de la respuesta a la petición
           // listarRespuesta(respuesta.items);
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
      error: (status)=> {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
          
            //$("#mensajes").hide(1000);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete:() => {
            $("#mensajes").html("Obteniendo listado de clientes");
            $("#mensajes").hide(1000);
        }
    });


}
}