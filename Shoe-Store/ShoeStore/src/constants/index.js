import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../../public/icons";
import { bigShoe1, bigShoe2, bigShoe3, Abhishek, Pramod, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../../public/images";
 //import { AirForce1S1 , AirForce1S2, DunksHighS1, DunksLowS1 ,  DunksLowS2 , Jordan1HighS1, Jordan1HighS2, Jordan1LowS1, Jordan1LowS2, Jordan1MidS1, Jordan1MidS2, Jordan4S1, Jordan4S2 } from "../assets/product-images";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact Us" },
    {href:"/login",label: "Login"},
    {href:"/signup",label: "Sign Up"},

];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe:  bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Stores' },
    { value: '500+', label: 'Custom Design' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "Rs.15,899",
    
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "Rs.12,076",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "Rs.12000",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "Rs.15,899",
    },
    {
        imgURL: "/product-images/DunksLowS2.png",
        name: "Nike Dunks Lows Mint Brazil",
        price: "Rs.12,076",
    },
    {
        imgURL: "/product-images/AirForce1S1.png",
        name: "Air Force 1 Mint Chocolate",
        price: "Rs.15,899",
    },
    {
        imgURL: "/product-images/DunksLowS1.png",
        name: "Nike Dunks Lows Red-Lobsters",
        price: "Rs.12,076",
    },
    {
        imgURL: "/product-images/AirForce1S2.png",
        name: "Air Force 1 Black Red",
        price: "Rs.15,899",
    },
];

export const productlist = [
    {
        imgURL:"/product-images/AirForce1S1.png",
        name: "Air Force 1 Mint Chocolate",
        price: 11000,
        size: 10,
        colorway: "Mint and Chocolate",
        description: "This is a special colourway of the Air Force 1 series , this colourway is called Mint Chocolate, cause the upper half of the shoe has a mint colour and the sole of the shoe represents a dark chocolate",
        brand: "Nike AirForce",
        quantity: 10
    },
    {
        imgURL: "/product-images/AirForce1S2.png",
        name: "Air Force 1 Black Red",
        price: 12076 ,
        size: 8,
        colorway: "Black and Red",
        description: "This is a special colourway of the Air Force 1 series , this colourway is called Black and Red, Thsi is one the pioneer design from the NIKE R&D which is one of their more popular design.",
        brand: "Nike AirForce",
        quantity: 10
    },
    {
        imgURL: "/product-images/DunksHighS1.png",
        name: "Dunks High OrangeSunset",
        price: 13438,
        size: 10,
        colorway: "Orange,Yellow and White",
        description: "This is a special colourway of the Nike Dunks series , this colourway is called Orange Sunset, cause the shoe represents Sunset.",
        brand: "Nike Dunks",
        quantity: 10

    },
    {
        imgURL: "/product-images/DunksLowS1.png",
        name: "Dunks Lows Red-Lobsters",
        price: 12483,
        size: 7,
        colorway: "WineRed,Black and White",
        description: "This is a special colourway of the Nike Dunks series , this colourway is called Red Lobsters, cause the shoe represents Lobsters found exclusively in the Greece.",
        brand: "Nike Dunks",
        quantity: 10

    },
    {
        imgURL: "/product-images/DunksLowS2.png",
        name: "Nike Dunks Lows Brazil",
        price: 12483,
        size: 12,
        colorway: "Green and Yellow",
        description: "This is a special colourway of the Nike Dunks series , this colourway is called Brazil, cause the shoe  was created to homor the legend Pele from Brazil and the people of brazil.",
        brand: "Nike Dunks",
        quantity: 10

    },
    {
        imgURL: "/product-images/Jordan1HighS1.jpg",
        name: "Nike Jordan I High Charcoal-Black",
        price: 15899,
        size: 8,
        colorway: "Black and White",
        description: "This is a special colourway of the Nike Jordan I series , this colourway is called Charcoal Black, This design was inspired the charcoal and importance of Charcoal to us as Human beings.",
        brand: "Nike Jordan I",
        quantity: 10
    },
    {
        imgURL: "/product-images/Jordan1HighS2.jpg",
        name: "Jordan I High White/PinkSky J Mauve",
        price: 16995,
        size: 13,
        colorway: "Pink and White",
        description: "This is a special colourway of the Nike Jordan I series , this colourway is called  White/PinkSky J Mauve, This design was inspired by the japaneese famous purple sunset.",
        brand: "Nike Jordan I",
        quantity: 10
    },
    {
        imgURL: "/product-images/Jordan1LowS1.jpg",
        name: "Jordan I Low Red sail Lobster",
        price: 12475,
        size: 9,
        colorway: "Red and White",
        description:"This is a special colourway of the Nike Dunks series , this colourway is called Red Lobsters, cause the shoe represents Lobsters found exclusively in the Spain.",
        brand: "Nike Jordan I",
        quantity: 10
    },
    {
        imgURL: "/product-images/Jordan1LowS2.png",
        name: "Jordan I Low Bred Toe red",
        price: 12475,
        size: 7,
        colorway: "Red,Black and White",
        description: "This is a special colourway of the Air Force 1 series , this colourway is called Black and Red, Thsi is one the pioneer design from the NIKE R&D which is one of their more popular design.",
        brand: "Nike Jordan I",
        quantity: 10
    },
    {
        imgURL: "/product-images/Jordan1MidS1.jpg",
        name: "Jordan I Mid Yello O'Chere",
        price: 15995,
        size: 10,
        colorway: "Yellow,White and Black",
        description: "This is a special colourway of the Air Force 1 series , this colourway is called Mint Chocolate, cause the upper half of the shoe has a mint colour and the sole of the shoe represents a dark chocolate",
        brand: "Nike Jordan I",
        quantity: 10
    },
    {
        imgURL: "/product-images/Jordan1MidS2.jpg",
        name: "Jordan I Mid Desert Sand",
        price: 13780,
        size: 10,
        colorway: "Skin,White and Black",
        description: "This is a special colourway of the Air Force 1 series , this colourway is called Mint Chocolate, cause the upper half of the shoe has a mint colour and the sole of the shoe represents a dark chocolate",
        brand: "Nike Jordan I ",
        quantity: 10
    },
    {
        imgURL:  "/product-images/Jordan4S1.jpg",
        name: "Jordan IV Cool Grays",
        price: "Rs.38,890 /-",
        size: 10,
        colorway: "Grey and White",
        description: "This is a special colourway of the Air Force 1 series , this colourway is called Mint Chocolate, cause the upper half of the shoe has a mint colour and the sole of the shoe represents a dark chocolate",
        brand: "Nike Jordan IV",
        quantity: 10
    },
    {
        imgURL:  "/product-images/Jordan4S2.jpg",
        name: "Jordan IV Pine Greens",
        price: "Rs.43,880 /-",
        size: 10,
        colorway: "White and Green",
        description: "This is a special colourway of the Air Force 1 series , this colourway is called Mint Chocolate, cause the upper half of the shoe has a mint colour and the sole of the shoe represents a dark chocolate",
        brand: "Nike Jordan IV",
        quantity: 10
    },
]
export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: Abhishek,
        customerName: 'Abhishek H M',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: Pramod,
        customerName: 'Pramod Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];