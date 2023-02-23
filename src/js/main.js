'use strict';

const serverUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
let cocktailData = [];
const listSearch = document.querySelector('.js-listElement');
const inputSearch = document.querySelector('.js-inputSearch');
const btnSearch = document.querySelector('.js-btnSearch');

fetch(serverUrl)
    .then((response) => response.json())
    .then((data) =>{
        // console.log(data.drinks);
        cocktailData = data.drinks.map((drink) => ({
            name: drink.strDrink,
            img: drink.strDrinkThumb,
        }));
        // console.log(cocktailData);
        render(cocktailData);
});

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

function handleclick () {
    let inputValue = inputSearch.value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data);
            cocktailData = data.drinks.map((cocktail) => ({
                name: cocktail.strDrink,
                img: cocktail.strDrinkThumb,
            }));
            // console.log(cocktailData);
            render(cocktailData);
    });
}

btnSearch.addEventListener('click', handleclick);