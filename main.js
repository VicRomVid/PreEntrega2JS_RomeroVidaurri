const Especie = function (genero, sp, observaciones){
    this.genero=genero;
    this.sp=sp;
    this.observaciones=observaciones;
}

let especie1 = new Especie ("Ardea", "alba", 30)
let especie2 = new Especie ("Ardea", "herodias", 6)
let especie3 = new Especie ("Saucerottia", "beryllina", 12)
let especie4 = new Especie ("Tyrannus", "vociferans", 8)
let especie5 = new Especie ("Tyrannus", "melancholicus", 2)
let especie6 = new Especie ("Tyrannus", "verticalis", 1)
let especie7 = new Especie ("Haemorhous", "mexicanus", 14)
let especie8 = new Especie ("Quiscalus", "mexicanus", 6)

let lista = [especie1, especie2, especie3, especie4, especie5, especie6, especie7, especie8]

function filtrarEspecies(){
    let palabraClave = prompt("Ingresa la especie que quieres buscar").trim().toUpperCase()
    let resultado = lista.filter( (x)=> x.genero.toUpperCase().includes(palabraClave))
    
    if(resultado.length >0) {
        console.table(resultado)
    }else {
        alert("no se encontró ninguna coincidencia con: " + palabraClave)
    }
}

function agregarEspecie(){
    let genero = prompt("Ingresa el género")
    let sp = prompt("Ingresa la especie")
    let observaciones = parseInt(prompt("Ingresa el número de observaciones"))

    if(genero === "" || sp === "" || isNaN(observaciones)){
        alert("por favor ingresa datos válidos")
        return
    }

    let especie = new Especie(genero,sp,observaciones)
    lista.push(especie)
    console.table(lista)
}

function ordenar(){
    lista.sort((a,b)=> b.observaciones - a.observaciones)
    return console.table(lista)
}