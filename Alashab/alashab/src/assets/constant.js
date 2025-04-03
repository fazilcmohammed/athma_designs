import { FaEnvira, FaLeaf, FaAward, FaHeadset } from "react-icons/fa";

// product images
import prod1 from "../assets/images/product-1.jpg";
import prod2 from "../assets/images/product-2.jpg";
import prod3 from "../assets/images/product-3.jpg";
import prod4 from "../assets/images/product-4.jpg";
import prod5 from "../assets/images/product-5.jpg";
import prod6 from "../assets/images/product-6.jpg";
import prod7 from "../assets/images/product-7.jpg";

import semiCoconut from "../assets/images/products/indian/321.webp"
import onion from "../assets/images/products/indian/5404.jpg"
import smallOnion from "../assets/images/products/indian/8289.jpg"
import bananaLeaf from "../assets/images/products/indian/bananaleaf.webp"
import yam from "../assets/images/products/indian/yam.jpeg"
import indianGarlic from "../assets/images/products/indian/garlic.jpg"
import indianGinger from "../assets/images/products/indian/ginger.webp"
import drumstick from "../assets/images/products/indian/drumstick.jpg"
import g9Banana from "../assets/images/products/indian/g9 banana.jpeg"
import ybBanana from "../assets/images/products/indian/yb banana.jpg"
import indianMango from "../assets/images/products/indian/mango.jpg"
import indianGrapes from "../assets/images/products/indian/grapes.jpg"

import mandarinOrange from "../assets/images/products/chinese/BabyMandarinOranges.webp"
import chineseGarlic from "../assets/images/products/chinese/garlic.jpg"
import carrot from "../assets/images/products/chinese/China_Carrot.jpg"
import pomelo from "../assets/images/products/chinese/pomelo.webp"
import raddish from "../assets/images/products/chinese/whiteRadish.webp"
import chineseApple from "../assets/images/products/chinese/chineseapple.png"
import chestnut from "../assets/images/products/chinese/chinesechestnuts.jpeg"
import chineseGinger from "../assets/images/products/chinese/ginger.webp"

import tenderCoconut from "../assets/images/products/srilankan/tendercoconut.jpg"
import greenPappaya from "../assets/images/products/srilankan/Green_Papaya_Srilanka.jpg"
import redPappaya from "../assets/images/products/srilankan/redpappaya.png"
import tapioca from "../assets/images/products/srilankan/tapioca.webp"

import custardApple from "../assets/images/products/egypt/custardapple.jpg"
import egyptOrange from "../assets/images/products/egypt/egyptian-oranges-500x500.webp"
import egyptGrapes from "../assets/images/products/egypt/grapes.jpg"
import sweetPotato from "../assets/images/products/egypt/sweetpotato.jpg"
import strawberry from "../assets/images/products/egypt/strawberry.webp"
import plums from "../assets/images/products/egypt/plums.jpg"
import peaches from "../assets/images/products/egypt/peaches.jpg"
import fig from "../assets/images/products/egypt/fig.jpg"

import spanishgrapes from "../assets/images/products/spain/spanishgrapes.jpg"
import persimmon from "../assets/images/products/spain/persimmon.webp"
import pomogranate from "../assets/images/products/spain/pomogranate.png"
import spainApple from "../assets/images/products/spain/Spain_Apple.jpg"

import africanMandarin from "../assets/images/products/african_countries/africanMandarin.jpg"
import africanMango from "../assets/images/products/african_countries/africanMango.jpg"
import avocado from "../assets/images/products/african_countries/avocado-73.webp"

import morocconApple from "../assets/images/products/morocco/morocconApple.webp"
import morocconApricot from "../assets/images/products/morocco/morocconApricot.jpeg"
import morocconGrapes from "../assets/images/products/morocco/morocconGrapes.jpg"
import morocconPlums from "../assets/images/products/morocco/morocconPlums.png"
import morocconOrange from "../assets/images/products/morocco/morocconOrange.jpg"
import morocconPomegranate from "../assets/images/products/morocco/morocconPomegranate.jpg"

import chinaThumb from "../assets/images/products/chinese/chinaThumbnail.jpg"

