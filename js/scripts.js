

//console.log(puntajeDeGolf(6, 9));*/

/*function ClasificacionTrimestral(Nota) {
    let resultado;
    switch (Nota) {
        case 1 :
            resultado = "Es una nota sobresaliente";
            break;

        case 2:
            resultado = "Es una nota alta";
             break;

        case 3:
            resultado = "Es una buena nota";
            break;

        case 4:;
             resultado = "Es una nota baja";
             break;

            
        default:
            resultado = "La nota no alcanza el aprobado"
            break;
    }

    return resultado;
    
}

console.log(ClasificacionTrimestral(5));*/ 

const miReceta = [
    {   
        "tipo": "Budin de limon",
        "costo": "1245",
        "Ingredientes": ["1200 grs harina leudante", 
        "250 grs azucar blanca o mascabo",
        "250 ml de aceite",
        "leche cantidad necesaria",
        "una cucharada de esencia de vainilla",
        "ralladura de 1 limon"],

        "Para llevar": true,
    },

    {
        "tipo": "Torta invertida de manzana",
        "costo": "2545",
        "Ingredientes": ["1200 grs harina leudante", 
        "1kg de manzanas rojas o verdes",
        "250 grs azucar blanca o mascabo",
        "250 ml de aceite",
        "leche cantidad necesaria",
        "una cucharada de esencia de vainilla",
        "ralladura de 1 limon"],

        "Para llevar": true,
        },


        {
            
            "tipo": "Budin de chocolate",
            "costo": "3545",
            "Ingredientes": ["1200 grs harina leudante", 
            "250 grs azucar blanca o mascabo",
            "250 ml de aceite",
            "500 grs de chocolate o nesquik",
            "leche cantidad necesaria",
            "una cucharada de esencia de vainilla",
            "ralladura de 1 limon" ],

            "Para llevar": true,
        }

]; 

console.log(miReceta[1] ["ingredientes"]);

