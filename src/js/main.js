'use strict';

const serverUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
const noImgUrl ='https://via.placeholder.com/200x200/3d1b5b/f3f3f3/?text=cocktail';
let cocktailData = [];
const listSearch = document.querySelector('.js-listElement');
const inputSearch = document.querySelector('.js-inputSearch');
const btnSearch = document.querySelector('.js-btnSearch');

//CARGA LISTADO DE MARGARITAS POR DEFECTO
fetch(serverUrl)
    .then((response) => response.json())
    .then((data) =>{
        if(data.drinks.strDrinkThumb === ''){
            cocktailData = data.drinks.map((drink) => ({
            name: drink.strDrink,
            img: noImgUrl,
        }));
        render(cocktailData);
        }else{cocktailData = data.drinks.map((drink) => ({
            name: drink.strDrink,
            img: drink.strDrinkThumb,
        }));
        render(cocktailData);}
        
});

//RENDERIZADO DEL LISTADO PRINCIPAL DE BEBIDAS
function render(){
    listSearch.innerHTML = '';
    for (const cocktail of cocktailData ){
        const liElement = document.createElement('li');
        const titleElement = document.createElement('h3');
        const imgElement = document.createElement('img');

        listSearch.appendChild(liElement);
        liElement.appendChild(titleElement);
        titleElement.appendChild(imgElement);

        imgElement.setAttribute('src', cocktail.img);
        imgElement.setAttribute('class','img');

        const title = document.createTextNode(cocktail.name);
        titleElement.appendChild(title);
    }
};

//FUNCIÓN DE BÚSQUEDA
function handleclick () {
    let inputValue = inputSearch.value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then((response) => response.json())
        .then((data) =>{
         if(data.drinks.strDrinkThumb === ''){
            cocktailData = data.drinks.map((drink) => ({
            name: drink.strDrink,
            img: noImgUrl,
        }));
        render(cocktailData);
        }else{cocktailData = data.drinks.map((drink) => ({
            name: drink.strDrink,
            img: drink.strDrinkThumb,
        }));
        render(cocktailData);}
    });
}

btnSearch.addEventListener('click', handleclick);