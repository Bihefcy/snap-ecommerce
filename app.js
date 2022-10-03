// my local database for the shop
const shop = [
    
    {
        id: 1,
        title: "White and Blue Nike",
        category: "shoes",
        price: 150.99,
        img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        desc: "Nike's shoes, finest chic wear.",
    },
    {
        id: 2,
        title: "Brown fitted trousers",
        category: "trousers",
        price: 15.99,
        img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        desc: "Fitting for your day work.",
    },
    {
        id: 3,
        title: "Pink Pants",
        category: "trousers",
        price: 10.99,
        img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        desc: "Going out? Good choice.",
    },
    {
        id: 4,
        title: "White Shirt",
        category: "shirt",
        price: 5.99,
        img: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
        desc: "Simplicity and clean.",
    },
    {
        id: 5,
        title: "Blue Denim Jeans",
        category: "trousers",
        price: 12.99,
        img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=794&q=80",
        desc: "Suiting for you.",
    },
    {
        id: 6,
        title: "White and Orange sneakers",
        category: "shoes",
        price: 62.99,
        img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        desc: "Rocking that with levels.",
    },
    {
        id: 7,
        title: "Brown Pants",
        category: "trousers",
        price: 14.99,
        img: "https://images.unsplash.com/photo-1519211777646-3a7ccf759b64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
        desc: "In line with the earth.",
    },
    {
        id: 8,
        title: "Red Pants",
        category: "trousers",
        price: 8.99,
        img: "https://images.unsplash.com/photo-1638394440667-aa54a7c0a703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        desc: "Vibrant.",
    },
    {
        id: 9,
        title: "Blue Shirt",
        category: "shirt",
        price: 4.99,
        img: "https://images.unsplash.com/photo-1494228766058-1430438d10fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
        desc: "Right amount of gorge.",
    },
    {
        id: 10,
        title: "White Tank Top",
        category: "shirt",
        price: 7.99,
        img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        desc: "Sizzling.",
    },
    {
        id: 11,
        title: "Green Nike Shoe",
        category: "shoes",
        price: 52.99,
        img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        desc: "Standing out.",
    },
    {
        id: 12,
        title: "White Nike",
        category: "shoes",
        price: 32.99,
        img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        desc: "Clean all the way.",
    },
    {
        id: 13,
        title: "OFF White Nike",
        category: "shoes",
        price: 56.99,
        img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
        desc: "Best collab for your feet.",
    },
    {
        id: 14,
        title: "White Shirts",
        category: "shirt",
        price: 6.99,
        img: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        desc: "Spotlessly chic.",
    },
    {
        id: 15,
        title: "White Heels",
        category: "shoes",
        price: 82.99,
        img: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80",
        desc: "Fit for a queen.",
    },
    {
        id: 16,
        title: "Brown Leather Shoes",
        category: "shoes",
        price: 78.99,
        img: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
        desc: "Making your mark.",
    },
    {
        id: 17,
        title: "Denim Jeans",
        category: "trousers",
        price: 21.99,
        img: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        desc: "Well-fitting.",
    },
    {
        id: 18,
        title: "Black Shirt",
        category: "shirt",
        price: 5.99,
        img: "https://images.unsplash.com/photo-1502389614483-e475fc34407e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        desc: "Mysterious much?",
    },
    {
        id: 19,
        title: "Brown and Blue Shirt",
        category: "shirt",
        price: 16.99,
        img: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        desc: "Fancy for the next bash.",
    },
    {
        id: 20,
        title: "Brown Shoes",
        category: "shoes",
        price: 61.99,
        img: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        desc: "Would look awe on you.",
    },
    {
        id: 21,
        title: "Brown Timber Shoes",
        category: "shoes",
        price: 45.99,
        img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        desc: "Hot.",
    },
    {
        id: 22,
        title: "Black Trousers",
        category: "trousers",
        price: 32.99,
        img: "https://images.unsplash.com/photo-1552902875-9ac1f9fe0c07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        desc: "Swag.",
    },
    {
        id: 23,
        title: "White and Black Shirt",
        category: "shirt",
        price: 13.99,
        img: "https://images.unsplash.com/photo-1564430360553-441e3dbce543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        desc: "Zebra's got ntin on you.",
    },
    {
        id: 24,
        title: "Stressed Jeans",
        category: "trousers",
        price: 25.99,
        img: "https://images.unsplash.com/photo-1454720503269-3a35c21bebc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
        desc: "In and Out.",
    },
    {
        id: 25,
        title: "Green Pants",
        category: "trousers",
        price: 16.99,
        img: "https://images.unsplash.com/photo-1599505043503-182c8906567e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        desc: "Perfect office wear.",
    },
    {
        id: 26,
        title: "White Crew Neck",
        category: "shirt",
        price: 31.99,
        img: "https://images.unsplash.com/photo-1580991584164-a4e12c31521d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        desc: "Classically hot.",
    },
    {
        id: 27,
        title: "Black Leather Heels",
        category: "shoes",
        price: 43.99,
        img: "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        desc: "Perfect office wear.",
    },
    {
        id: 28,
        title: "Womens Broown Pointys",
        category: "shoes",
        price: 55.99,
        img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        desc: "Glam and sophisticated.",
    },
    {
        id: 29,
        title: "Red Pants",
        category: "trousers",
        price: 26.99,
        img: "https://images.unsplash.com/photo-1519075509237-10f3fe5aeee1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
        desc: "Taking over.",
    },
    {
        id: 30,
        title: "Maroon Wedges",
        category: "shoes",
        price: 36.99,
        img: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        desc: "Something unique.",
    },
    {
        id: 31,
        title: "Brown Suit",
        category: "shirt",
        price: 100.99,
        img: "https://images.unsplash.com/photo-1617525104975-5043e63c8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        desc: "Own that meeting.",
    },
    {
        id: 32,
        title: "Grey crop top",
        category: "shirt",
        price: 10.99,
        img: "https://images.unsplash.com/photo-1525109155661-35d70e8ebc39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        desc: "Um, gorge.",
    },
    {
        id: 33,
        title: "Brown Suit",
        category: "shirt",
        price: 80.99,
        img: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        desc: "Own it.",
    },
]
/* This is the function for the menu */
const openMenu = document.querySelector('#open-menu');
const linkMenu = document.querySelector('#links-menu');
const closeMenu = document.querySelector('#close-menu');
const overlay = document.querySelector('#overlay');
const linkItemMenu = document.querySelector('#link-menu-item');
const profileCardDesktop = document.querySelector('#profile-card-desktop');
const profileDesktop = document.querySelector('#profile');
const profileCardMobile = document.querySelector('#profile-card-mobile');
const profileMobile = document.querySelector('#profile-mobile');
const cartDesktop = document.querySelector('#cart-desktop');
//const checkoutCardDesktop = document.querySelector('#checkout-card-desktop');
const cartMobile = document.querySelector('#cart-mobile');
const checkoutCardMobile = document.querySelector('#checkout-card-mobile');
const closeCheckoutCardMobile = document.querySelector('#close-checkout-card-mobile');
const allButtonContainer = document.querySelector('#all-button-container');


