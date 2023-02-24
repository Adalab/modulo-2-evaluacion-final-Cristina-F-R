/* eslint-disable indent */
'use strict';

const serverUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
const noImgUrl ='https://via.placeholder.com/200x200/3d1b5b/f3f3f3/?text=cocktail';
const favoritesList = document.querySelector('.js-listFav');
const listSearch = document.querySelector('.js-listElement');
const inputSearch = document.querySelector('.js-inputSearch');
const btnSearch = document.querySelector('.js-btnSearch');
let favorites = [];
let cocktailData = [];

//CARGA LISTADO DE MARGARITAS POR DEFECTO
fetch(serverUrl)

    .then((response) => response.json())
    .then((data) =>{
        if(data.drinks.strDrinkThumb === ''){
            cocktailData = data.drinks.map((drink) => ({
            name: drink.strDrink,
            img: noImgUrl,
            id: drink.idDrink,
        }));
        render(cocktailData);
        }else{cocktailData = data.drinks.map((drink) => ({
            name: drink.strDrink,
            img: drink.strDrinkThumb,
            id: drink.idDrink,
        }));
        render(cocktailData);
            const favoritesLocalStorage = JSON.parse(localStorage.getItem('listFavorites'));
    if(favoritesLocalStorage.length>0){
        favorites = favoritesLocalStorage;
        renderFavoritesItems(favorites);
    }
    }
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
        liElement.setAttribute('class','js-liElement');
        liElement.setAttribute('id',cocktail.id);

        const title = document.createTextNode(cocktail.name);
        titleElement.appendChild(title);
    }
    addEventClickList(cocktailData);
}

//FUNCIÓN DE BÚSQUEDA
function handleclick (event) {
     event.preventDefault();
    let inputValue = inputSearch.value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then((response) => response.json())
        .then((data) =>{
         if(data.drinks.strDrinkThumb === ''){
            cocktailData = data.drinks.map((drink) => ({
            name: drink.strDrink,
            img: noImgUrl,
            id: drink.idDrink,
        }));
        render(cocktailData);
        }else{cocktailData = data.drinks.map((drink) => ({
            name: drink.strDrink,
            img: drink.strDrinkThumb,
            id: drink.idDrink,
        }));
        render(cocktailData);}
    });
}

btnSearch.addEventListener('click', handleclick);


//FAVORITOS

function addEventClickList (){
    const liElementList = document.querySelectorAll('.js-liElement');
    for (const eachLiElement of liElementList){
        eachLiElement.addEventListener('click', handleClickFavorites);
}}


function handleClickFavorites(event){
    const idSelected = event.currentTarget.id;
    event.currentTarget.classList.toggle('favorites');
    const selectedFavorites = cocktailData.find (cocktail => cocktail.id === idSelected); //busca el id que acabamos de seleccionar en la list de cockteles impresa y nos devuelve el objeto con el mismo id.
    console.log(selectedFavorites);
    const indexFav = favorites.findIndex (cocktail => cocktail.id === idSelected);
    console.log(indexFav);
    if (indexFav === -1){
        favorites.push(selectedFavorites);
    }else{
        favorites.splice(indexFav,1);
    }

    handleFavorites(favorites);
}


function handleFavorites(){
    favoritesList.innerHTML = '';
    renderFavoritesItems(favorites);
    localStorage.setItem ('listFavorites', JSON.stringify(favorites));
    addEventClickFavorites(favorites);
;
}

function renderFavoritesItems(){
    for (const eachfavorite of favorites){
        const liElement = document.createElement('li');
        const titleElement = document.createElement('h3');
        const imgElement = document.createElement('img');

        favoritesList.appendChild(liElement);
        liElement.appendChild(titleElement);
        titleElement.appendChild(imgElement);

        imgElement.setAttribute('src', eachfavorite.img);
        imgElement.setAttribute('class','img');
        liElement.setAttribute('class','js-listFav');
        liElement.setAttribute('id', eachfavorite.id);

        const title = document.createTextNode(eachfavorite.name);
        titleElement.appendChild(title);
    }
}

//BONUS: BORRAR DE FAVORITOS
// function addEventClickFavorites(){
//     const favoriteLi = document.querySelectorAll('.js-listFav');
//     for (const eachfavoriteItem of favoriteLi){
//         eachfavoriteItem.addEventListener('click',handleClickRemove());
//     }
// }
