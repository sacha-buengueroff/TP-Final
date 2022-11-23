Router Recetas
==============

## Enviar mail 
----------------
Metodo POST

Ruta: http://localhost:8080/recetas/enviarMail 

Body:
  '{
  "email": "sachabuengue@gmail.com"
}'



## Obtener Recetas 
---------------------

Metodo GET

Ruta: http://localhost:8080/recetas/

Return:
```json
[{
    "Titulo": "Salmón al horno",
    "Ingredientes": [
      {"nombre": "Salmón fresco", "cantidad": "2 unidades"}, 
      {"nombre": "Mayonesa", "cantidad": "80g"}, 
      {"nombre": "Clara de huevo", "cantidad": "1 unidad"}
    ],
    "Descripcion": "Encendemos el horno, con calor arriba y abajo, a 200º C. Limpiamos y secamos los lomos de salmón, asegurando que no quedan escamas en la piel. Sazonamos, colocamos en una fuente de horno y reservamos. Pelamos el diente de ajo, rallamos la mitad y lo mezclamos con la mayonesa. Añadimos un poco de ralladura de limón y removemos.",
    "Categoria": "Pescados",
    "Momento": "Cena"
  },
  {
    "Titulo": "Crema de calabaza",
    "Ingredientes": [
      {"nombre": "Calabaza", "cantidad": "1 unidad"}, 
      {"nombre": "Cebolla", "cantidad": "2 unidades"} 
    ],
    "Descripcion": "Cortar la calabaza en trozos y salpimentar. Hornear la calabaza a 180º C hasta que esté blanda. Caramelizar las cebollas a fuego lento con la mantequilla. Freir los ajos previamente troceados.",
    "Categoria": "Verduras",
    "Momento": "Cena"
  }]
```

## Obtener Receta
--------------------

Metodo GET

Ruta: http://localhost:8080/recetas

URL : id (INT)

Return: 
```json
{
    "Titulo": "Tartaletas de manzana",
    "Ingredientes": [
      {"nombre": "Manzana", "cantidad": "3 unidades"}, 
      {"nombre": "Hojaldre", "cantidad": "250g"}
    ],
    "Descripcion": "Cortar las manzanas peladas en láminas finas. Estirar el hojaldre, pintar con mantequilla y espolvorear azúcar moreno.",
    "Categoria": "Panadería",
    "Momento": "Merienda"
}
```


## Publicar Recetas
---------------------

Metodo POST

Ruta: http://localhost:8080/recetas/

Body:
```json
{
  "Titulo": "Empanadas de soja texturizada",
  "Ingredientes": [
    {"nombre": "Tapa de empanada", "cantidad": "12 unidades"}, 
    {"nombre": "Soja texturizada", "cantidad": "1/4kg"} 
  ],
  "Descripcion": "Poner en remojo la soja texturizada junto a un chorrito de salsa de soja. Sofreir primero el morrón, una vez que se ablandó agregar la cebolla y finalmente el tomate, finalmente espolvorear sal.",
  "Categoria": "Empanadas",
  "Momento": "Cena"
}
```

Return:
```json
{
  "Titulo": "Empanadas de soja texturizada",
  "Ingredientes": [
    {"nombre": "Tapa de empanada", "cantidad": "12 unidades"}, 
    {"nombre": "Soja texturizada", "cantidad": "1/4kg"}, 
    {"nombre": "Aceite", "cantidad": "2 cucharadas"}
  ],
  "Descripcion": "Poner en remojo la soja texturizada junto a un chorrito de salsa de soja. Sofreir primero el morrón, una vez que se ablandó agregar la cebolla y finalmente el tomate, finalmente espolvorear sal.",
  "Categoria": "Empanadas",
  "Momento": "Cena",
  "likes":0
}
```

## Actualizar Recetas
-----------------------

Metodo PUT

Ruta: http://localhost:8080/recetas/:id

URL : id (INT)

Body:
```json
{
    "Titulo": "Crema de calabaza",
    "Ingredientes": [
      {"nombre": "Calabaza", "cantidad": "1 unidad"}, 
      {"nombre": "Cebolla", "cantidad": "2 unidades"} 
    ],
    "Descripcion": "Cortar la calabaza en trozos y salpimentar. Hornear la calabaza a 180º C hasta que esté blanda.",
    "Categoria": "Verduras",
    "Momento": "Cena"
  }
```
  
Return:
```json
{
    "id": "636ed8ae60d1feb9c3509f4e",
    "Titulo": "Crema de calabaza",
    "Ingredientes": [
      {"nombre": "Calabaza", "cantidad": "1 unidad"}, 
      {"nombre": "Cebolla", "cantidad": "2 unidades"}
    ],
    "Descripcion": "Cortar la calabaza en trozos y salpimentar. Hornear la calabaza a 180º C hasta que esté blanda. Caramelizar las cebollas a fuego lento con la mantequilla.",
    "Categoria": "Verduras",
    "Momento": "Cena"
  }
```

 ## Eliminar Recetas
-----------------------

Metodo DELETE

Ruta: http://localhost:8080/recetas/:id

URL : id (INT)

Return:
```json
{
    "id": "636ed8ae60d1feb9c3509f4e",
    "Titulo": "Crema de calabaza",
    "Ingredientes": [
      {"nombre": "Calabaza", "cantidad": "1 unidad"}, 
      {"nombre": "Cebolla", "cantidad": "2 unidades"}
    ],
    "Descripcion": "Cortar la calabaza en trozos y salpimentar. Hornear la calabaza a 180º C hasta que esté blanda. Caramelizar las cebollas a fuego lento con la mantequilla.",
    "Categoria": "Verduras",
    "Momento": "Cena"
  }
```


## Enviar receta
-------------------

Metodo POST

Ruta: http://localhost:8080/recetas/:email

URL : email (String)

Body:
```json
{
    "Titulo": "Crema de calabaza",
    "Ingredientes": [
      {"nombre": "Calabaza", "cantidad": "1 unidad"}, 
      {"nombre": "Cebolla", "cantidad": "2 unidades"} 
    ],
    "Descripcion": "Cortar la calabaza en trozos y salpimentar. Hornear la calabaza a 180º C hasta que esté blanda.",
    "Categoria": "Verduras",
    "Momento": "Cena"
  }
```
  
Return:
```json
{"succes": "Email sent"}
```



Router Ingredientes
===============

## Obtener Ingredientes
--------------------------

METODO GET

Ruta: http://localhost:8080/ingredientes/

Return:
```json
[
{"nombre": "Tapa de empanada", "cantidad": "12 unidades"}, 
{"nombre": "Cebolla", "cantidad": "2 unidades"}
]
```


## Obtener Ingrediente
------------------------

METODO GET

Ruta: http://localhost:8080/ingredientes/:id

URL :? id (INT)

Return:
```json
{"nombre": "Tapa de empanada", "cantidad": "12 unidades"}
```


## Agregar Ingrediente
-------------------------

METODO POST

Ruta: http://localhost:8080/ingredientes/

Body: 
```json
{
  "nombre": "Huevo de codorniz"
}
```


Router Usuarios
===============


## Autentificar usuario
-------------------------

METODO POST

Ruta:http://localhost:8080/usuarios

Body:
```json
{"username": "sacha","password": "hola123"}
```

Return:
```json
{"permiso": "concedido"}
```


## Enviar email
-------------------------

METODO POST

Ruta:http://localhost:8080/usuarios

Body:
```json
{"username": "sacha","password": "****"}
```

Return:
```json
{"succes": "Email sent"}
```

