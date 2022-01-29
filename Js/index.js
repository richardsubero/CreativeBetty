function init()
{
   const nodo = $("#mainContainer");
   mostrarTitulo(nodo);
   
}


function mostrarTitulo(nodo)
{
    
    const nodoTitulo = $("<h1></h1>");
    nodoTitulo.html("Betty Creative Accesories");
    nodoTitulo.hide();
    nodo.append(nodoTitulo);
    nodoTitulo.slideDown(2000, ()=>{
    });
}
