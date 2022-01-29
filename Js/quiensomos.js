function init()
{
   const nodo = $("#mainContainer");
   mostrarTitulo(nodo);
   
}


function mostrarTitulo(nodo)
{
    
    const nodoTitulo = $("<h1></h1>");
    nodoTitulo.html("Quienes Somos");
    nodoTitulo.hide();
    nodo.append(nodoTitulo);
    nodoTitulo.fadeIn(2000, ()=>{
    });
}