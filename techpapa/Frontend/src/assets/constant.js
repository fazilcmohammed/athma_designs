import { FaCloud, FaHeadset, FaLaptop, FaGraduationCap } from "react-icons/fa";
import { FaServer, FaTools, FaBuilding, FaMicrochip, FaRobot, FaNetworkWired, FaLifeRing, FaMicrosoft  } from "react-icons/fa";

import logo1 from '../assets/images/brandLogos/1.jpg'
import logo2 from '../assets/images/brandLogos/2.png'
import logo3 from '../assets/images/brandLogos/3.png'
import logo4 from '../assets/images/brandLogos/4.png'
import logo5 from '../assets/images/brandLogos/5.jpg'
import logo6 from '../assets/images/brandLogos/6.png'
import logo7 from '../assets/images/brandLogos/7.png'
import logo8 from '../assets/images/brandLogos/8.png'
import logo9 from '../assets/images/brandLogos/9.png'
import logo10 from '../assets/images/brandLogos/10.png'
import logo11 from '../assets/images/brandLogos/11.png'
import logo12 from '../assets/images/brandLogos/12.png'
import logo13 from '../assets/images/brandLogos/13.png'
import logo14 from '../assets/images/brandLogos/14.png'

export const menuItems = [
    { name: "About us", dropdown: ["Our Team", "Careers", "Contact"] },
    { name: "Digital Solutions", dropdown: ["AI Solutions", "E-commerce", "CRM"] },
    { name: "Cloud Service", dropdown: ["AWS", "Azure", "Google Cloud"] },
    { name: "IT Infra", dropdown: ["Networking", "Servers", "Storage"] },
    { name: "Cyber Security", dropdown: ["Threat Management", "Data Protection", "Compliance"] },
    { name: "Managed Service" },
    { name: "emAssist" },
  ];


export const services = [
    {
      id: 1,
      title: "HYBRID CLOUD SOLUTIONS",
      description: "Take advantage of cloud innovation and accelerate your business by relying on effective hybrid and multi-cloud approach...",
      icon: FaCloud ,
      bgColor: "bg-white",
      textColor: "text-black",
      link: "/services/telephony-as-a-service/"
    },
    {
      id: 2,
      title: "MANAGED IT SERVICE",
      description: "Achieve highest level of efficiency of your business with all levels of IT Support to cover all your technology support...",
      icon: FaHeadset,
      bgColor: "bg-white",
      textColor: "text-black",
      link: "/service/managed-it-service/"
    },
    {
      id: 3,
      title: "DIGITAL WORKSPACE",
      description: "A digital workspace makes it easy for organizations to embrace new technologies and the cloud with security and great user...",
      icon: FaLaptop,
      bgColor: "bg-red-600 text-white",
      textColor: "text-white",
      link: "/service/digital-workspace/"
    },
    {
      id: 4,
      title: "DIGITAL LEARNING SOLUTIONS",
      description: "We pride ourselves in providing most innovative learning technology solutions and eLearning content development services...",
      icon: FaGraduationCap,
      bgColor: "bg-white",
      textColor: "text-black",
      link: "/service/digital-learning-solutions/"
    },
  ];


  export const solutions = [
    {
      id: 1,
      title: "Virtualization Solutions",
      description:
        "Many IT organizations deploy servers that are only running at a fraction of their capacity...",
      icon: FaServer,
    },
    {
      id: 2,
      title: "Premium IT AMC Support",
      description:
        "For businesses utilizing IT and cloud infrastructure, having a proactive and reliable IT AMC...",
      icon: FaTools,
    },
    {
      id: 3,
      title: "Cloud Managed Networking",
      description:
        "Choosing Emtech as your cloud-managed networking services provider offers a range of benefits...",
      icon: FaCloud,
    },
    {
      id: 4,
      title: "Enterprise ICT",
      description:
        "EMTECH, one among the top IT companies in UAE, follows a comprehensive approach to creating and managing enterprise ICT...",
      icon: FaBuilding,
    },
    {
      id: 5,
      title: "Artificial Intelligence",
      description:
        "We provide innovative AI solutions to help businesses become agile and smart...",
      icon: FaRobot,
    },
    {
      id: 6,
      title: "Internet of Things (IoT)",
      description:
        "The Internet of Things (IoT) has woven itself into almost every aspect of daily life...",
      icon: FaMicrochip,
    },
    {
      id: 7,
      title: "Cloud Operations Center",
      description:
        "Emtech’s Cloud Operation Center (COC) offers a dedicated, streamlined solution for businesses...",
      icon: FaCloud,
    },
    {
      id: 8,
      title: "Azure Managed Service",
      description:
        "It’s an incredibly competitive environment for enterprises, and they need every opportunity...",
      icon: FaTools,
    },
    {
      id: 9,
      title: "Managed IT Services in UAE",
      description:
        "Our Managed IT Service is based on modern digital solutions and services...",
      icon: FaBuilding,
    },
    {
      id: 10,
      title: "IT Infrastructure",
      description:
        "What is IT Infrastructure? IT Infrastructure is the backbone of any organization...",
      icon: FaNetworkWired,
    },
    {
      id: 11,
      title: "24/7 Critical Support",
      description:
        "At Emtech, we provide exceptional IT Support Services that help businesses maintain seamless operations 24/7...",
      icon: FaLifeRing,
    },
    {
      id: 12,
      title: "Microsoft 365 Suite",
      description:
        "As your trusted Microsoft 365 provider, leverage the possibilities and opportunities of...",
      icon: FaMicrosoft,
    },
  ];
  

  export const companyLogos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    

  ];

