Router Recetas

Todas las rutas se 

/* Enviar mail */
Metodo GET
Ruta: http://localhost:8080/recetas/enviarMail 
Body:
  '{
  "email": "sachabuengue@gmail.com, sebikatzcatz@gmail.com"
}'

/* Obtener Recetas */
Metodo GET
Ruta: http://localhost:8080/recetas/
Retrun:[{
    "Titulo": "Salmón al horno",
    "Ingredientes": [
      {"nombre": "Salmón fresco", "cantidad": "2 unidades"}, 
      {"nombre": "Mayonesa", "cantidad": "80g"}, 
      {"nombre": "Clara de huevo", "cantidad": "1 unidad"},
      {"nombre": "Diente de ajo", "cantidad": "0.5 unidades"},
      {"nombre": "Limón", "cantidad": "1 unidades"},
      {"nombre": "Sal", "cantidad": "A gusto"},
    ],
    "Descripcion": "Encendemos el horno, con calor arriba y abajo, a 200º C. Limpiamos y secamos los lomos de salmón, asegurando que no quedan escamas en la piel. Sazonamos, colocamos en una fuente de horno y reservamos. Pelamos el diente de ajo, rallamos la mitad y lo mezclamos con la mayonesa. Añadimos un poco de ralladura de limón y removemos.

    Batimos la clara de huevo a punto de nieve. Mezclamos con la mayonesa suavemente y con movimientos envolventes para que no pierda el aire incorporado con el batido. Extendemos una capa de la espuma de mayonesa sobre los lomos de salmón, introducimos en el horno y cocemos durante 10 minutos (el tiempo exacto dependerá del grosor de los lomos). Si, una vez hecho el salmón, la superficie no se dorara y quisiéramos darle un poco de color, añadimos un toque de grill final.",
    "Categoria": "Pescados",
    "Momento": "Cena"
  },
  {
    "Titulo": "Crema de calabaza",
    "Ingredientes": [
      {"nombre": "Calabaza", "cantidad": "1 unidad"}, 
      {"nombre": "Cebolla", "cantidad": "2 unidades"}, 
      {"nombre": "Manteca", "cantidad": "1 cucharada"},
      {"nombre": "Diente de ajo", "cantidad": "2 unidades"},
      {"nombre": "Almendra", "cantidad": "A gusto"},
    ],
    "Descripcion": "Cortar la calabaza en trozos y salpimentar.
    Hornear la calabaza a 180º C hasta que esté blanda.
    Caramelizar las cebollas a fuego lento con la mantequilla.
    Freir los ajos previamente troceados.
    Licuar la calabaza con el ajo y la cebolla. Añadir un poco de agua si es necesario, para que quede la consistencia de crema.
    Decorar con las almendras laminadas.",
    "Categoria": "Verduras",
    "Momento": "Cena"
  }]

/* Obtener Receta */
Metodo GET
Ruta:http://localhost:8080/recetas
URL : id (INT)
Return: {
    "Titulo": "Tartaletas de manzana",
    "Ingredientes": [
      {"nombre": "Manzana", "cantidad": "3 unidades"}, 
      {"nombre": "Hojaldre", "cantidad": "250g"}, 
      {"nombre": "Manteca", "cantidad": "2 cucharada"},
      {"nombre": "Azucar", "cantidad": "1 cucharada"},
    ],
    "Descripcion": "Cortar las manzanas peladas en láminas finas.
    Estirar el hojaldre, pintar con mantequilla y espolvorear azúcar moreno.
    Colocar la manzana sobre el hojaldre hecho tiras, y enrollar para que quede forma de flor.
    Hornear a 180º C hasta que el hojaldre se dore.",
    "Categoria": "Panadería",
    "Momento": "Merienda"
  }


/* Publicar Recetas */
Metodo POST
Ruta: http://localhost:8080/recetas/
Body:
{
  "Titulo": "Empanadas de soja texturizada",
  "Ingredientes": [
    {"nombre": "Tapa de empanada", "cantidad": "12 unidades"}, 
    {"nombre": "Soja texturizada", "cantidad": "1/4kg"}, 
    {"nombre": "Aceite", "cantidad": "2 cucharadas"},
    {"nombre": "Morrón", "cantidad": "2 unidades"},
    {"nombre": "Tomate", "cantidad": "2 unidades"},
    {"nombre": "Cebolla", "cantidad": "2 unidades"},
    {"nombre": "Sal", "cantidad": "A gusto"},
    {"nombre": "Salsa de soja", "cantidad": "A gusto"}
  ],
  "Descripcion": "Poner en remojo la soja texturizada junto a un chorrito de salsa de soja. Sofreir primero el morrón, una vez que se ablandó agregar la cebolla y finalmente el tomate, finalmente espolvorear sal. Escurrir la soja texturizada y sofreir hasta que se dore, hecharle un chorrito de salsa de soja y saltear hasta que se absorba toda la salsa de soja. Mezclar todo y armar las empanadas. Llevar a horno a fuego medio durante 25 minutos.",
  "Categoria": "Empanadas",
  "Momento": "Cena"
}
return:
{
  "Titulo": "Empanadas de soja texturizada",
  "Ingredientes": [
    {"nombre": "Tapa de empanada", "cantidad": "12 unidades"}, 
    {"nombre": "Soja texturizada", "cantidad": "1/4kg"}, 
    {"nombre": "Aceite", "cantidad": "2 cucharadas"},
    {"nombre": "Morrón", "cantidad": "2 unidades"},
    {"nombre": "Tomate", "cantidad": "2 unidades"},
    {"nombre": "Cebolla", "cantidad": "2 unidades"},
    {"nombre": "Sal", "cantidad": "A gusto"},
    {"nombre": "Salsa de soja", "cantidad": "A gusto"}
  ],
  "Descripcion": "Poner en remojo la soja texturizada junto a un chorrito de salsa de soja. Sofreir primero el morrón, una vez que se ablandó agregar la cebolla y finalmente el tomate, finalmente espolvorear sal. Escurrir la soja texturizada y sofreir hasta que se dore, hecharle un chorrito de salsa de soja y saltear hasta que se absorba toda la salsa de soja. Mezclar todo y armar las empanadas. Llevar a horno a fuego medio durante 25 minutos.",
  "Categoria": "Empanadas",
  "Momento": "Cena",
  "likes":0
}


