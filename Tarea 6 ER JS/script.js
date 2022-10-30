function myFunction() {
    // Get the value of the input field with id="palabra"
  /*  let x1 = document.getElementById("palabra").value;
    const regex = /^(p|s).+(o|a)$/i;

    if (regex.test(x1)) {
        text = "Nombre valido";
    }
    else {
        text = "Nombre no valido";
    }

    document.getElementById("valida_palabra").innerHTML = text;

    // Get the value of the input field with id="numero"
    let x2 = document.getElementById("numero").value;
    const regex2 = /^[0-9]{2}$/i;

    if (regex2.test(x2)) {
        text = "Numero valido";
    }
    else {
        text = "Numero no valido";
    }

    document.getElementById("valida_numero").innerHTML = text;*/

    //Obtener el nombre sin validar
    let x3 = document.getElementById("nombre").value;

    //Obtener numero de control
    let x4 = document.getElementById("ncontrol").value;
    const regex4 = /^[c,m]?([0-9]{2}(120|121)[0-9]{3})$/i;

    if (regex4.test(x4)) {
        text = "Número de control válido";
    }
    else {
        text = "Número de control NO válido";
    }

    document.getElementById("valida_ncontrol").innerHTML = text;

    //Obtener RFC
    
     let x5 = document.getElementById("numeroRFC").value;
     const regex5 = /^[A-Z]{4}([0-9]{6})\w{3}$/i;
     const FechaNac = regex5.exec(x5); 
   
     if (regex5.test(x5)) {
       text="RFC valido";
       console.log("Fecha de nacimiento: "+FechaNac)
       
     }
     else {
       text="RFC no valido";
     }
   
     document.getElementById("valida_numeroRFC").innerHTML = text;

     // Obtener numero de telefono
    let x6 = document.getElementById("numerot").value;
    const regex6 = /^[4][4][3]\d{7}$/
  
    if (regex6.test(x6)) {
      text="Numero de telefono valido";
    }
    else {
      text="Numero de telefono no valido";
    }
  
    document.getElementById("valida_numerot").innerHTML = text;

    // Obtener correo
   let x7 = document.getElementById("correo").value;
   const regex7 = /^(l)((m|c)?[0-9]{2}(120|121)[0-9]{3})(@morelia.tecnm.mx)$/i;
 
   
  if (regex7.test(x7)) {
    const Correo = regex7.exec(x7); 
    console.log(""+Correo);
    console.log("Correo: "+Correo[2]);
    console.log("Número de control: "+valNC[0]);


    if(Correo[2] == valNC[0]){
    text="Correo valido";
    console.log("valido");
    text ="Correo válido";
    document.getElementById("Correo_valido").innerHTML = text;
    
  
  }
  else{
      
      console.log("no valido")
      text ="Correo no válido";
      document.getElementById("Correo_valido").innerHTML = text;
      text="El correo no coincide con el número de control";
    document.getElementById("valida_correo").innerHTML = text;
    }
    
  }
 
   document.getElementById("valida_correo").innerHTML = text;

}