export const azureServices = [
  {
    title: "Delivered Business Benefits",
    description:
      "Our Cloud management solution services for Azure delivers a complete solution, providing you with one partner for all of your Azure needs. Our experts cater to all your Azure related requirements by leveraging three core features that offer peace of mind and ensure your cloud investment will be optimized, managed and protected.",
    image: "/your-image-1.jpg",
  },
  {
    title: "Comprehensive Support",
    description:
      "Our technical support professionals are available around the clock to resolve issues quickly and effectively. No matter where you are in your journey with Azure, access to expert-level assistance is critical to a successful cloud transformation.",
    image: "/your-image-2.jpg",
  },
  {
    title: "Financial Control & Governance",
    description:
      "If you want to be able to deliver on the promise that moving to the cloud will save your organization money, you need to have a good governance in place first. Gain control of your Azure usage with our industry-expert cloud management services.",
    image: "/your-image-3.jpg",
  },
  {
    title: "Managed Billing",
    description:
      "The first step in maximizing your experience with Cost Management is to investigate and decide which Azure offers best fit your needs. Stop paying for more resources than you need. An optimized cloud gives you the exact resources you need.",
    image: "/your-image-4.jpg",
  },
];

export const hybridCloudServices = [
  {
  heroTitle : "Hybrid Cloud Solutions",
  contentSubTitle : " Microsoft Azure",
  contentTitle : "Modernize your IT with Microsoft Azure",
  content : "Emtech is a Microsoft Gold Cloud Platform Partner, recognized as a leading Azure provider with deep knowledge of cloud strategy, platform deployment, and ongoing management. Our provision includes migration assessments, deployment plans, and cloud optimization, ensuring the best performance from your infrastructure. We keep ahead of the latest Azure developments from Microsoft so that our customers can adopt best practices, enable innovation, and future-proof their businesses. Emtech offers tailored Azure solutions to align with your unique business goals, driving productivity and efficiency. Our team of certified experts provides end-to-end support, from planning to deployment, ensuring a smooth and secure cloud transition. Emtech’s managed Azure services allow your business to scale seamlessly while controlling costs and enhancing agility. Partnering with Emtech means reliable, scalable, and secure cloud infrastructure that empowers your business to thrive.",
  contentImg : "https://imageio.forbes.com/specials-images/imageserve/65adf497bd5d0347e5af3b8d/Data-is-a-strategic-asset-/960x0.jpg?format=jpg&width=960",
  serviceSubTitle : "Azure Managed Service",
  serviceTitle : "What Microsoft Azure services do we provide?",
  serviceContent : "Cloud adoption services: Consultancy, planning, and deployment services to ensure a smooth transition from on-premise IT systems to Microsoft Azure; Hybrid cloud solutions: Seamless integration of one or more Azure services into existing infrastructure; Fully managed Cloud services: Comprehensive management for organizations adopting the cloud without internal IT support.",
  services : [
    {
      title:"Delivered Business Benefits",
      description:"Our Cloud management solution services for Azure delivers a complete solution, providing you with one partner for all of your Azure needs. Our experts cater to all your Azure-related requirements by leveraging three core features that offer peace of mind and ensure your cloud investment will be optimized, managed and protected.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2024/11/Delivered-business-benefits.jpg"
    },
    {
      title:"Comprehensive Support",
      description:"Our technical support professionals are available around the clock to resolve issues quickly and effectively. No matter where you are in your journey with Azure, access to export- level assistance is critical to a successful cloud transformation. Emtech is your resource for azure assistance through incident support, spend analysis and advisory services. Our Managed Services provide comprehensive support coverage for all your cloud requirements.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2024/11/Comprehensive-Support.jpg"
    },
    {
      title:"Financial Control & Governance",
      description:"If you want to be able to deliver on the promise that moving to the cloud will save your organization money, you need to have a good governance in place first. Gain control of your Azure usage with our industry expert cloud management services. Our advisory services, along with technical support, help you govern and maintain an optimized Azure environment to have better control and optimization on cloud spend.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2024/11/Financial-control-governance.jpg"
    },
    {
      title:"Managed Billing",
      description:"The first step in maximizing your experience within Cost Management is to investigate and decide which Azure offer is best for you. Stop wasting money paying for more resources than you need. An optimized cloud gives you the exact resources you need. Our cloud optimization features are powered by machine learning and designed around your actual usage. Optimize costs today and take actions toward ongoing efficiency and lower unit costs over time.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2024/11/Managed-billing.jpg"
    },
  ],
  bottomTitle : "Driving Microsoft Modern Workplace and Azure success across the region.!"
  }
]


