'use strict';
const container=document.querySelector('.container')
// api 

fetch(`https://fakestoreapi.com/products`)
    .then(res => { return res.json() })
    .then(data => {
        console.log(data)
        data.map((element) => {
            return container.innerHTML+=
       `
       <div class="card"> 
        <button class="product-category">${element.category}</button>
       <img src="${element.image}" class="product-image"/>
        <h3 class="product-name">${element.title}</h3>
        
        <div class="horizontal">
        <h4 class="product-price">$${element.price}</h4>
        <div class="rating">${element.rating.rate}<i class="fa-solid fa-star"></i></div>
       
        </div>
    </div>
       `
       })
    }).catch(err =>
        alert("Something get wrong"));