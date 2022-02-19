$(document).ready(function(){

$('#inicio').click(function () {    

    $('#welcome').load("./components/welcome.html");
    $('#inicio').remove();

});

});


function continuar(){
    $('#welcome').load("./components/ingreso.html");
}

var p = 0;
var idCuentaEncontrada = [];

function validarCuenta(){
    $.ajax({url:"./data/file1.json", success: function(result){ 
     
    var cuentas = result.cuentas;  
    var valorCuenta = document.getElementById('ingresotexto').value;

    
    CuentaEncontrada = false;

    for (var i = 0; i <= cuentas.length-1; i++) {
    console.log(cuentas[i].n,cuentas[i].n == valorCuenta);
     if(cuentas[i].n == valorCuenta){
       CuentaEncontrada = true;
       idCuentaEncontrada[p] = i;
       p++;
     }  
    }

    console.log(idCuentaEncontrada);
    
    if (valorCuenta.length == 0){
      
      //The Account Number is empty
      var modal = document.getElementById("ModalEmpty");
      document.getElementsByClassName("modal-content");
      var span = document.getElementById("emptymodalexit");
                
      modal.style.display = "block";
        
      //Enable only the button click
      span.onclick = function() {
      modal.style.display = "none";
      }
        
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
        //modal.style.display = "none";
        }            
      }
        
    } else if (valorCuenta.length < 16){
        
      // The Account Number have under 16 digits
      var modal = document.getElementById("ModalDigits");
      document.getElementsByClassName("modal-content");
      var span = document.getElementById("digitsmodalexit");
         
      modal.style.display = "block";
 
      //Enable only the button click
      span.onclick = function() {
      modal.style.display = "none";
      }
 
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
        //modal.style.display = "none";
        }
      }

    } else if (CuentaEncontrada == true) {
      // The Account number OK.  
      $('#welcome').load("./components/ingresopin.html")
    } 
    else
    {
      // The Account dont Exists
      var modal = document.getElementById("ModalExist");
      document.getElementsByClassName("modal-content");
      var span = document.getElementById("existmodalexit");
         
      modal.style.display = "block";
 
      //Enable only the button click
      span.onclick = function() {
      modal.style.display = "none";
      }
 
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
        //modal.style.display = "none";
        }
      }
    }
  
    }})   
}


function validarPIN(){
    $.ajax({url:"./data/file1.json", success: function(result){ 
    
    var cuentas = result.cuentas


    var valorPIN = document.getElementById('ingresotexto').value;
    if (valorPIN.length == 0){
        
      // The Pin Number dont Exists
      var modal = document.getElementById("ModalPinExist");
      document.getElementsByClassName("modal-content");
      var span = document.getElementById("pinexistmodalexit");
                    
      modal.style.display = "block";
            
      //Enable only the button click
      span.onclick = function() {
      modal.style.display = "none";
      }
            
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
        //modal.style.display = "none";
        }
      }

      

    } else if (valorPIN.length < 4){
        
      // The Pin Number have under 4 digits
      var modal = document.getElementById("ModalPinDigits");
      document.getElementsByClassName("modal-content");
      var span = document.getElementById("pindigitsmodalexit");

      modal.style.display = "block";

      //Enable only the button click
      span.onclick = function() {
      modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
        //modal.style.display = "none";
        }
      }

      document.getElementById('ingresotexto').value="";

    }
     else if (valorPIN == cuentas[idCuentaEncontrada[0]].pin){
        $('#welcome').load("./components/cuenta.html"); 
    
        
    }
    else
    {
      // The Pin Number dont Exists
      var modal = document.getElementById("ModalPinWrong");
      document.getElementsByClassName("modal-content");
      var span = document.getElementById("pinwrongmodalexit");
        
      modal.style.display = "block";
          
      //Enable only the button click
      span.onclick = function() {
      modal.style.display = "none";
      }
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
        //modal.style.display = "none";
        }
      }

      document.getElementById('ingresotexto').value="";
   
    }   
        
    }})
}


function volver(){
    $('#welcome').load("./components/welcome.html"); 
}


function clickenteclado(numpress,limit){
 
  var inputVal = document.getElementById('ingresotexto').value;
    
  if (numpress == 'del'){
    inputVal = "";
    document.getElementById('ingresotexto').value="";
  }

  if (inputVal.length < limit) {
    switch(numpress){
      case 1:
      //console.log("boton 1 " +)
      
      inputVal = inputVal + '1';
      document.getElementById('ingresotexto').value=inputVal;
    
      break;

      case 2:
      inputVal = inputVal + '2';
      document.getElementById('ingresotexto').value=inputVal;
      break;

      case 3:
      inputVal = inputVal + '3';
      document.getElementById('ingresotexto').value=inputVal;
      break;

      case 4:
      inputVal = inputVal + '4';
      document.getElementById('ingresotexto').value=inputVal;
      break;

      case 5:
      inputVal = inputVal + '5';
      document.getElementById('ingresotexto').value=inputVal;
      break;

      case 6:
      inputVal = inputVal + '6';
      document.getElementById('ingresotexto').value=inputVal;
      break;

      case 7:
      inputVal = inputVal + '7';
      document.getElementById('ingresotexto').value=inputVal;
      break;

      case 8:
      inputVal = inputVal + '8';
      document.getElementById('ingresotexto').value=inputVal;
      break;

      case 9:
      inputVal = inputVal + '9';
      document.getElementById('ingresotexto').value=inputVal;
      break;

      case 0:
      inputVal = inputVal + '0';
      document.getElementById('ingresotexto').value=inputVal;
      break;

      case '00':
      if (inputVal.length <= 14){
        inputVal = inputVal + '00';
      }else if (inputVal.length > 14) {
        inputVal = inputVal + '0';
      }

      document.getElementById('ingresotexto').value=inputVal;
      break;

      case 'del':
      inputVal = "";
      document.getElementById('ingresotexto').value="";
      break;
    }
  }
} 
 