export const azureContent = [
  {
    title: "Azure Care Package",
    description:
      "Our Azure Care Package—a key component of our cloud management for Azure—provides incident support for unexpected issues and managed escalation to Microsoft Premier Support. You'll have access to subject matter experts for advisory and administrative services, ensuring smooth operations.",
  },
  {
    title: "24/7 Critical Support",
    description:
      "Partnering with Emtech for 24/7 cloud administration provides high-quality, cost-effective IT support around the clock. Our dedicated system ensures availability 24/7, 365 days a year, offering reliable support whenever you need it.",
  },
  {
    title: "Azure Purchase",
    description:
      "Choose the flexibility of pay-as-you-go Azure purchases directly from Emtech, with bundled services and end-to-end support. Our expertise ensures a seamless experience, from subscription to ongoing support.",
  },
  {
    title: "Cloud Solutions Provider",
    description:
      "As a Microsoft Cloud Solutions Provider, Emtech provides Azure subscription support and exclusive access to our Cloud Management Portal. Our technical knowledge, commitment to customer success, and high standards ensure a dependable Azure experience throughout your cloud journey.",
  },
];

export const managedItService = [
  {
  heroTitle : "Managed IT Service in UAE",
  contentSubTitle : " Managed IT Service",
  contentTitle : "A catalyst in business transformation",
  content : "Our Managed IT Service is based on modern digital solutions and services that use innovative technology solutions to solve business problems, delivering exceptional value. Specializing in digital transformation and cloud-based technologies, we imagine, build, and empower IT-enabled business solutions. From essential reactive monitoring to overall  IT infrastructure management, Emtech’s managed services ensure that all our customers delegate their routine maintenance tasks to us whilst investing their capital and resources on other mission-critical tasks requiring domain expertise.",
  contentImg : "https://imageio.forbes.com/specials-images/imageserve/65adf497bd5d0347e5af3b8d/Data-is-a-strategic-asset-/960x0.jpg?format=jpg&width=960",
  serviceSubTitle : "Managed IT Service",
  serviceTitle : "Power your business with Emtech's Managed IT Service in UAE",
  serviceContent : "",
  services : [
    {
      title:"Managed Cloud Services",
      description:"Work with us to deploy the most suitable cloud platform for your data, balancing high performance and reliable access with every security policy, regulatory requirement, and privacy obligation . As the industry’s leading next gen cloud service provider, Emtech serves as an experienced cloud partner for organizations around the Middle East, while working closely with customers to understand unique cloud requirements and challenges. As business needs change, Emtech capabilities grow and evolve to help guide and support customers throughout the entire cloud lifecycle.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Managed-Cloud-Services.jpg"
    },
    {
      title:"Microsoft Azure Services",
      description:"The flexibility, reliability, and scale of an enterprise-ready cloud, coupled with the tailoring, transparency, and proactive management of our experienced team. Emtech offers extend in-house talent with our remote dedicated team of engineering professionals, architects, and account managers with proven experience in creating architecture, as well as building complete solutions, deploying to production, and performing operations management",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Microsoft-Azure-Services.jpg"
    },
    {
      title:"Managed Microsoft 365 Services",
      description:"Support your employees' productivity and collaboration while keeping your data safe, through the industry-leading platform delivered by an experienced Microsoft Partner.Emtech’s Managed Microsoft 365 service helps you get the most out of your Microsoft 365 investment, with a choice of enterprise-class support and service management packages to fulfil a range of support level and budget requirements",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Managed-Microsoft-365-Services.jpg"
    },
    {
      title:"Desktop as a Service",
      description:"Provide your users with full and secure VDI access to their data, applications and the company network anywhere and at any time. Quickly deployed with multiple connectivity options and scales to meet the changing size of your business or need for remote working. With Windows Virtual Desktop, you can deploy and scale your Windows desktops and apps on Azure in minutes and get built-in security and compliance features.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Desktop-as-a-Service.jpg"
    },
    {
      title:"Managed IT Security",
      description:"Round the clock monitoring and protection from intrusions, malware along with regular security audits. 24 x 7 IT infrastructure monitoring and security. Through our effective and reliable 24x7 network monitoring, we are able to gain critical insight into your technology platform integrity and can more easily provide you with cost-effective managed support.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Managed-IT-Security.jpg"
    },
    {
      title:"Managed Server",
      description:"Tech-Assured’s Managed Server Services ensure smooth and efficient servers across any hardware type and deployment. Rapid growth in business may require a more sophisticated server solution, and of course, it needs to be cost-effective and compatible with storage offerings. With Emtech, you are worry free. Emtech gives you a best in server solutions.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Managed-Server.jpg"
    },
    {
      title:"Managed Network",
      description:"Our managed network services are great to drive cost-effectiveness, reliability, and efficiency of enterprise networks. Report, manage and administer, WAN, LAN and Wireless infrastructure with proven Service Level Agreements. Emtech is responsible for delivering great managed network services and experiences to users.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Managed-Network.jpg"
    },
    {
      title:"Managed Database",
      description:"Database management services covering leading database systems like Microsoft SQL Server, Oracle and MySQL. Allow your developers to deliver more value by focusing on the features that matter to your customers. With this variety of database types available, we can find you the right managed database.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Managed-Database.jpg"
    },
    {
      title:"Managed Storage & Backu",
      description:"Round the clock data backups and storage ensuring full compliance. Emtech gives importance to the kind of organization and their highly sensitive data measures. With an all-round safety net for your data, we shield your mission-critical IT resources with our online application backup and restore facilities, besides enhancing performance and managing business risk.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Managed-Storage-Backup.jpg"
    },
    {
      title:"Managed Desktop & Mobile",
      description:"Enjoy a 360-degree view of your IT assets and security with remote support for desktop and mobile setups. We keep business devices healthy with fresh installs of Desktop & Mobile devices. We have expertise to help you manage all of your company’s desktop and mobile hardware in an efficient and cost-effective manner",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Managed-Desktop-Mobile.jpg"
    },
  ],
  bottomTitle : "Move from technology-constrained to service-enabled managed IT!"
  }
]


