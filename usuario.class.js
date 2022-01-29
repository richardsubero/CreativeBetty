class Usuario {

    constructor(username, email, phone)
    {
        this.username = username
        this.email = email
        this.phone = phone
    }
  
    registrarUsuario()
    {
        if(this.username!=="")
        {
            localStorage.setItem(this.username, JSON.stringify(this));
            return "OK"
        }
        else 
        {
            return "ERROR: No se pudo crear el usuario"
        }
            
    }
  
  }