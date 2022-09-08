//Declarando arreglos en js
//Un arreglo es una variable especial que me permite almacenar
//multiples datos en una sola variable
//Un vector tiene elementos y los elementos tienen indice

//Un objeto es una variable especial 
//que permite que yo almacene multiples datos 
//en una sola variable 
//Un objeto tiene atributos


let peliculas = [{
        nombre: "THOR",
        genero: "Ciencia ficcion",
        duracion: 120,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/THOR.png?alt=media&token=6b3a372c-8db5-4530-8053-b53c3189b87e",
        sinopsis: "Descripcion de la pelicula",
        clasificacion: "General",
        idioma: "Español",
        director: "Alfonso Davies",
        actores: "Mbappe, Marta,Gabigol"
    },
    {
        nombre: "After",
        genero: "Romance",
        duracion: 110,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/after.jpg?alt=media&token=943bca80-6a80-4bfb-b5ee-b496fc5623fb",
        sinopsis: "Descripcion de la pelicula",
        clasificacion: "+18",
        idioma: "Español",
        director: "Alfonso Davies",
        actores: "Mbappe, Marta,Gabigol"
    },
    {
        nombre: "Bestia",
        genero: "Suspenso",
        duracion: 90,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/bestia1.jpg?alt=media&token=b250c34a-5cb8-4b02-a938-8f58aaf2bc89",
        sinopsis: "Descripcion de la pelicula",
        clasificacion: "+18",
        idioma: "Ingles",
        director: "Alfonso Davies",
        actores: "Mbappe, Marta,Gabigol"
    },
    {
        nombre: "Tren bala",
        genero: "Accion",
        duracion: 120,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/Tren%20bala.jpg?alt=media&token=acbd001b-8c23-485b-a7dc-53ee8a81954c",
        sinopsis: "Descripcion de la pelicula",
        clasificacion: "General",
        idioma: "Español",
        director: "Alfonso Davies",
        actores: "Mbappe, Marta,Gabigol"
    },
    {
        nombre: "Pantera negra 2",
        genero: "Ciencia ficcion",
        duracion: 120,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/pantera%20negra2.jpg?alt=media&token=e3c852fa-b286-47df-bda8-a9ac4b60be65",
        sinopsis: "Descripcion de la pelicula",
        clasificacion: "General",
        idioma: "Español",
        director: "Alfonso Davies",
        actores: "Mbappe, Marta,Gabigol"
    },
    {
        nombre: "Mujer rey",
        genero: "Accion",
        duracion: 85,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/mujerRey.jpg?alt=media&token=1901d09a-73e8-419d-b225-7312a659aa04",
        sinopsis: "Descripcion de la pelicula",
        clasificacion: "General",
        idioma: "Español",
        director: "Loquiño",
        actores: "Mbappe, Marta,Gabigol"
    },
    {
        nombre: "Gato con botas",
        genero: "Accion",
        duracion: 90,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/gato.jpg?alt=media&token=bd7b0db9-a5b9-40cc-afc4-2219dc601ad3",
        sinopsis: "Descriion de la pelicula",
        clasificacion: "General",
        idioma: "Español",
        director: "Pekerman",
        actores: "Farfan, Nelson,Yor"
    },
    {
        nombre: "Siniestro",
        genero: "Terror",
        duracion: 90,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/siniestro.jpg?alt=media&token=324e6c1b-3c7f-44b9-a5cb-e523aa58ab3b",
        sinopsis: "Descripcion de la pelicula",
        clasificacion: "+18",
        idioma: "Español",
        director: "Alfonso Davies",
        actores: "Thor, Kane,Neymar"
    },
    {
        nombre: "Dragon ball super hero",
        genero: "Ciencia ficcion",
        duracion: 120,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/DRAGON%20BALL.jpg?alt=media&token=33d725e4-5e97-4856-aa8b-7fd3283c796b",
        sinopsis: "Duracion de la pelicula",
        clasificacion: "General",
        idioma: "Español",
        director: "Pique",
        actores: "Eliam, Mukiele,Kiky"
    },
    {
        nombre: "El demonio en el espejo",
        genero: "Terror",
        duracion: 98,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/ELDEMONIOENELESPEJO1.jpg?alt=media&token=00111df4-1dd7-40ef-b43f-c97a4754be0c",
        sinopsis: "Descripcion de la pelicula",
        clasificacion: "+18",
        idioma: "Español",
        director: "Alfonso Davies",
        actores: "Mbappe, Marta,Gabigol"

    },
]
let peNuevas = [{
        nombre: "Zombie",
        genero: "Terror",
        duracion: "98",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/nuevaspeliculas%2FAPOCALIPSISZOMBIE1%20nueva.jpg?alt=media&token=5323fdd0-35fa-449f-9f2e-54940ec5cec1",
        sinopsis: "Pelicula basada en hechos reales",
        clasificacion: "+18",
        idioma: "Español",
        director: "Diego Latoo",
        actores: "Cristiano Ronaldo, Neymar Junior, Juan Gabriel",
    },
    {
        nombre: "Cuando el diablo llama",
        genero: "Terror",
        duracion: "102",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/nuevaspeliculas%2FCUANDO%20EL%20DIABLO%20LLAMA_nueva.jpg?alt=media&token=89b5796d-0576-4d37-860b-ab7239673604",
        sinopsis: "",
        clasificacion: "+18",
        idioma: "Español",
        director: "Lionel Messi",
        actores: "Angela Gomez, James Rodriguez, Radamel Falcao",
    },
    {
        nombre: "Caseria de brujas",
        genero: "Terror",
        duracion: "120",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/nuevaspeliculas%2FCaceria%20de%20Brujas_nueva.jpg?alt=media&token=1c716e35-f48e-4058-94a8-3efb166a228c",
        sinopsis: "Pelicula basada en hechos reales",
        clasificacion: "+18",
        idioma: "Ingles",
        director: "Julian Alvarez",
        actores: "Ronaldinho, Vinicius, Jarlan Barrera",
    },
    {
        nombre: "El arbol rojo",
        genero: "Terror",
        duracion: "100",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/nuevaspeliculas%2FEL%20ARBOL%20ROJO1_nueva.jpg?alt=media&token=e79c79ba-8443-4c04-b656-250b4365d0ca",
        sinopsis: "Pelicula basada en hechos reales",
        clasificacion: "+18",
        idioma: "Español",
        director: "Jean Calor Centeno",
        actores: "Miguel, Maradona,Vitinho",
    },
    {
        nombre: "La ciudad de las fieras",
        genero: "Accion",
        duracion: "115",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/nuevaspeliculas%2FLA%20CIUDAD%20DE%20LAS%20FIERAS1%20nueva.jpg?alt=media&token=3ddad034-2519-439c-b6b0-2c68ee9efbc3",
        sinopsis: "Pelicula basada en hechos reales",
        clasificacion: "Publico en general",
        idioma: "Frances",
        director: "Xavi Hernandez",
        actores: "Pedri, Portilla, Oscar gamarra",
    },
    {
        nombre: "Malevolo",
        genero: "Horror",
        duracion: "120",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinew-d1031.appspot.com/o/nuevaspeliculas%2FMALEVOLO1_nueva.jpg?alt=media&token=e34be764-d07f-43ea-9e78-f67d1a9638fd",
        sinopsis: "Pelicula basada en hechos reales",
        clasificacion: "+18",
        idioma: "Español",
        director: "Alfonso Gutierrez",
        actores: "Benjamin, Luisye,Djwalaa",
    },
]

