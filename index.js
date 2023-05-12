//capturar html
const input = document.getElementById("buscador")
const btn = document.getElementById("btnBuscador")
const divResult = document.getElementById("resultado")
const contenedor = document.querySelector(".contenedor")
// fin captura html

// logica de la busqueda
let comidaElegida = ""

input.addEventListener("change", (e) => {
    comidaElegida = e.target.value
})


btn.addEventListener("click", () => {
    if (comidaElegida) {
        divResult.style.display = "flex"
        contenedor.style.display = "none"
        const comidaFiltrada = comidas.find(comida => comida.strMeal.toLowerCase() === comidaElegida.toLowerCase())
        if (comidaFiltrada) {
            divResult.innerHTML = createMeals(comidaFiltrada.strMeal, comidaFiltrada.strInstructions, comidaFiltrada.strMealThumb)
        } else {
            divResult.innerHTML= "<h1>Ups! no se encontraron comidas.</h1>"
        }
    } else {
        alert("ingresa una comida!")
    }
})

function createMeals(strMeal, strInstructions, strMealThumb) {
    return `
        <h1>${strMeal}</h1>
        <p>${strInstructions}</p>
        <img src="${strMealThumb}" alt="">
  `
}


let comidas = []

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then(response => response.json())
    .then(data => {
        comidas.push(...data.meals)
    })
    .catch(error =>{
        console.log("error")
    })

//fin logica busqueda