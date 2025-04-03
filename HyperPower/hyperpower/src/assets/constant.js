import prod1 from "./images/toners.webp"
import prod2 from "./images/printers.webp"
import prod3 from "./images/officesupplies.webp"
import prod4 from "./images/designservice.webp"

export const products = [
    {
    title: 'Toners & Cartridges',
    img: prod1,
    },
    {
    title: 'Printers & IT Solutions',
    img: prod2,
    },    
    {
    title: 'Office Supplies',
    img: prod3,
    },
    {
    title: 'Print & Design Services',
    img: prod4,
    },                                       
]

import logo1 from "./images/customerLogos/Al-Futtaim_Group_DL_logo.png"
import logo2 from "./images/customerLogos/alec.png"
import logo3 from "./images/customerLogos/alRostamani.svg"
import logo4 from "./images/customerLogos/american-express-630.svg"
import logo5 from "./images/customerLogos/dmcc-1.svg"
import logo6 from "./images/customerLogos/danway.png"
import logo7 from "./images/customerLogos/gtl.png"
import logo8 from "./images/customerLogos/saudibinladin.png"
export const customerLogos = [
    {
        name:"alfuttaimgroup",
        logo: logo1,
    },
    {
        name:"alec",
        logo: logo2,
    },
    {
        name:"alrostamani",
        logo: logo3,
    },
    {
        name:"americanexpress",
        logo: logo4,
    },
    {
        name:"dmcc",
        logo: logo5,
    },
    {
        name:"danway",
        logo: logo6,
    },
    {
        name:"gtl",
        logo: logo7,
    },
    {
        name:"saudibinladin",
        logo: logo8,
    },
]

export const features = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png", // Replace with your image
      title: "Top Quality, Fair Prices",
      description:
        "We provide top quality products sourced from premier manufacturers globally at competitive prices.",
    },
    {
      id: 2,
      icon: "https://cdn-icons-png.flaticon.com/512/854/854894.png", // Replace with your image
      title: "Reliable Delivery",
      description:
        "Enjoy fast and reliable delivery of quality goods all over India. Trust us for quick and dependable service.",
    },
    {
      id: 3,
      icon: "https://cdn-icons-png.flaticon.com/512/679/679720.png", // Replace with your image
      title: "Widest Range Of Products",
      description:
        "Exhaustive catalog of printer and toner components for all printer models in India.",
    },
  ];

  import hypozItSolution from "../assets/images/hypoz-it-solutions.png"
  import hypozOfficeSolution from "../assets/images/hypoz-officesolutions.png"
  import hypozPrintSolution from "../assets/images/hypoz-printsolutions.png"
  export const aboutPageProducts = [
    {
      id: 1,
      title: "IT SOLUTIONS",
      description:
        "Provides a complete range of IT solutions including Printers, Cartridges, and Toners. We also undertake refilling toners and cartridges.",
      img: hypozItSolution
    },
    {
      id: 2,
      title: "OFFICE SUPPLIES",
      description:
        "Provides a complete range of stationery and all other office supplies that your business may ever require.",
      img: hypozOfficeSolution,
    },
    {
      id: 3,
      title: "PRINT & DESIGN",
      description:
        "Our print division utilizes over 7 established print partners so that we can gain the very best prices on your behalf.",
      img:hypozPrintSolution,
    },
  ];
  
  import product1 from '../assets/images/hyperpowerProducts/prod1.jpeg'
  import product2 from '../assets/images/hyperpowerProducts/prod2.jpeg'
  import product3 from '../assets/images/hyperpowerProducts/prod3.jpeg'
  import product4 from '../assets/images/hyperpowerProducts/prod4.jpeg'
  export const productCards = [
    {
      id: 1,
      title: "Laserjet 203A Set | 4 pack | Premium Toner Cartridges - Black, Cyan, Magenta, Yellow",
      oldPrice: "$460.96",
      newPrice: "$449.00",
      pageYield: "Black: 3,150 Pages / Color: 2,450 Pages",
      reviews: 106,
      image: product1, // Replace with actual image URL
    },
    {
      id: 2,
      title: "Laserjet 207A Set | 4 pack | Premium Toner Cartridges - Black, Cyan, Magenta, Yellow",
      oldPrice: "$478.96",
      newPrice: "$469.00",
      pageYield: "Black: 2,400 Pages / Color: 2,100 Pages",
      reviews: 104,
      image: product2,
    },
    {
      id: 3,
      title: "Laserjet 415A Set | 4 pack | Premium Toner Cartridges - Black, Cyan, Magenta, Yellow",
      oldPrice: "$1,014.96",
      newPrice: "$895.00",
      pageYield: "Black: 7,500 Pages / Color: 6,000 Pages",
      reviews: 80,
      image: product3,
    },
    {
      id: 4,
      title: "Laserjet 410A Set | 4 pack | Premium Toner Cartridges - Black, Cyan, Magenta, Yellow",
      oldPrice: "",
      newPrice: "$112.00",
      pageYield: "3,150 Pages",
      reviews: 31,
      image: product4,
    },
  ]