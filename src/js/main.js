/* eslint-disable indent */
'use strict';

const serverUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
const noImgUrl ='https://via.placeholder.com/200x200/3d1b5b/f3f3f3/?text=cocktail';
const favoritesList = document.querySelector('.js-listFav');
const listSearch = document.querySelector('.js-listElement');
const inputSearch = document.querySelector('.js-inputSearch');
const btnSearch = document.querySelector('.js-btnSearch');
const btnResetFav = document.querySelector('.js-resetFav');
const btnReset = document.querySelector('.js-btnReset');
let favorites = [];
let cocktailData = [];

//CARGA LISTADO DE MARGARITAS POR DEFECTO
fetchInicio();

function fetchInicio(){
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
                renderFavorites(favorites);
        }
        }
    });
}
//RENDERIZADO DEL LISTADO PRINCIPAL DE BEBIDAS
function render(){
    listSearch.innerHTML = '';
    for (const cocktail of cocktailData ){

        const liElement = document.createElement('li');
        const titleElement = document.createElement('h3');
        const imgElement = document.createElement('img');

        listSearch.appendChild(liElement);
        liElement.appendChild(titleElement);
        liElement.appendChild(imgElement);

        imgElement.setAttribute('src', cocktail.img);
        imgElement.setAttribute('class','img');
        liElement.setAttribute('class','sectionList__title--listElement noFavorites js-liElement');
        titleElement.setAttribute('class','sectionList__title--titleElement');
        liElement.setAttribute('id',cocktail.id);

        const title = document.createTextNode(cocktail.name);
        titleElement.appendChild(title);

    }
    addEventClickList(cocktailData);
    isItFavorite();
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

//BOTÓN RESET BÚSCADOR:
btnReset.addEventListener('click', handleclickReset);

function handleclickReset(event){
    event.preventDefault();
    inputSearch.value = '';
    fetchInicio();
}


//FAVORITOS

function addEventClickList (){
    const liElementList = document.querySelectorAll('.js-liElement');
    for (const eachLiElement of liElementList){
        eachLiElement.addEventListener('click', handleClickFavorites);
}}


function handleClickFavorites(event){
    const idSelected = event.currentTarget.id;
    event.currentTarget.classList.toggle('favorites');
    const selectedFavorites = cocktailData.find (cocktail => cocktail.id === idSelected);
    console.log(selectedFavorites);
    const indexFav = favorites.findIndex (cocktail => cocktail.id === idSelected);
    console.log(indexFav);
    if (indexFav === -1){
        favorites.push(selectedFavorites);
    }else{
        favorites.splice(indexFav,1);
    }
    renderFavorites();
}

function renderFavorites(){
    favoritesList.innerHTML = '';
    for (const eachfavorite of favorites){
        const liElement = document.createElement('li');
        const titleElement = document.createElement('h3');
        const imgElement = document.createElement('img');
        const removeElement = document.createElement('div');

        favoritesList.appendChild(liElement);
        liElement.appendChild(titleElement);
        liElement.appendChild(imgElement);
        liElement.appendChild(removeElement);

        imgElement.setAttribute('src', eachfavorite.img);
        imgElement.setAttribute('class','img');
        liElement.setAttribute('class','sectionFav__title--listElement js-listFav');
        titleElement.setAttribute('class','sectionList__title--titleElement');
        liElement.setAttribute('id', eachfavorite.id);
        removeElement.setAttribute('class','js-remove');
        removeElement.setAttribute('id',eachfavorite.id);

        const title = document.createTextNode(eachfavorite.name);
        const remove = document.createTextNode('X');
        removeElement.appendChild(remove);
        titleElement.appendChild(title);
    }

    localStorage.setItem ('listFavorites', JSON.stringify(favorites));
    addEventClickFavorites();
    isItFavorite();
}

function isItFavorite () {
    const liElementList = document.querySelectorAll('.js-liElement');
    for(const eachElementList of liElementList){
        const isFavorite = favorites.find (favorite => favorite.id === eachElementList.id);
            if(isFavorite){
                eachElementList.classList.add('favorites');
                eachElementList.classList.remove('noFavorites');
            }
        }
}


//BONUS: BORRAR DE FAVORITOS
function addEventClickFavorites(){
    const removeContainer = document.querySelectorAll('.js-remove');
    for (const eachRemoveItem of removeContainer){
        eachRemoveItem.addEventListener('click',handleClickRemove);
    }
}

function handleClickRemove(event){
    const idToRemove = event.currentTarget.id;
    const indexToRemove = favorites.findIndex(favoriteDrink => favoriteDrink.id === idToRemove);
    favorites.splice(indexToRemove,1);
    renderFavorites();
    render();
}

//RESETEAR FAVORITOS:


btnResetFav.addEventListener('click', handleClickResetFav);

function handleClickResetFav() {
    console.log('reset disparada');
    favoritesList.innerHTML = '';
    localStorage.removeItem('listFavorites');
    render();
}