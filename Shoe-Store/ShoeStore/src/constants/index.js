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
        thumbnail: thumbnailShoe2,
        bigShoe:  bigShoe2,
    },
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
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
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "Rs 12000",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const productlist = [
    {
        imgURL:"/product-images/AirForce1S1.png",
        name: "Air Force 1 Mint Chocolate",
        price: "Rs.11,000 /-"
    },
    {
        imgURL: "/product-images/AirForce1S2.png",
        name: "Air Force 1 Black Red",
        price: "Rs.12,076 /-"
    },
    {
        imgURL: "/product-images/DunksHighS1.png",
        name: "Nike Dunks High Orange Sunset",
        price: "Rs.13,438 /-"
    },
    {
        imgURL: "/product-images/DunksLowS1.png",
        name: "Nike Dunks Lows Red-Lobsters",
        price: "Rs.12,483 /-"
    },
    {
        imgURL: "/product-images/DunksLowS2.png",
        name: "Nike Dunks Lows Mint Brazil",
        price: "Rs.12,483 /-"
    },
    {
        imgURL: "/product-images/Jordan1HighS1.jpg",
        name: "Jordan I High Charcoal",
        price: "Rs.15,899 /-"
    },
    {
        imgURL: "/product-images/Jordan1HighS2.jpg",
        name: "Jordan I High White/Sky J Mauve",
        price: "Rs.16,995 /-"
    },
    {
        imgURL: "/product-images/Jordan1LowS1.jpg",
        name: "Jordan I Low Red sail Lobster",
        price: "Rs.12,475 /-"
    },
    {
        imgURL: "/product-images/Jordan1LowS2.png",
        name: "Jordan I Low Bred Toe red",
        price: "Rs.12,475 /-"
    },
    {
        imgURL: "/product-images/Jordan1MidS1.jpg",
        name: "Joedan I Mid Yello O'Chere",
        price: "Rs.15,995 /-"
    },
    {
        imgURL: "/product-images/Jordan1MidS2.jpg",
        name: "Jordan 1 Mid Desert Sand",
        price: "Rs.13,780 /-"
    },
    {
        imgURL:  "/product-images/Jordan4S1.jpg",
        name: "Jordan IV Cool Grays",
        price: "Rs.38,890 /-"
    },
    {
        imgURL:  "/product-images/Jordan4S2.jpg",
        name: "Jordan IV Pine Greens",
        price: "Rs.43,880 /-"
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
        customerName: 'Lota Mongeskar',
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