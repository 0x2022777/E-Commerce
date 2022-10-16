



const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")



const products = [
    {
        id: 1,
        title: "Abaya Velur Red 1",
        price: 110000,
        colors: [
            {
                code: "red",
                img: "./img/AB01_2.png",
            },
            {
                code: "lightgreen",
                img: "./img/New1017.png",
            },
        ],
    },
    {
        id: 2,
        title: "Abaya Velur Red 2",
        price: "120 000",
        colors: [
            {
                code: "black",
                img: "./img/photo_2.png",
            },
            {
                code: "red",
                img: "./img/AB01_2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Abaya Velur Red 3",
        price: 130000,
        colors: [
            {
                code: "lightgray",
                img: "./img/photo_2.png",
            },
            {
                code: "green",
                img: "./img/AB01_2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Abaya Velur Red 4",
        price: 140000,
        colors: [
            {
                code: "black",
                img: "./img/photo_2.png",
            },
            {
                code: "lightgray",
                img: "./img/AB01_2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Abaya Velur Red 5",
        price: 150000,
        colors: [
            {
                code: "black",
                img: "./img/photo_2.png",
            },
            {
                code: "red",
                img: "./img/AB01_2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index)=> {
    item.addEventListener("click", ()=> {
        //console.log("you clicked!" + index);
        //change the current slide
        wrapper.style.transform = `translateX(${-100*index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        //change texts of currentProducts
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = choosenProduct.price + " KZT";
        currentProductImg.src = choosenProduct.colors[0].img;
        
        // assign new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});


currentProductSizes.forEach((size, index)=> {
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});


//show 
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex";
});

close.addEventListener("click", ()=> {
    payment.style.display = "none";
})



console.log(wrapper)

wrapper.style.transform = "translateX(-100vw)"


//--------------        tmp script
var detect_ipad = navigator.userAgent.match(/iPad/i) != null; // для iPad
var detect_ipod = navigator.userAgent.match(/iPod/i) != null; // для iPod
var detect_iphone = navigator.userAgent.match(/iPhone/i) != null; // для iPhone