//add event listeners for both buttons
openMenu.addEventListener('click', () => {
    linkMenu.classList.remove('w-0');
    linkMenu.classList.add('w-1/2');
    openMenu.classList.add('invisible');
    setTimeout(() => {showlinkItemMenu();}, 250);
    console.log('open')
    
});
function showlinkItemMenu() {
    linkItemMenu.classList.remove('hidden')
    overlay.classList.remove('hidden');
    overlay.classList.add('block');
};
closeMenu.addEventListener('click', () => {
    overlay.classList.remove('block');
    overlay.classList.add('hidden');
    linkItemMenu.classList.add('hidden');
    openMenu.classList.remove('invisible');
    openMenu.classList.add('visible')
    setTimeout(() => {noShowlinkItemMenu();}, 250);
});
function noShowlinkItemMenu() {
    linkMenu.classList.add('w-0');
    linkMenu.classList.remove('w-1/2');

}
//-----------------------------------------
// this is for the nav bar disappearing when page is scrolled down and reappears when scrolled up

let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        console.log('true')
        document.getElementById('navbar').classList.add('top-0');
        document.getElementById('navbar').classList.remove('-top-[75px]');
    } else {
        console.log('false')
        document.getElementById('navbar').classList.add('-top-[75px]');
        document.getElementById('navbar').classList.remove('top-0');
    }
    prevScrollpos = currentScrollPos;
});
//-----------------------------------

//this is the function for the profile card desktop
profileDesktop.addEventListener('click', () => {
    profileCardDesktop.classList.toggle('hidden');
});
//------------------------------------
//this is the function for the profile card mobile
profileMobile.addEventListener('click', () => {
    profileCardMobile.classList.toggle('hidden');
});

function openShowAll() {
    allButtonContainer.classList.remove('hidden');
};
function closeShowAll() {
    allButtonContainer.classList.add('hidden');
};

