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