export const features = [

  {
    icon: FaLeaf,
    bgColor: "bg-yellow-300",
    title: "ORGANIC PRODUCTS",
    description: "All our products are fully certified organic, grown according to international standards, and packed in compostable and renewable packaging materials.",
  },
  {
    icon: FaAward,
    bgColor: "bg-blue-300",
    title: "SUPERIOR QUALITY",
    description: "We have the highest quality standards which all our produce must meet in order to be fit for your table.",
  },
  {
    icon: FaEnvira,
    bgColor: "bg-yellow-300",
    title: "100% NATURAL",
    description: "supplies only the real thing to our customers and we are dedicated to offering fresh and healty fruits and vegetables to our customers",
  },
];

export const products = [
  {
    id: 1,
    name: "BELL PEPPER",
    price: 120,
    oldPrice: null,
    discount: null,
    image: prod1,
  },
  {
    id: 2,
    name: "STRAWBERRY",
    price: 120,
    oldPrice: null,
    discount: null,
    image: prod2,
  },
  {
    id: 3,
    name: "GREEN BEANS",
    price: 120,
    oldPrice: null,
    discount: null,
    image: prod3,
  },
  {
    id: 4,
    name: "PURPLE CABBAGE",
    price: 120,
    oldPrice: null,
    discount: null,
    image: prod3,
  },
  {
    id: 5,
    name: "TOMATO",
    price: 80,
    oldPrice: 120,
    discount: null,
    image: prod4,
  },
  {
    id: 6,
    name: "BROCCOLI",
    price: 120,
    oldPrice: null,
    discount: null,
    image: prod5,
  },
  {
    id: 7,
    name: "CARROTS",
    price: 120,
    oldPrice: null,
    discount: null,
    image: prod6,
  },
  {
    id: 8,
    name: "FRUIT JUICE",
    price: 120,
    oldPrice: null,
    discount: null,
    image: prod7,
  },
];

export const productsByCountry = [
  {
    name: "Semi Husked Coconut",
    img : semiCoconut,
    country: "India"
  }
  ,
  {
    name: "Onion",
    img : onion,
    country: "India"
  }
  ,
  {
    name: "Shallot (Small Onion)",
    img : smallOnion,
    country: "India"
  }
  ,
  {
    name: "Yam",
    img : yam,
    country: "India"
  }
  ,
  {
    name: "Garlic",
    img : indianGarlic,
    country: "India"
  }
  ,
  {
    name: "Ginger",
    img : indianGinger,
    country: "India"
  }
  ,
  {
    name: "Drumstick",
    img : drumstick,
    country: "India"
  }
  ,
  {
    name: "Banana Leaves",
    img : bananaLeaf,
    country: "India"
  }
  ,
  {
    name: "G9 Banana",
    img : g9Banana,
    country: "India"
  }
  ,
  {
    name: "YB Banana",
    img : ybBanana,
    country: "India"
  }
  ,
  {
    name: "Indian Grapes",
    img : indianGrapes,
    country: "India"
  }
  ,
  {
    name: "Indian Mango",
    img : indianMango,
    country: "India"
  },
  {
    name: "Chinese Garlic",
    img : chineseGarlic,
    country: "China"
  },
  {
    name: "Chinese Ginger",
    img : chineseGinger,
    country: "China"
  },
  {
    name: "Carrot",
    img : carrot,
    country: "China"
  },
  {
    name: "Pomelo",
    img : pomelo,
    country: "China"
  },
  {
    name: "Baby Manderian",
    img : mandarinOrange,
    country: "China"
  },
  {
    name: "Radish",
    img : raddish,
    country: "China"
  },
  {
    name: "Chinese Apple",
    img : chineseApple,
    country: "China"
  },
  {
    name: "Chestnut",
    img : chestnut,
    country: "China"
  },
  {
    name: "Tender Coconut",
    img : tenderCoconut,
    country: "Srilanka"
  },
  {
    name: "Red Pappaya",
    img : redPappaya,
    country: "Srilanka"
  },
  {
    name: "Green Pappaya",
    img : greenPappaya,
    country: "Srilanka"
  },
  {
    name: "Tapioca",
    img : tapioca,
    country: "Srilanka"
  },
  {
    name: "Egyptian Orange",
    img : egyptOrange,
    country: "Egypt"
  },
  {
    name: "Egyptian Grapes",
    img : egyptGrapes,
    country: "Egypt"
  },
  {
    name: "Sweet Potato",
    img : sweetPotato,
    country: "Egypt"
  },
  {
    name: "Strawberry",
    img : strawberry,
    country: "Egypt"
  },
  {
    name: "Egyptian Plums",
    img : plums,
    country: "Egypt"
  },
  {
    name: "Peaches",
    img : peaches,
    country: "Egypt"
  },
  {
    name: "Fig",
    img : fig,
    country: "Egypt"
  },
  {
    name: "Custard Apple",
    img : custardApple,
    country: "Egypt"
  },
  {
    name: "Spanish Grapes",
    img : spanishgrapes,
    country: "Spain"
  },
  {
    name: "Spanish Apple",
    img : spainApple,
    country: "Spain"
  },
  {
    name: "Pomegranate",
    img : pomogranate,
    country: "Spain"
  },
  {
    name: "Persimmon",
    img : persimmon,
    country: "Spain"
  },
  {
    name: "Avocado",
    img : avocado,
    country: "Africa"
  },
  {
    name: "African Mango",
    img : africanMango,
    country: "Africa"
  },
  {
    name: "African Mandarin",
    img : africanMandarin,
    country: "Africa"
  },
  {
    name: "Moroccon Apple",
    img : morocconApple,
    country: "Morocco"
  },
  {
    name: "Moroccon Pomegranate",
    img : morocconPomegranate,
    country: "Morocco"
  },
  {
    name: "Moroccon Orange",
    img : morocconOrange,
    country: "Morocco"
  },
  {
    name: "Moroccon Grapes",
    img : morocconGrapes,
    country: "Morocco"
  },
  {
    name: "Apricot",
    img : morocconApricot,
    country: "Morocco"
  },
  {
    name: "Moroccon Plums",
    img : morocconPlums,
    country: "Morocco"
  },
];

