function traerInformacion() {
    URI_GET = "https://gedf051d40d5c36-db202109221902.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client"

    $.ajax(
        {
            url: URI_GET,
            type: "GET",
            datatype: "JSON",
            success: (respuesta)=> {
                mostrarRespuesta(respuesta.items) ;

                console.log(respuesta);
                console.log(typeof (respuesta));

            }

        }

    )
}



function mostrarRespuesta(respuesta) {
    let myTable = '<div class="card border-light mb-3" style="max-width: 20rem;">' ;
    for (i = 0; i < respuesta.length; i++) {

        myTable += ' <div class="card-header">'+respuesta[i].name +'</div>';
        myTable +='<h4 class="card-title">'+respuesta[i].email +'</h4>';
        myTable +='<p class="card-text"> Su edad es '+respuesta[i].age +'</p>';

        
        
      
       
       

    }
    myTable += '</div>'  ;
    $("#resultado").append(myTable);

}