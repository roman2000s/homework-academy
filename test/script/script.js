let menu = document.querySelector('.menu'),
    menuBtn = document.querySelector('.nav__btn'),
    menuLinkWrapper = document.querySelector('.section-contain'),
    searchBtn = document.querySelector('.search__hidden'),
    searchContain = document.querySelector('.search-hidden-contain'),
    filterLogo = document.getElementsByClassName('filter-hidden-contain'),
    popuplogo = document.querySelector('.filter-hidden-logo'),
    popupBrand = document.querySelector('.filter-hidden-brand'),
    BtnFilterSub = document.querySelector('.menu-hidden__filter-btn'),
    menuFilter = document.querySelector('.filter-hidden-bg'),
    menuFilterBtn = document.querySelector('.filter-hidden__btn'),
    inputMain = document.querySelector('.search__input'),
    inputHidden = document.querySelector('.search-hidden'),
    filterContain = document.getElementsByClassName('filter-contain'),
    filterDrop = document.getElementsByClassName('dropdown'),
    filterDropHeader = document.getElementsByClassName('filter__span'),
    priceStartValue =document.querySelector('.price__start'),
    priceEndValue =document.querySelector('.price__end'),
    arrClassNameActive = [
        'product__img-active',
        'product-info-active',
        'product-content-active',
        'product__header-active',
        'product__text-active',
        'product__text-hidden-active',
        'product-price__old-active',
        'product-price-active',
        'product-price__new-active',
        'product-price__backet-active'
    ];

if(window.matchMedia('(max-width: 1024px)').matches){
    menuBtn.addEventListener('click', ()=>{
    if((menu.style.display == "")||((menu.style.display == "none"))){
        menu.style.display = "flex";
        searchContain.style.display = "none";
    }
    else{menu.style.display = "none"}
    });
    menuLinkWrapper.addEventListener('click', ()=>{
        menu.style.display = "none"; 
    });
}
searchBtn.addEventListener('click', ()=>{
    if((searchContain.style.display == "")||((searchContain.style.display == "none"))){
        searchContain.style.display = "flex";
        menu.style.display = "none";
    }
    else{searchContain.style.display = "none"}
});
filterLogo[0].addEventListener('click', ()=>{
    if((popuplogo.style.display == "")||((popuplogo.style.display == "none"))){
        popuplogo.style.display = "block";
    }
    else{popuplogo.style.display = "none"}
});
popuplogo.addEventListener('click', ()=>{
    popuplogo.style.display = "none";
    });
filterLogo[1].addEventListener('click', ()=>{
    if((popupBrand.style.display == "")||((popupBrand.style.display == "none"))){
        popupBrand.style.display = "block";
    }
    else{popupBrand.style.display = "none"}
});
popupBrand.addEventListener('click', ()=>{
    popupBrand.style.display = "none";
});
 BtnFilterSub.addEventListener('click', ()=>{
    if((menuFilter.style.display == "")||((menuFilter.style.display == "none"))){
        menuFilter.style.display = "block";
    }
    else{menuFilter.style.display = "none"}
});
menuFilterBtn.addEventListener('click', ()=>{
    menuFilter.style.display = "none";
});
inputMain.addEventListener('click', ()=>{
    inputMain.value="";
})
inputHidden.addEventListener('click', ()=>{
    inputHidden.value="";
})
filterContain[0].addEventListener('click', (e)=>{
    filterDrop[0].classList.add('visibility');
    let dropItem = e.target;
    filterDropHeader[0].innerText = dropItem.innerText;
}, true)
filterDrop[0].addEventListener('click', ()=>{
    filterDrop[0].classList.remove('visibility');
});
document.getElementById('body').addEventListener('click', ()=>{
    if(filterDrop[0].hasAttribute('class', 'visibility')){
        filterDrop[0].classList.remove('visibility');
    }
    if(filterDrop[1].hasAttribute('class', 'visibility')){
        filterDrop[1].classList.remove('visibility');
    }
    inputMain.value="Поиск Товаров";
    inputHidden.value="Поиск Товаров";
},true);
filterContain[1].addEventListener('click', (e)=>{
    filterDrop[1].classList.add('visibility');
    let dropItem = e.target;
    filterDropHeader[1].innerText = dropItem.innerText;
}, true)
filterDrop[1].addEventListener('click', ()=>{
    filterDrop[1].classList.remove('visibility');
});
let product = document.getElementsByClassName('product'),
    productActive = document.querySelector('.product-active');
for(let i=0, j=product.length; i<j; i++){
        product[i].addEventListener("click", function(e){
            let mainContainProduct = e.currentTarget;
                removeProductActive();
            function addProductActive(mainContainProduct){
                let mainContainProductInfo = mainContainProduct.children[1],
                    productContent = mainContainProductInfo.children[0],
                    productPrice = mainContainProductInfo.children[1];
                mainContainProduct.classList.toggle('product-active');
                for(let countProduct=0, lengthProduct=mainContainProduct.children.length; countProduct<lengthProduct;countProduct++){
                    mainContainProduct.children[countProduct].classList.toggle(`${mainContainProduct.children[countProduct].classList}`+'-active');
                    productPrice.children[countProduct].classList.toggle(`${productPrice.children[countProduct].classList}`+'-active');
                    mainContainProductInfo.children[countProduct].classList.toggle(`${mainContainProductInfo.children[countProduct].classList}`+'-active')
                };
                for(let countContent=1, lengthContent=productContent.children.length; countContent<lengthContent;countContent++){
                    productContent.children[countContent].classList.toggle(`${productContent.children[countContent].classList}`+'-active');
                };
}
            function removeProductActive(){
                if(document.querySelector('.product-active')){
                    let productActive = document.querySelector('.product-active');
                    let productElements = productActive.getElementsByTagName("*");
                    for(let productCount = 0, arrClassNameActivelength = arrClassNameActive.length; productCount<arrClassNameActivelength; productCount++){
                        productElements[productCount].classList.remove(arrClassNameActive[productCount]);
                    }
                    productActive.classList.remove('product-active');
                    if(document.querySelector('.product-active')==null){
                        addProductActive(mainContainProduct);
                    }
                } 
            }
    }, true);
}

priceEndValue.addEventListener('keypress', function(event){
    var keys = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
    var validIndex = keys.indexOf(event.charCode);
    if(validIndex == -1){
        event.preventDefault();
    }
});
priceStartValue.addEventListener('keypress', function(event){
    var keys = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
    var validIndex = keys.indexOf(event.charCode);
    if(validIndex == -1){
        event.preventDefault();
    }
});