//Recorriendo un arreglo en Js

let fila = document.getElementById("fila")
peliculas.forEach(function(pelicula) {
    //console.log(pelicula.atributo)
    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)
    console.log(pelicula.director)
    console.log(pelicula.actores)

    //Este proceso se llama renderizar
    //Traversing(Crear etiquetas de HTML desde Js)
    //Dentro del createElement solo van etiquetas("div")
    //1.Creamos una columna para cada pelicula
    let columna = document.createElement("div")
        //Para agregar clases desde js
    columna.classList.add("col")
        //2.Creamos una tarjeta para cada pelicula
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "h-100")
        //3. Creamos una foto para cada pelicula
    let poster = document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src = pelicula.poster
        //4.Creamos el nombre de cada pelicula
    let titulo = document.createElement("h3")
    titulo.classList.add("card-title", "text-center")
    titulo.textContent = pelicula.nombre
        //5. Creamos el genero de cada pelicula
    let gen = document.createElement("h4")
    gen.classList.add("text-start")
    gen.textContent = "Genero:" + pelicula.genero
        //6. Creamos el idioma
    let idioma = document.createElement("h6")
    idioma.classList.add("fw-bold")
    idioma.textContent = "Idiona:" + pelicula.idioma
        //7. Creamos la sipnosis
    let sip = document.createElement("p")
    sip.classList.add("d-none")
    sip.textContent = "Sipnosis:" + pelicula.sinopsis

    let direc = document.createElement("p")
    direc.classList.add("text-start")
    direc.textContent = "Director" + pelicula.director
    let actor = document.createElement("p")
    actor.classList.add("text-start")
    actor.textContent = "Actores:" + pelicula.actores



    //Padres e hijos
    tarjeta.appendChild(poster)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(gen)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(sip)
    tarjeta.appendChild(direc)
    tarjeta.appendChild(actor)

    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})


let filaNueva = document.getElementById("filaNueva");
peNuevas.forEach(function(Nuevas) {
    console.log(Nuevas.nombre)
    console.log(Nuevas.genero)
    console.log(Nuevas.duracion)
    console.log(Nuevas.poster)
    console.log(Nuevas.sinopsis)
    console.log(Nuevas.clasificacion)
    console.log(Nuevas.idioma)
    console.log(Nuevas.director)
    console.log(Nuevas.actores)

    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjetaN = document.createElement("div")
    tarjetaN.classList.add("card", "h-100")

    let poster = document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src = Nuevas.poster

    let titulo = document.createElement("h3")
    titulo.classList.add("card-title", "text-center")
    titulo.textContent = "Nombre:" + Nuevas.nombre

    let gen = document.createElement("h4")
    gen.classList.add("text-start")
    gen.textContent = "Genero:" + Nuevas.genero

    let idioma = document.createElement("h6")
    idioma.classList.add("fw-bold")
    idioma.textContent = "Idioma:" + Nuevas.idioma

    let duracion = document.createElement("p")
    duracion.textContent = "Duracion:" + Nuevas.duracion

    let sip = document.createElement("p")
    sip.classList.add("d-none")
    sip.textContent = "Sipnosis:" + Nuevas.sinopsis

    let direc = document.createElement("p")
    direc.textContent = "Director" + Nuevas.director

    let actor = document.createElement("p")
    actor.textContent = "Actores:" + Nuevas.actores;

    tarjetaN.appendChild(poster)
    tarjetaN.appendChild(titulo)
    tarjetaN.appendChild(gen)
    tarjetaN.appendChild(idioma)
    tarjetaN.appendChild(sip)
    tarjetaN.appendChild(direc)
    tarjetaN.appendChild(actor)
    tarjetaN.appendChild(duracion)

    columna.appendChild(tarjetaN)
    filaNueva.appendChild(columna)

})