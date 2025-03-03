import { FaUserMd, FaHeartbeat, FaTooth } from "react-icons/fa";


import doc1 from '../assets/images/Dr Aazam Ahammed.webp'
import doc2 from '../assets/images/Tholakkara Nazar.webp'
import doc3 from '../assets/images/Dr divya.webp'

// Import images
import facility1 from "../assets/images/facility1.jpg"; 
import facility2 from "../assets/images/facility2.jpg";
import facility3 from "../assets/images/facility3.jpg";

// Facilities Data
export const facilities = [
  {
    title: "Eye Care Services",
    category: "MEDICAL SURGERY",
    image: facility1,
    icon: "FaUserMd",
  },
  {
    title: "Cardiology Services",
    category: "MEDICAL THERAPY",
    image: facility2,
    icon: "FaHeartbeat",
  },
  {
    title: "Dental Services",
    category: "MEDICAL PEDIATRICS",
    image: facility3,
    icon: "FaTooth",
  },
];

export const iconsMap = {
    FaUserMd: FaUserMd,
    FaHeartbeat: FaHeartbeat,
    FaTooth: FaTooth,
  };

 export const teamMembers = [
    {
      name: "Dr. Aazam Ahammed Puthanpurakkal",
      specialty: "Doctor",
      image: doc1,
      color: "text-blue-400", // Custom color for specialty
    },
    {
      name: "Danial Frankie",
      specialty: "Doctor",
      image: doc2,
      color: "text-blue-600",
    },
    {
      name: "Alexa Jhon",
      specialty: "Doctor",
      image: doc3,
      color: "text-blue-600",
    },
  ];


import { FaSyringe, FaEye, FaBrain, FaBone, FaCapsules } from "react-icons/fa";

export const services = [
  { icon: FaUserMd, title: "Angioplasty", description: "There are many variations of pas of Lorem Ipsum availab." },
  { icon: FaHeartbeat, title: "Cardiology", description: "There are many variations of pas of Lorem Ipsum availab." },
  { icon: FaTooth, title: "Dental", description: "There are many variations of pas of Lorem Ipsum availab." },
  { icon: FaSyringe, title: "Endocrinology", description: "There are many variations of pas of Lorem Ipsum availab." },
  { icon: FaEye, title: "Eye Care", description: "There are many variations of pas of Lorem Ipsum availab." },
  { icon: FaBrain, title: "Neurology", description: "There are many variations of pas of Lorem Ipsum availab." },
  { icon: FaBone, title: "Orthopaedics", description: "There are many variations of pas of Lorem Ipsum availab." },
  { icon: FaCapsules, title: "RMI", description: "There are many variations of pas of Lorem Ipsum availab." },
];