//-------------------------------------------
//function for cart desktop
cartDesktop.addEventListener('click', () => {
    checkoutCardMobile.classList.toggle('hidden');
    console.log('cart open')
});

//function for cart mobile


    cartMobile.addEventListener('click', () => {
    checkoutCardMobile.classList.toggle('hidden');
    linkItemMenu.classList.add('hidden');
    openMenu.classList.remove('invisible');
    openMenu.classList.add('visible')

    setTimeout(() => {noShowlinkItemMenu();}, 250);
    console.log('open')
});


closeCheckoutCardMobile.addEventListener('click', () => {
    checkoutCardMobile.classList.add('hidden');
    overlay.classList.add('hidden');
    console.log('yes')
});


/*const removeCartItemsButtons = document.querySelectorAll('#cart-product-remove');
for (let i=0; i<removeCartItemsButtons.length; i++) {
    const button = removeCartItemsButtons[i];
    button.addEventListener('click', removeCartItem)
};*/



const quantityInputs = document.querySelectorAll('#cart-quantity-input')
for (let i=0; i<quantityInputs.length; i++) {
    const button = quantityInputs[i];
    button.addEventListener('change', quantityChanged)
};






document.querySelectorAll('#confirm-purchase-btn')[0].addEventListener('click', purchaseClicked)



/* function for the shop */
const shopContainer = document.querySelector('#shop-container');
//load items
window.addEventListener('DOMContentLoaded', () => { //we used window, because we want to target the entire page when it loads thus DCL, so this function kicks in when page is loaded.
    displayShopItems(shop);
});

//function to display shop items 
function displayShopItems(shopItems) {
    let displayShop = shopItems.map(function(item) { 
        // a map fuction CREATES A NEW ARRAY from calling a function for every array element. shopItems being the array, a new array is formed with all array elements in it with the function called on them and saved in var displayShop.
        //array.map(function(currentValue, index, arr), this Value)

        //new array is returned
        return `<div class="h-64 shadow-md"><!-- card for shop begins--> 
                    <div class="bg-gray-200 h-[60%]"><!-- product image -->
                        <img src=${item.img} alt=${item.title} class="object-cover w-full bg-black h-full " id="image-active">
                    </div>
                    <div class="p-2 w-full grid grid-cols-3 gap-1"><!-- product info -->
                        <div class="h-4 col-span-2">
                        </div>
                        <div class="h-4"><p class="bg-orange-200 px-1 py-[1px] md:px-3 md:py-1 text-[6px] text-center">${item.category}</p></div>
                        <div class="h-10"><p class="text-left text-[10px] sm:text-xs md:text-sm"  id="title-active">${item.title}</p></div>
                        <div class="h-7 col-span-2">
                            <p class="text-[8px] md:text-[10px] text-right">${item.desc}</p>
                        </div>
                        <div class="h-5 col-span-2">
                            <button class="md:px-3 px-1 py-[1px] text-[8px] sm:text-[10px] md:text-xs md:py-1 text-left bg-orange-200
                
                            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 hover:text-black duration-300
                
                            " id="add-to-cart-button" onClick ="addItemToCart(this)">ADD TO CART <span><i class="fa-solid fa-cart-shopping px-1 sm:px-2"></i></span></button>
                        </div>
            
                        <div class="h-7 "><p class="text-sm sm:text-xl  text-right">$<span id="price-active">${item.price}</span></p></div>
                     </div>
        
                </div><!-- card for shop ends-->`;
    })
    displayShop = displayShop.join(''); //always add the join with space to leave space between new elements of new array.
    shopContainer.innerHTML = displayShop; //lastly new array displayShop is put in the shopContainer div.
    const displayImg = document.querySelectorAll('#image-active');

    for (let i=0; i<displayImg.length; i++){
        displayImg[i].addEventListener('click', displayImgShow)
    }
};
    







//filter items in shop
const filterBtns = document.querySelectorAll('#filter-btn');
filterBtns.forEach(function(btn) {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id; //the filter that is clicked, save its(currenttarget) dataset.id in var category.
        const shopCategory = shop.filter(function(shopItem) {
            if(shopItem.category === category) {
                openShowAll();
                return shopItem;
            } // if shop items category is same as dataset.id of filter clicked, return those items
        });
        if(category === 'all'){
            displayShopItems(shop);
            closeShowAll();
        }else{
            displayShopItems(shopCategory);
        }
         //display items of filtered data
    });
});