/* Actualizar Recetas */
Metodo PUT
Ruta: http://localhost:8080/recetas/:id
URL : id (INT)
Body:
  {
    "Titulo": "Crema de calabaza",
    "Ingredientes": [
      {"nombre": "Calabaza", "cantidad": "1 unidad"}, 
      {"nombre": "Cebolla", "cantidad": "2 unidades"}, 
      {"nombre": "Manteca", "cantidad": "1 cucharada"},
      {"nombre": "Diente de ajo", "cantidad": "2 unidades"},
      {"nombre": "Almendra", "cantidad": "A gusto"},
    ],
    "Descripcion": "Cortar la calabaza en trozos y salpimentar.
    Hornear la calabaza a 180º C hasta que esté blanda.
    Caramelizar las cebollas a fuego lento con la mantequilla.
    Freir los ajos previamente troceados.
    Licuar la calabaza con el ajo y la cebolla. Añadir un poco de agua si es necesario, para que quede la consistencia de crema.
    Decorar con las almendras laminadas.",
    "Categoria": "Verduras",
    "Momento": "Cena"
  }
Return:
   {
    "id": 636ed8ae60d1feb9c3509f4e,
    "Titulo": "Crema de calabaza",
    "Ingredientes": [
      {"nombre": "Calabaza", "cantidad": "1 unidad"}, 
      {"nombre": "Cebolla", "cantidad": "2 unidades"}, 
      {"nombre": "Manteca", "cantidad": "1 cucharada"},
      {"nombre": "Diente de ajo", "cantidad": "2 unidades"},
      {"nombre": "Almendra", "cantidad": "A gusto"},
    ],
    "Descripcion": "Cortar la calabaza en trozos y salpimentar.
    Hornear la calabaza a 180º C hasta que esté blanda.
    Caramelizar las cebollas a fuego lento con la mantequilla.
    Freir los ajos previamente troceados.
    Licuar la calabaza con el ajo y la cebolla. Añadir un poco de agua si es necesario, para que quede la consistencia de crema.
    Decorar con las almendras laminadas.",
    "Categoria": "Verduras",
    "Momento": "Cena"
  }


 /* Eliminar Recetas */
Metodo DELETE
Ruta:localhost:8080/recetas/:id
URL : id (INT)
Return:
   {
    "id": 636ed8ae60d1feb9c3509f4e,
    "Titulo": "Crema de calabaza",
    "Ingredientes": [
      {"nombre": "Calabaza", "cantidad": "1 unidad"}, 
      {"nombre": "Cebolla", "cantidad": "2 unidades"}, 
      {"nombre": "Manteca", "cantidad": "1 cucharada"},
      {"nombre": "Diente de ajo", "cantidad": "2 unidades"},
      {"nombre": "Almendra", "cantidad": "A gusto"},
    ],
    "Descripcion": "Cortar la calabaza en trozos y salpimentar.
    Hornear la calabaza a 180º C hasta que esté blanda.
    Caramelizar las cebollas a fuego lento con la mantequilla.
    Freir los ajos previamente troceados.
    Licuar la calabaza con el ajo y la cebolla. Añadir un poco de agua si es necesario, para que quede la consistencia de crema.
    Decorar con las almendras laminadas.",
    "Categoria": "Verduras",
    "Momento": "Cena"
  }


/* Obtener Ingredientes */
METODO GET
Ruta:http://localhost:8080/ingredientes/
Return:[
{"nombre": "Tapa de empanada", "cantidad": "12 unidades"}, 
{"nombre": "Cebolla", "cantidad": "2 unidades"}
]

/* Obtener Ingrediente */
METODO GET
Ruta:http://localhost:8080/ingredientes/:id
URL : id (INT)
Return:{"nombre": "Tapa de empanada", "cantidad": "12 unidades"}

/* Agregar Ingrediente */
METODO POST
Ruta:http://localhost:8080/ingredientes/



