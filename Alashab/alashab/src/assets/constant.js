import { FaTruck, FaLeaf, FaAward, FaHeadset } from "react-icons/fa";

// product images
import prod1 from "../assets/images/product-1.jpg"
import prod2 from "../assets/images/product-2.jpg"
import prod3 from "../assets/images/product-3.jpg"
import prod4 from "../assets/images/product-4.jpg"
import prod5 from "../assets/images/product-5.jpg"
import prod6 from "../assets/images/product-6.jpg"
import prod7 from "../assets/images/product-7.jpg"

export const features = [
  {
    icon: FaTruck,
    bgColor: "bg-pink-300",
    title: "FREE SHIPPING",
    description: "ON ORDER OVER $100",
  },
  {
    icon: FaLeaf,
    bgColor: "bg-yellow-300",
    title: "ALWAYS FRESH",
    description: "PRODUCT WELL PACKAGE",
  },
  {
    icon: FaAward,
    bgColor: "bg-blue-300",
    title: "SUPERIOR QUALITY",
    description: "QUALITY PRODUCTS",
  },
  {
    icon: FaHeadset,
    bgColor: "bg-yellow-300",
    title: "SUPPORT",
    description: "24/7 SUPPORT",
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
  