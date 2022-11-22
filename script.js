
const display = document.getElementById("display");

function recibirDato(boton){
      
    switch(boton){
        case'borrar':
            display.value = display.value.substring(0,display.value.length -1);
            break;
        case'borrarT':
            display.value = '';
            break;
        default:
            display.value += boton;
    } 
   
}

function calcular(){

    let expRegObtNumeros = /\+|\/|-|\*/g 
    let expRegObtSignos = /\w/g

    let arrayNumeros = display.value.split(expRegObtNumeros);
    let arraySignos = display.value.split(expRegObtSignos).filter(x=>x);
 
    if(arrayNumeros.length-1 == arraySignos.length){

        let signoTemp = null;
        let temp = 0;
        for(x=0;x<arrayNumeros.length;x++){
            // Escribo error en caso de recibir dos signos juntos
            if(arrayNumeros[x] == ""){
                display.value = "Error!";
                return;
            }
     
            switch(signoTemp){
                case null:
                    temp = parseInt(arrayNumeros[0]);
                    signoTemp = arraySignos[0];
                    break;
                case"+":
                    //Alamaceno el proximo signo a calcular
                    signoTemp = arraySignos[x];
                    //Realizo el calculo del segmento
                    temp = temp + parseInt(arrayNumeros[x]);
                    //Si el signo a ser calculado es "undefined" quiere decir que no hay mas signos
                    //Se debe mostrar el resultado en pantalla
                    if(typeof(signoTemp) == "undefined"){display.value=temp;}
                    break;
                case"-":
                    signoTemp = arraySignos[x];
                    temp = temp - parseInt(arrayNumeros[x]);
                    if(typeof(signoTemp) == "undefined"){display.value=temp;;}
                    break;
                case'*':            
                    signoTemp = arraySignos[x];
                    temp = temp * parseInt(arrayNumeros[x]);
                    if(typeof(signoTemp) == "undefined"){display.value=temp;;}
                    break;
                case'/':
                    signoTemp = arraySignos[x];
                    temp = temp / parseInt(arrayNumeros[x]);
                    if(typeof(signoTemp) == "undefined"){display.value=temp;}
                    break;
                default:
                    display.value = "Error!";
                    break;
            }
        }

    }else{
        display.value = "Error!";
        return;
    }
}

