let ObjArr = []
let starbukArr = []
let desertArr = []



document.getElementById('menu-cross').addEventListener('click', function () {
    document.getElementById('starbucks-outer-menu').style.display = 'none'
})

document.getElementById('starbucks-open').addEventListener('click', function () {
    document.getElementById('starbucks-outer-menu').style.display = 'flex'
    if (starbukArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})



document.getElementById('menu-cross1').addEventListener('click', function () {
    document.getElementById('DessertClub-outer-menu').style.display = 'none'
})

document.getElementById('Dessert-open').addEventListener('click', function () {
    document.getElementById('DessertClub-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})


//edit

document.getElementById('menu-cross2').addEventListener('click', function () {
    document.getElementById('BaskinRobbins-outer-menu').style.display = 'none'
})

document.getElementById('Baskin-open').addEventListener('click', function () {
    document.getElementById('BaskinRobbins-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross3').addEventListener('click', function () {
    document.getElementById('Bikanervala-outer-menu').style.display = 'none'
})

document.getElementById('Bikanervala-open').addEventListener('click', function () {
    document.getElementById('Bikanervala-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})


document.getElementById('menu-cross4').addEventListener('click', function () {
    document.getElementById('BurgerKing-outer-menu').style.display = 'none'
})

document.getElementById('BurgerKing-open').addEventListener('click', function () {
    document.getElementById('BurgerKing-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross5').addEventListener('click', function () {
    document.getElementById('Barista-outer-menu').style.display = 'none'
})

document.getElementById('Barista-open').addEventListener('click', function () {
    document.getElementById('Barista-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross6').addEventListener('click', function () {
    document.getElementById('Celejor-outer-menu').style.display = 'none'
})

document.getElementById('Celejor-open').addEventListener('click', function () {
    document.getElementById('Celejor-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross7').addEventListener('click', function () {
    document.getElementById('Domino-outer-menu').style.display = 'none'
})

document.getElementById('Domino-open').addEventListener('click', function () {
    document.getElementById('Domino-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross8').addEventListener('click', function () {
    document.getElementById('Haldiram-outer-menu').style.display = 'none'
})

document.getElementById('Haldiram-open').addEventListener('click', function () {
    document.getElementById('Haldiram-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross9').addEventListener('click', function () {
    document.getElementById('WoW-outer-menu').style.display = 'none'
})

document.getElementById('WoW-open').addEventListener('click', function () {
    document.getElementById('WoW-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross10').addEventListener('click', function () {
    document.getElementById('Keventers-outer-menu').style.display = 'none'
})

document.getElementById('Keventers-open').addEventListener('click', function () {
    document.getElementById('Keventers-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross11').addEventListener('click', function () {
    document.getElementById('LaPino-outer-menu').style.display = 'none'
})

document.getElementById('La-Pino-open').addEventListener('click', function () {
    document.getElementById('LaPino-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross12').addEventListener('click', function () {
    document.getElementById('McDonald-outer-menu').style.display = 'none'
})

document.getElementById('Donald-open').addEventListener('click', function () {
    document.getElementById('McDonald-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross13').addEventListener('click', function () {
    document.getElementById('Nik-outer-menu').style.display = 'none'
})

document.getElementById('Nik-open').addEventListener('click', function () {
    document.getElementById('Nik-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross14').addEventListener('click', function () {
    document.getElementById('Subway-outer-menu').style.display = 'none'
})

document.getElementById('Subway-open').addEventListener('click', function () {
    document.getElementById('Subway-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross15').addEventListener('click', function () {
    document.getElementById('Super-outer-menu').style.display = 'none'
})

document.getElementById('Super-open').addEventListener('click', function () {
    document.getElementById('Super-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross16').addEventListener('click', function () {
    document.getElementById('TheBelgianWaffle-outer-menu').style.display = 'none'
})

document.getElementById('TheBelgian-open').addEventListener('click', function () {
    document.getElementById('TheBelgianWaffle-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross17').addEventListener('click', function () {
    document.getElementById('TimHortons-outer-menu').style.display = 'none'
})

document.getElementById('Tim-open').addEventListener('click', function () {
    document.getElementById('TimHortons-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross18').addEventListener('click', function () {
    document.getElementById('Barbeque-outer-menu').style.display = 'none'
})

document.getElementById('Barbeque-open').addEventListener('click', function () {
    document.getElementById('Barbeque-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})
document.getElementById('menu-cross19').addEventListener('click', function () {
    document.getElementById('Dosa-outer-menu').style.display = 'none'
})

document.getElementById('Dosa-open').addEventListener('click', function () {
    document.getElementById('Dosa-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross20').addEventListener('click', function () {
    document.getElementById('Sagar-outer-menu').style.display = 'none'
})

document.getElementById('Sagar-open').addEventListener('click', function () {
    document.getElementById('Sagar-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross21').addEventListener('click', function () {
    document.getElementById('Havmor-outer-menu').style.display = 'none'
})

document.getElementById('Havmor-open').addEventListener('click', function () {
    document.getElementById('Havmor-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross22').addEventListener('click', function () {
    document.getElementById('Dimsum-outer-menu').style.display = 'none'
})

document.getElementById('Dimsum-open').addEventListener('click', function () {
    document.getElementById('Dimsum-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})

document.getElementById('menu-cross23').addEventListener('click', function () {
    document.getElementById('Roll-outer-menu').style.display = 'none'
})

document.getElementById('Roll-open').addEventListener('click', function () {
    document.getElementById('Roll-outer-menu').style.display = 'flex'
    if (desertArr.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'flex'
        })
        showData()
    }
})








let AddCart = document.querySelectorAll('.AddCart');
let AddCartIcons = document.querySelectorAll('.AddCartIcons');
let RemoveCartIcons = document.querySelectorAll('.RemoveCartIcons');


// Array to store the cart items
AddCart.forEach(function (button) {
    button.addEventListener('click', addItem);
});

AddCartIcons.forEach(function (button) {
    button.addEventListener('click', addItemIcon);
});

RemoveCartIcons.forEach(function (button) {
    button.addEventListener('click', RemoveCartIcons2);
});




function addItem(e) {
    let cart = e.target.closest('.AddCart');
    let pName = cart.getAttribute('data-name');
    let pPrice = cart.getAttribute('data-price');

    // Get corresponding '' button (assuming they are within the same parent container)
    let cartIcon = cart.parentElement.querySelector('.iconsCart');

    // Add item to cart
    let data = {
        name: pName,
        price: pPrice
    };
    ObjArr.push(data);







    //edit
    if (document.getElementById('starbucks-outer-menu').style.display == 'flex') {
        starbukArr.push(data);
    }
    else if (document.getElementById('DessertClub-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('BaskinRobbins-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Bikanervala-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('BurgerKing-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Barista-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Celejor-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Domino-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Haldiram-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('WoW-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Keventers-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('LaPino-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('McDonald-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Nik-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Subway-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Super-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('TheBelgianWaffle-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }

    else if (document.getElementById('TimHortons-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Barbeque-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Dosa-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Sagar-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Havmor-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Dimsum-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Roll-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    




    showData();
    document.querySelectorAll('#inner-cart').forEach((btn) => {
        btn.style.display = 'flex'
    })

    // Hide the 'AddCart' button
    cart.style.display = 'none';

    // Show the corresponding 'AddCartIcons' button
    cartIcon.style.display = 'flex';
}

function addItemIcon(e) {
    let cart = e.target.closest('.AddCartIcons');
    let pName = cart.getAttribute('data-name');
    let pPrice = cart.getAttribute('data-price');

    let data = {
        name: pName,
        price: pPrice
    };








//edit

    if (document.getElementById('starbucks-outer-menu').style.display == 'flex') {
        starbukArr.push(data);
    }
    else if (document.getElementById('DessertClub-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('BaskinRobbins-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Bikanervala-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('BurgerKing-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Barista-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Celejor-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Domino-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Haldiram-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('WoW-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Keventers-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('LaPino-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('McDonald-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Nik-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Subway-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Super-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('TheBelgianWaffle-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('TimHortons-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Barbeque-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Dosa-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Sagar-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Havmor-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Dimsum-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
    else if (document.getElementById('Roll-outer-menu').style.display == 'flex') {
        desertArr.push(data);
    }
   




    document.querySelectorAll('#inner-cart').forEach((btn) => {
        btn.style.display = 'flex'
    })

    ObjArr.push(data);
    showData();

}

function RemoveCartIcons2(e) {
    let cart = e.target.closest('.RemoveCartIcons');
    let pName = cart.getAttribute('data-name');
    let pPrice = cart.getAttribute('data-price');

    // Find the index of the object that matches the product name or price


    let index = ObjArr.findIndex(obj => obj.name === pName && obj.price === pPrice);







    //edit

    if (document.getElementById('starbucks-outer-menu').style.display == 'flex') {
        let index1 = starbukArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            starbukArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('DessertClub-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('BaskinRobbins-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Bikanervala-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('BurgerKing-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Barista-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Celejor-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Domino-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Haldiram-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('WoW-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Keventers-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('LaPino-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('McDonald-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Nik-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Subway-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Super-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('TheBelgianWaffle-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('TimHortons-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Barbeque-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Dosa-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Sagar-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Havmor-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Dimsum-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }
    else if (document.getElementById('Roll-outer-menu').style.display == 'flex') {
        let index1 = desertArr.findIndex(obj => obj.name === pName && obj.price === pPrice);
        if (index !== -1) {
            desertArr.splice(index1, 1);
        }
    }


    // If the object is found, remove it from the array
    if (index !== -1) {
        ObjArr.splice(index, 1); // Removes the object at the found index
    }

    showData();
}

function showData() {
    let cartName = []

    let mainPrice = 0;
    document.querySelectorAll('#cart-items').forEach((btn) => {
        btn.innerHTML = ''
    })
    document.querySelectorAll('#totalAmount').forEach((btn) => {
        btn.innerHTML = ''
    })






   // edit

    if (document.getElementById('starbucks-outer-menu').style.display == 'flex') {
        cartName = starbukArr
    }
    else if (document.getElementById('DessertClub-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('BaskinRobbins-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Bikanervala-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('BurgerKing-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Barista-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Celejor-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Domino-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Haldiram-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('WoW-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Keventers-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('LaPino-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('McDonald-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Nik-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Subway-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Super-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('TheBelgianWaffle-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('TimHortons-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Barbeque-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Dosa-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Sagar-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Havmor-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Dimsum-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }
    else if (document.getElementById('Roll-outer-menu').style.display == 'flex') {
        cartName = desertArr
    }



    if (cartName.length == 0) {
        document.querySelectorAll('#inner-cart').forEach((btn) => {
            btn.style.display = 'none'
        })
    }
    for (let i = 0; i < cartName.length; i++) {
        let pName = cartName[i].name
        let pPrice = cartName[i].price
        mainPrice += parseInt(cartName[i].price)
        document.querySelectorAll('#cart-items').forEach((btn) => {
            btn.innerHTML += `
        <li class="cart-item-ele">
            <h4>${pName}</h4>
            <h4>${pPrice}</h4>
          </li>
        `
        })
        document.querySelectorAll('#totalAmount').forEach((btn) => {
            btn.innerHTML = `Total Amount :<span> ₹ ${mainPrice}</span>`
        })
    }
}

// JavaScript for interactivity

// Select category buttons and add click event
const categoryButtons = document.querySelectorAll('.category');
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all categories
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        button.classList.add('active');
    });
});

// Select amount buttons and add click event
const amountButtons = document.querySelectorAll('.amount');
amountButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'selected' class from all amounts
        amountButtons.forEach(btn => btn.classList.remove('selected'));
        // Add 'selected' class to the clicked button
        button.classList.add('selected');
    });
});

// Handle the Continue button click
const continueButton = document.querySelector('.continue-button');
continueButton.addEventListener('click', () => {
    // Get selected category
    const selectedCategory = document.querySelector('.category.active');
    const category = selectedCategory ? selectedCategory.textContent : 'None';

    // Get selected amount
    const selectedAmount = document.querySelector('.amount.selected');
    const amount = selectedAmount ? selectedAmount.textContent : 'None';

    // Get message input
    const message = document.getElementById('message').value;

    // Display selected values in the console (or handle form submission)
    console.log(`Category: ${category}`);
    console.log(`Amount: ${amount}`);
    console.log(`Message: ${message}`);

    // Perform form submission or other actions as needed
    alert(`Gift Card Selected:\nCategory: ${category}\nAmount: ${amount}\nMessage: ${message}`);
});

// Function to dynamically switch cards (example placeholder)
const cardSelection = document.querySelector('#card-selection');

let birthdays=["https://static.vecteezy.com/system/resources/previews/011/669/935/non_2x/happy-birthday-banner-background-happy-birthday-to-you-text-with-party-elements-like-balloons-gifts-and-confetti-for-birth-day-celebration-greeting-card-design-illustration-vector.jpg","https://www.bettergiftflowers.com/wp-content/uploads/2024/04/tum-jiyo-hazaaron-saal-web.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrP5ZsfJINYDmZ9A4YzqQcFxM8F5MZ9Z8Pg&s"]
let anniversaries=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvTMobwK-8MTffN1HpF3H0iS2r7Z_sHWU9g&s","https://i.etsystatic.com/8576830/r/il/dea340/2247613704/il_570xN.2247613704_kc1l.jpg","https://m.media-amazon.com/images/I/51uCR-cwWtL._AC_UF1000,1000_QL80_.jpg"]
let sorries=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mvpfPwx1Xk7hOkXVmrLqsK663k6pezaHwi2x6d9yH1PnQh2wVtBDsNX70irrXFhnsx0&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SVTRHRyF9re4gZWNn0U7xoFyiDG2-lf_WA&s","https://viez.in/wp-content/uploads/2022/12/5.png"]
let thankyous=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9kZe4AmLPqKWQnR6oYLi0VuFcp8UGxmMfw&s","https://image.cardsdirect.com/images/bh/Content-Articles/Hero_Thank-You-DP13077-949x639.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJr9MTC6hWdD7xei2x71cHT0YwTV-i7QKqQ&s"]
function birthday(){
    cardSelection.innerHTML=`<div class="card">
                <img src="${birthdays[0]}" alt="" onclick="applyBorder1()">
            </div>
            <div class="card">
                <img src="${birthdays[1]}" alt="" onclick="applyBorder2()">
            </div>
            <div class="card">
                <img src="${birthdays[2]}" alt="" onclick="applyBorder3()">
            </div>`
}
function anniversary(){
    cardSelection.innerHTML=`<div class="card">
                <img src="${anniversaries[0]}" alt="" onclick="applyBorder1()">
            </div>
            <div class="card">
                <img src="${anniversaries[1]}" alt="" onclick="applyBorder2()">
            </div>
            <div class="card">
                <img src="${anniversaries[2]}" alt="" onclick="applyBorder3()">
            </div>`
}
function sorry(){
    cardSelection.innerHTML=`<div class="card">
                <img src="${sorries[0]}" alt="" onclick="applyBorder1()">
            </div>
            <div class="card">
                <img src="${sorries[1]}" alt="" onclick="applyBorder2()">
            </div>
            <div class="card">
                <img src="${sorries[2]}" alt="" onclick="applyBorder3()">
            </div>`
}
function thankYou(){
    cardSelection.innerHTML=`<div class="card">
                <img src="${thankyous[0]}" alt="" onclick="applyBorder1()">
            </div>
            <div class="card">
                <img src="${thankyous[1]}" alt="" onclick="applyBorder2()">
            </div>
            <div class="card">
                <img src="${thankyous[2]}" alt="" onclick="applyBorder3()">
            </div>`
}
function applyBorder1(){
    let cards=document.getElementsByClassName("card")
    cards[0].style.border="2px solid red"
    cards[1].style.border="1px solid black"
    cards[2].style.border="1px solid black"
}
function applyBorder2(){
    let cards=document.getElementsByClassName("card")
    cards[1].style.border="2px solid red"
    cards[2].style.border="1px solid black"
    cards[0].style.border="1px solid black"
}
function applyBorder3(){
    let cards=document.getElementsByClassName("card")
    cards[2].style.border="2px solid red"
    cards[1].style.border="2px solid black"
    cards[0].style.border="2px solid black"
}

document.getElementById('giftcard').addEventListener('click',function (){
    document.getElementById('giftCard-outer').style.display = 'flex'
})

document.getElementById('back-gift-button').addEventListener('click',function (){
    document.getElementById('giftCard-outer').style.display = 'none'
})