export const digitalWorkplace = [
  {
  heroTitle : "The digital workplace - Think, share, do",
  contentSubTitle : "",
  contentTitle : "A catalyst in business transformation",
  content : "Our Managed IT Service is based on modern digital solutions and services that use innovative technology solutions to solve business problems, delivering exceptional value. Specializing in digital transformation and cloud-based technologies, we imagine, build, and empower IT-enabled business solutions. From essential reactive monitoring to overall  IT infrastructure management, Emtech’s managed services ensure that all our customers delegate their routine maintenance tasks to us whilst investing their capital and resources on other mission-critical tasks requiring domain expertise.",
  contentImg : "https://imageio.forbes.com/specials-images/imageserve/65adf497bd5d0347e5af3b8d/Data-is-a-strategic-asset-/960x0.jpg?format=jpg&width=960",
  serviceSubTitle : "Digital workplace solutions",
  serviceTitle : "Empower your users with the building blocks of Digital Workplace",
  serviceContent : "",
  services : [
    {
      title:"Deliver Windows 10 desktops on any device, anywhere",
      description:"Provide employees the best virtualized experience with the only solution fully optimized for Windows 10 and Office 365. Regardless of your device type bring-your-own-device (BYOD) and remote connect to your enterprise experience with Windows Virtual Desktop. ITs can pick whatever Azure VM will meet their teams needs and leverage the Windows 10 multi-session advantage that only Azure offers.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Deliver-Windows-10-desktops-on-any-device-anywhere.jpg"
    },
    {
      title:"Built-in intelligent security",
      description:"Keep your applications and data secure and compliant with security capabilities that can proactively detect threats and take remedial action. Securely store all your employee and company data in Azure instead of local desktops. Take the advantage of Azure security offering such as Azure Firewall, Azure Security Center, Azure Sentinel and Microsoft Defender ATP for end-to-end security from the endpoint to the applications.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Built-in-intelligent-security.jpg"
    },
    {
      title:"Deploy and scale in minutes",
      description:"Simplify deployment and management of your infrastructure and quickly scale based on your business needs. The Azure portal is your management hub for Windows Virtual Desktop. Configure network, deploy desktop, and enable security with a few clicks. Setup automated scaling with Logic Apps and manage your images efficiently with Azure image gallery.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Deploy-and-scale-in-minutes.jpg"
    },
    {
      title:"Reduce cost using existing licenses",
      description:"Use existing licenses to save cost with a modern cloud-based virtual desktop infrastructure (VDI) and pay only for what you use. Reduce infrastructure costs by right sizing VMs and shutting down VMs in use. Increase utilization of VMs with Windows 10 multi-session. Reduce management overhead by moving all your VDI into a managed service in the cloud.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Reduce-cost-using-existing-licenses.jpg"
    },
    {
      title:"Assessments & Workshops",
      description:"Discover ways to work better together and create a modern workplace effectively. Confidently make your next move. An IT envisioning session, assessment, workshop, or JumpStart with our experienced team will give you deep understanding and a clear path forward. Emtech evaluates your current collaboration and communication tools and directs you on how to transform teamwork across your organization.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Assessments-Workshops.jpg"
    },
    {
      title:"Migration Services",
      description:"We support migrations from on-premises to M365 as well as SharePoint Classic to SharePoint Modern. We help you modernize your employee’s remote work experience, and we help you create a plan to optimize your cost savings. We make the transition easy for you by following best practices in implementation, and ensuring your team is informed every step of the way, including planning, setting up, migrating, and managing.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Migration-Services.jpg"
    },
    {
      title:"Implementation",
      description:"Establish a secure modern digital workplace. With a variety of security and privacy capabilities, Emtech can help you secure your data, establish company governance, and help you comply with specific standards. When implementing any new system across your organization, Emtech identifies how you’ll protect all the data you hold. With this idea we design your entire infrastructure.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Implementation.jpg"
    },
    {
      title:"Privacy & Security",
      description:"Database management services covering leading database systems like Microsoft SQL Server, Oracle and MySQL. Allow your developers to deliver more value by focusing on the features that matter to your customers. With this variety of database types available, we can find you the right managed database.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Privacy-Security.jpg"
    },
    {
      title:"Adoption & Change Management",
      description:"We assist in creating a user adoption and change management strategy that will ensure your program is implemented successfully and your team adapts to the transition. We help you create a customized road map and set actionable steps that guide you to an effective modern workplace.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Adoption-Change-Management.jpg"
    },
    {
      title:"Management & Monitoring",
      description:"With Emtech’s continuous management and monitoring of your environment you will be able to concentrate in the things that matter. Peak employee experience with a connected modern workplace. Our Consulting practitioners can help you design and implement your digital workplace, as well as help drive your innovation agenda through the effective implementation of your digital workplace.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Management-Monitoring.jpg"
    },
    {
      title:"Microsoft Teams",
      description:"The hub for communication and collaboration. No matter where your employees are located, they can communicate in real time with Microsoft Teams. Chat, video calling and screen sharing all boost real-time communication in the workplace and reduce the amount of clutter that goes unnoticed in email.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Microsoft-Teams.jpg"
    },
    {
      title:"Collaboration",
      description:"Teams is the go-to secure, reliable, scalable and cost-effective collaboration tool that meets the needs of today’s mobile and global workforce. From chatting to online meetings to co-authoring sharing files. Teams enables employees to communicate and collaborate anytime, anywhere.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Collaboration.jpg"
    },
    {
      title:"Teamwork is How Work Gets Done",
      description:"When you have a place to create and make decisions as a team, there’s no limit to what you can achieve. Teams brings everything together in a shared workspace where you can chat, meet, share files and work with business apps. With Teams, you can have built-in access to everything you need right in Office 365. With the latest communication technology from Microsoft you can connect the tools and services that employees use every day in a single hub. With mobile apps designed to help you work on the go, your employees can work better together.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Teamwork-is-How-Work-Gets-Done.jpg"
    },
  ],
  bottomTitle : "Experience the power of a truly digital workplace with us!"
  }
]

