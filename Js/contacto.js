const inputs = document.getElementsByClassName("formulario__input");
for (var i =0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
      if(this.value.length>=1) {
        this.nextElementSibling.classList.add("fijar")
      }else{
        this.nextElementSibling.classList.remove("fijar")
      }
    });
}

function definirEventos(){

  // Desafio Con Jquery
  
  const crearCuentaBTN = $("#crearCuentaBTN")[0];

  //Creo el evento onClick, Desafio Jquery 
  crearCuentaBTN.onclick = (e)=> {
      e.preventDefault();
      const nuevoUsuario = new Usuario(

          $("#uname")[0].value,
          $("#mail")[0].value,
          $("#phone")[0].value,

      )
      const respuesta = nuevoUsuario.registrarUsuario();
      if(respuesta==="OK")
      {
          alert("SE REGISTRÓ")
      }
      else 
      {
          alert("HA OCURRIDO UN ERROR");
      }
  }

  //Creo el evento onmouseover
  crearCuentaBTN.onmouseover = () =>
  {
      
      crearCuentaBTN.style.backgroundColor="blue";


  }

  //crear el evento onmouseout
  crearCuentaBTN.onmouseout = () =>
  {
      
      crearCuentaBTN.style.backgroundColor="rgb(199, 58, 145)";
      

  }
}

function init()
{
   const nodo = $("#mainContainer");
   mostrarTitulo(nodo);
   
}


function mostrarTitulo(nodo)
{
    
    const nodoTitulo = $("<h1></h1>");
    nodoTitulo.html("Contacto");
    nodoTitulo.hide();
    nodo.append(nodoTitulo);
    nodoTitulo.slideDown(2000, ()=>{
    });
}