export const countrys = [
  {
    country : "India",
    img: "https://www.healthyfood.com/wp-content/uploads/2022/12/iStock-1208790371-e1671068949690.jpg"
  },
  {
    country : "China",
    img: chinaThumb
  },
  {
    country : "SriLanka",
    img: "https://www.nationaldaycalendar.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:eco%2Cw_768/MjA1ODUzNDc0NjQ1MDkxOTYw/website-feature---fresh-fruit-and-vegetable-month--june.png"
  },
  {
    country : "Egypt",
    img: "https://en.amwalalghad.com/wp-content/uploads/2024/09/food-exports.jpg"
  },
  {
    country : "Spain",
    img: "https://hannontransport.com/wp-content/uploads/2021/12/Spanish-fruit-and-veg.png"
  },
  {
    country : "Africa",
    img: "https://foodsecurity.ac.za/wp-content/uploads/2018/08/market-3351156_1920-1024x766.jpg"
  },
  {
    country : "Morocco",
    img: "https://cdn.blueberriesconsulting.com/2022/01/blue07013-1.jpg"
  },
]

import supply from "../assets/images/supplyy.jpg"
import importing from "../assets/images/importing.jpg"
import exporting from "../assets/images/exporting.jpg"
import retail from "../assets/images/retail.jpg"
import partner from "../assets/images/partnership.jpg"
export const aboutTimeline = [
  {
    img:supply,
    title: "Supply",
    description: "We specialize in wholesale supply of fresh fruits and vegetables across the UAE market, ensuring that our clients receive the finest produce at competitive prices."
  },
  {
    img:importing,
    title: "Import",
    description: "We import premium-quality fruits and vegetables from all corners of the globe. Our suppliers are located in Brazil, Egypt, the USA, Africa, Holland, Australia, KSA, Oman, Thailand, Iran, China, Sri Lanka, India, Pakistan, Kenya, Bangladesh, and many more. With a strong network, we ensure that only the freshest produce reaches our outlets, which are conveniently spread across Dubai."
  },
  {
    img:exporting,
    title: "Export",
    description: "We also export our high-quality fresh fruits and vegetables to various parts of the world, with a focus on markets in the Middle East, Africa, and Asia. Our extensive market presence and reliable shipping services ensure that our products are available to meet the needs of customers worldwide."
  },
  {
    img:retail,
    title: "Retail",
    description: "We offer van sales, delivering fresh produce directly to retail shops, hotels, and catering businesses. Whether you require large or small quantities of fresh fruits and vegetables, ALASHAB guarantees quality and timely delivery, tailored to your needs."
  },
  {
    img:partner,
    title: "Partnership",
    description: "ALASHAB partners with over 20 contract farms in India, Sri Lanka, and the UAE, ensuring a consistent supply of top-tier produce. This collaboration allows us to deliver only the best fresh fruits and vegetables to our customers."
  },
]