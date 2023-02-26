/* eslint-disable indent */
'use strict';

const serverUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
const noImgUrl ='https://via.placeholder.com/200x200/3d1b5b/f3f3f3/?text=cocktail';
const favoritesList = document.querySelector('.js-listFav');
const listSearch = document.querySelector('.js-listElement');
const inputSearch = document.querySelector('.js-inputSearch');
const btnSearch = document.querySelector('.js-btnSearch');
// const btnResetFav = document.querySelector('.js-resetFav');
const btnReset = document.querySelector('.js-btnReset');
let favorites = [];
let cocktailData = [];

//CHARGE DEAULT MARGARITA LIST:
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
            renderAll(cocktailData);
            }else{cocktailData = data.drinks.map((drink) => ({
                name: drink.strDrink,
                img: drink.strDrinkThumb,
                id: drink.idDrink,
            }));
            renderAll(cocktailData);

            const favoritesLocalStorage = JSON.parse(localStorage.getItem('listFavorites'));
            if(favoritesLocalStorage.length>0){
                favorites = favoritesLocalStorage;
                renderAll(favorites);
            }
        }
    });
}

//RENDER CARDS AND LISTS:
function renderAll(ListElements){
    if(ListElements === favorites){
         favoritesList.innerHTML = '';
    }else{
        listSearch.innerHTML = '';
        }
    for (const eachElement of ListElements){
        const liElement = document.createElement('li');
        const titleElement = document.createElement('h3');
        const imgElement = document.createElement('img');
        const removeElement = document.createElement('div');

        liElement.appendChild(titleElement);
        liElement.appendChild(imgElement);
        liElement.appendChild(removeElement);

        imgElement.setAttribute('src', eachElement.img);
        imgElement.setAttribute('class','img');
        titleElement.setAttribute('class','card_title');
        liElement.setAttribute('id', eachElement.id);

        const title = document.createTextNode(eachElement.name);
        titleElement.appendChild(title);

        if(ListElements === favorites){
            favoritesList.appendChild(liElement);
            liElement.setAttribute('class','card noFavorites js-listFav');
            removeElement.setAttribute('class','remove js-remove');
            removeElement.setAttribute('id',eachElement.id);
            const remove = document.createTextNode('X');
            removeElement.appendChild(remove);
        }else{
            listSearch.appendChild(liElement);
            liElement.setAttribute('class','card noFavorites js-liElement');
        }
    }
     if(ListElements === favorites){
        localStorage.setItem ('listFavorites', JSON.stringify(favorites));
    }
    addEventClickList(cocktailData);
    addEventClickFavorites();
    isItFavorite();
}

//SEARCH:
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
        renderAll(cocktailData);
        }else{cocktailData = data.drinks.map((drink) => ({
            name: drink.strDrink,
            img: drink.strDrinkThumb,
            id: drink.idDrink,
        }));
        renderAll(cocktailData);}
    });
}

btnSearch.addEventListener('click', handleclick);

//RESET BUTTON HEADER:
btnReset.addEventListener('click', handleclickReset);

function handleclickReset(event){
    event.preventDefault();
    inputSearch.value = '';
    fetchInicio();
}


//ADD FAVORITES WITH CLICK:
function addEventClickList (){
    const liElementList = document.querySelectorAll('.js-liElement');
    for (const eachLiElement of liElementList){
        eachLiElement.addEventListener('click', handleClickFavorites);
}}


function handleClickFavorites(event){
    const idSelected = event.currentTarget.id;
    event.currentTarget.classList.toggle('favorites');
    event.currentTarget.classList.toggle('noFavorites');
    const selectedFavorites = cocktailData.find (cocktail => cocktail.id === idSelected);
    const indexFav = favorites.findIndex (cocktail => cocktail.id === idSelected);
    if (indexFav === -1){
        favorites.push(selectedFavorites);
    }else{
        favorites.splice(indexFav,1);
    }
    renderAll(favorites);
}

//BONUS: MANTAIN AVORITES CLASS:
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

//BONUS: DELETE FAVORITES WITH X:
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
    renderAll(cocktailData);
    renderAll(favorites);
}

//RESET FAVORITES BUTTON:
const btnResetFav = document.querySelector ('.js-btnResetFav');
btnResetFav.addEventListener('click', handleClickResetFav);

function handleClickResetFav() {
    favoritesList.innerHTML = '';
    localStorage.removeItem('listFavorites');
    renderAll(cocktailData);
}