const displayImage = document.querySelector('#display-image');
const overlayProduct = document.querySelector('#overlay-products')
const closeDisplayImage = document.querySelector('#close-display-image')
//display image on big screen
function displayImgShow(e) {
    const imgClicked = e.currentTarget;
    displayImage.src = imgClicked.src;
    overlayProduct.classList.remove('hidden');
};
closeDisplayImage.addEventListener('click', () => {
    overlayProduct.classList.add('hidden');
});
// to remove display image if any other part of screen is clicked on apart from the image.
overlayProduct.addEventListener('click', (e) => {
    if(e != displayImage) {
        overlayProduct.classList.add('hidden');
    }
});



let cartData = []
let addItemToCart = (e) => {
    let product = e.parentElement.parentElement.parentElement;
    let imgSrc = product.children[0].children[0].src;
    let title = product.children[1].children[2].children[0].innerText;
    let cost = product.children[1].children[5].children[0].children[0].innerText;
    cartData.push({
        img: imgSrc,
        titl: title,
        price: cost
    });

    console.log(cartData);
    updateCart();
    updateCartTotal()

}

let cfccm = document.getElementById("container-for-checkout-card-mobile")
let updateCart = () => {
    cfccm.innerHTML = "";

    cartData.map((x,y) => {
        return (cfccm.innerHTML += `
        <div id="${y}" class="w-64 mr-3 itemsind"> <!-- what card need to spawn multiple times start-->
        <div>
            <div class="bg-gray-200 my-2">
                <img src="${x.img}" alt="product" class="object-cover h-60 w-full" id="cart-item-image">
            </div>
        </div>
        <div class="flex justify-between items-center mx-2 mb-2">
            <div class="w-1/2">
                <div class=" mr-2">
                    <input type="number" class="w-full" value="1" id="cart-quantity-input" onchange="quantityChanged(this)">

                    <div>
                        <p class="text-base" >$<span id="cart-product-price">${x.price}</span></p>
                    </div>
                </div>
                
            </div>
            <div class="text-right">
                <p class="text-sm" id="cart-product-name">${x.titl}</p>
                <button class="bg-orange-200 py-0 px-1 text-gray-100 mt-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 hover:text-orange-200 duration-300 text-right" onClick="removeProduct(this)"><span><i class="fa-solid fa-x"></i></span></button>
            </div>
        </div>
            </div> <!-- what card need to spawn multiple times end-->
        `)
    });
    
}


let removeProduct = (e) => {
    let product = e.parentElement.parentElement.parentElement;
    product.remove();
    let index = cartData.findIndex(function(ind) {
        return ind.titl === product.children[1].children[1].children[0].innerHTML;
        
    });
    cartData.splice(index, 1);
    updateCartTotal()

}






//function for when quantity changes
function quantityChanged(e) {
    console.log('changed')
    
    console.log(e.value)
   if(isNaN(e.value) || e.value <= 0) {
        e.value = 1
    }else {
        //let priceChange = e.parentElement;
        const priceChange = e.parentElement;
        const idProduct = e.parentElement.parentElement.parentElement.parentElement;
        let index = cartData.findIndex(function(ind) {
            return ind.titl === idProduct.children[1].children[1].children[0].innerHTML;
            
        });
        console.log(index);
        console.log(idProduct);
        console.log(typeof Number(cartData[index].price));
        priceChange.children[1].children[0].children[0].innerHTML = e.value * Number(cartData[index].price);
    }
    updateCartTotal()
};
//function to confirm purchase


//function to update cart-total
const shopTotalPriceMobile = document.getElementById("shop-total-price-mobile");


function updateCartTotal() {
    const m = shopTotalPriceMobile.innerHTML;
    console.log(m)
    const cartProductPrice = document.querySelectorAll("#cart-product-price");
    console.log(cartProductPrice);
    let totalPrice = 0;
    for(let i = 0; i < cartProductPrice.length; i++) {
        totalPrice += Number(cartProductPrice[i].innerHTML);
        console.log(Math.floor(totalPrice));

    }
    shopTotalPriceMobile.innerHTML = Math.floor(totalPrice);

}

const purchase = document.getElementById("confirm-purchase-btn");
purchase.addEventListener('click', purchaseClicked)
function purchaseClicked() {
    alert('Thank you for your purchase')
    checkoutCardMobile.classList.toggle('hidden');
    linkItemMenu.classList.add('hidden');
    openMenu.classList.remove('invisible');
    openMenu.classList.add('visible');
    overlay.classList.toggle('hidden')
}