export const digitalLearning = [
  {
  heroTitle : "DIGITAL LEARNING SOLUTIONS",
  contentSubTitle : "",
  contentTitle : "Digital Learning Solutions",
  content : "Our Managed IT Service is based on modern digital solutions and services that use innovative technology solutions to solve business problems, delivering exceptional value. Specializing in digital transformation and cloud-based technologies, we imagine, build, and empower IT-enabled business solutions. From essential reactive monitoring to overall  IT infrastructure management, Emtech’s managed services ensure that all our customers delegate their routine maintenance tasks to us whilst investing their capital and resources on other mission-critical tasks requiring domain expertise.",
  contentImg : "https://imageio.forbes.com/specials-images/imageserve/65adf497bd5d0347e5af3b8d/Data-is-a-strategic-asset-/960x0.jpg?format=jpg&width=960",
  serviceSubTitle : "Learning technology services",
  serviceTitle : "Adapt Digital Learning To Empower Your Employees",
  serviceContent : "",
  services : [
    {
      title:"Deliver Windows 10 desktops on any device, anywhere",
      description:"Provide employees the best virtualized experience with the only solution fully optimized for Windows 10 and Office 365. Regardless of your device type bring-your-own-device (BYOD) and remote connect to your enterprise experience with Windows Virtual Desktop. ITs can pick whatever Azure VM will meet their teams needs and leverage the Windows 10 multi-session advantage that only Azure offers.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Deliver-Windows-10-desktops-on-any-device-anywhere.jpg"
    },
    {
      title:"Built-in intelligent security",
      description:"Keep your applications and data secure and compliant with security capabilities that can proactively detect threats and take remedial action. Securely store all your employee and company data in Azure instead of local desktops. Take the advantage of Azure security offering such as Azure Firewall, Azure Security Center, Azure Sentinel and Microsoft Defender ATP for end-to-end security from the endpoint to the applications.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Built-in-intelligent-security.jpg"
    },
    {
      title:"Deploy and scale in minutes",
      description:"Simplify deployment and management of your infrastructure and quickly scale based on your business needs. The Azure portal is your management hub for Windows Virtual Desktop. Configure network, deploy desktop, and enable security with a few clicks. Setup automated scaling with Logic Apps and manage your images efficiently with Azure image gallery.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Deploy-and-scale-in-minutes.jpg"
    },
    {
      title:"Reduce cost using existing licenses",
      description:"Use existing licenses to save cost with a modern cloud-based virtual desktop infrastructure (VDI) and pay only for what you use. Reduce infrastructure costs by right sizing VMs and shutting down VMs in use. Increase utilization of VMs with Windows 10 multi-session. Reduce management overhead by moving all your VDI into a managed service in the cloud.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Reduce-cost-using-existing-licenses.jpg"
    },
    {
      title:"Assessments & Workshops",
      description:"Discover ways to work better together and create a modern workplace effectively. Confidently make your next move. An IT envisioning session, assessment, workshop, or JumpStart with our experienced team will give you deep understanding and a clear path forward. Emtech evaluates your current collaboration and communication tools and directs you on how to transform teamwork across your organization.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Assessments-Workshops.jpg"
    },
    {
      title:"Migration Services",
      description:"We support migrations from on-premises to M365 as well as SharePoint Classic to SharePoint Modern. We help you modernize your employee’s remote work experience, and we help you create a plan to optimize your cost savings. We make the transition easy for you by following best practices in implementation, and ensuring your team is informed every step of the way, including planning, setting up, migrating, and managing.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Migration-Services.jpg"
    },
    {
      title:"Implementation",
      description:"Establish a secure modern digital workplace. With a variety of security and privacy capabilities, Emtech can help you secure your data, establish company governance, and help you comply with specific standards. When implementing any new system across your organization, Emtech identifies how you’ll protect all the data you hold. With this idea we design your entire infrastructure.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Implementation.jpg"
    },
    {
      title:"Privacy & Security",
      description:"Database management services covering leading database systems like Microsoft SQL Server, Oracle and MySQL. Allow your developers to deliver more value by focusing on the features that matter to your customers. With this variety of database types available, we can find you the right managed database.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Privacy-Security.jpg"
    },
    {
      title:"Adoption & Change Management",
      description:"We assist in creating a user adoption and change management strategy that will ensure your program is implemented successfully and your team adapts to the transition. We help you create a customized road map and set actionable steps that guide you to an effective modern workplace.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Adoption-Change-Management.jpg"
    },
    {
      title:"Management & Monitoring",
      description:"With Emtech’s continuous management and monitoring of your environment you will be able to concentrate in the things that matter. Peak employee experience with a connected modern workplace. Our Consulting practitioners can help you design and implement your digital workplace, as well as help drive your innovation agenda through the effective implementation of your digital workplace.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Management-Monitoring.jpg"
    },
    {
      title:"Microsoft Teams",
      description:"The hub for communication and collaboration. No matter where your employees are located, they can communicate in real time with Microsoft Teams. Chat, video calling and screen sharing all boost real-time communication in the workplace and reduce the amount of clutter that goes unnoticed in email.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Microsoft-Teams.jpg"
    },
    {
      title:"Collaboration",
      description:"Teams is the go-to secure, reliable, scalable and cost-effective collaboration tool that meets the needs of today’s mobile and global workforce. From chatting to online meetings to co-authoring sharing files. Teams enables employees to communicate and collaborate anytime, anywhere.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Collaboration.jpg"
    },
    {
      title:"Teamwork is How Work Gets Done",
      description:"When you have a place to create and make decisions as a team, there’s no limit to what you can achieve. Teams brings everything together in a shared workspace where you can chat, meet, share files and work with business apps. With Teams, you can have built-in access to everything you need right in Office 365. With the latest communication technology from Microsoft you can connect the tools and services that employees use every day in a single hub. With mobile apps designed to help you work on the go, your employees can work better together.",
      image: "https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2021/01/Teamwork-is-How-Work-Gets-Done.jpg"
    },
  ],
  bottomTitle : "Empower your workforce through digital learning!!"
  }
]

