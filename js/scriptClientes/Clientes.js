$(document).ready(() => {
     estado.estadoInicial();
     
       //const clientes= getAllClientes.listar();
     //  console.log(typeof(getAllClientes.listar()));
       getAllClientes.listar();
    
   
});

let estado = new listarClientes();
let  getAllClientes = new getAll("https://g2c7d8c8e491995-db202109201320.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client");