export const hybridCloudTelephony = [
  {
    title:"Cisco",
    description:"Cisco BroadCloud Calling, now part of the Webex Calling portfolio, is delivered to customers through Cisco’s highly certified service provider network. Cisco Webex Calling is a complete cloud-calling and collaboration solution that can reduce operational cost, improve productivity, and increase revenue by helping you migrate mission-critical business communications to the cloud. Webex Calling is easy and intuitive to provision, manage, and set up. The Webex Control Hub provides a simple interface for IT to make changes, and a self-care portal means users can handle basic settings and preferences for themselves",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVFumBi_UdqvCID-by4pQYfdNDyPMYC_QGPDQMocMnVytvY811Nh43x3sSm4PqzKwQewo3IQCLSQpFkG81u-3S_z7APsH0p2cHNUM0ta2FQQsf7RbhCD6huDianSRssREBhqIz2V4g_SUnON-v2-ucjpneRjAo85kGPHgpk90jKEtPtR218TY-BrH9R_2p/s728-rw-e365/cisco.jpg"
  },
  {
    title:"Avaya",
    description:"Avaya Cloud Office lets you simplify the way your business communicates. Call, chat, meet, and collaborate no matter where your employees might be. It gives your employees the power to reach out and solve problems with clear, reliable calling and secure unified communications solutions all in the cloud. Avaya’s powerful features like one-touch dialing and directory integration make every call a snap. AI helps you get even more from conversations. Converse easily across touchpoints, devices, and modalities to meet customers wherever they are. With Avaya, Gain the complete freedom of a deployment (cloud, on premise, hybrid model) that fits your need.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhWA8s6NPx6XVdu0SAC01WuMZk84pzblFO8HN1xoQEeeaHykVT7EtvluA37dE0_Lrg6Y&usqp=CAU"
  },
  {
    title:"CallGear",
    description:"CallGear is an online service that shows you where your phone leads come from. It has a dashboard, where it shows where the lead came from a print ad, an online ad or another source. CallGear quickly integrates call tracking into your website by attaching a unique phone number to each ad source, including Google Ads, organic search, Yelp, Facebook, and many others. It assigns unique phone numbers to track which online or offline ads make your phone ring. CallGear ‘s SpeechAnalytics provides you instant call transcriptions within your online dashboards.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rPM6dy7Kv6Wh1zmnWlet--wWKGa1FIrz2KQLdyxfGdLLodDFUS-O8UtSe803n6lprnk&usqp=CAU"
  },
]

