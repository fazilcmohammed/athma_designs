import { FaCloud, FaHeadset, FaLaptop, FaGraduationCap } from "react-icons/fa";
import { FaServer, FaTools, FaBuilding, FaMicrochip, FaRobot, FaNetworkWired, FaLifeRing, FaMicrosoft  } from "react-icons/fa";

import logo2 from '../assets/images/brandLogos/2.png'
import logo3 from '../assets/images/brandLogos/3.png'
import logo4 from '../assets/images/brandLogos/4.png'
import logo6 from '../assets/images/brandLogos/6.png'
import logo7 from '../assets/images/brandLogos/7.png'
import logo8 from '../assets/images/brandLogos/8.svg'
import logo9 from '../assets/images/brandLogos/9.png'
import logo10 from '../assets/images/brandLogos/10.svg'
import logo11 from '../assets/images/brandLogos/11.svg'


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
      link: "/services/hybrid-cloud-solutions/"
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
      path: '/service/virtualization-solutions/'
    },
    {
      id: 2,
      title: "Premium IT AMC Support",
      description:
        "For businesses utilizing IT and cloud infrastructure, having a proactive and reliable IT AMC...",
      icon: FaTools,
      path: "/service/it-amc/"
    },
    {
      id: 3,
      title: "Cloud Managed Networking",
      description:
        "Choosing TECHPAPPA as your cloud-managed networking services provider offers a range of benefits...",
      icon: FaCloud,
      path: "/service/cloud-managed-networking/"
    },
    {
      id: 4,
      title: "Enterprise ICT",
      description:
        "TECHPAPPA, one among the top IT companies in UAE, follows a comprehensive approach to creating and managing enterprise ICT...",
      icon: FaBuilding,
      path: "/service/ict-solutions/"
    },
    {
      id: 5,
      title: "Artificial Intelligence",
      description:
        "We provide innovative AI solutions to help businesses become agile and smart...",
      icon: FaRobot,
      path: "/service/artificial-intelligence/"
    },
    {
      id: 6,
      title: "Internet of Things (IoT)",
      description:
        "The Internet of Things (IoT) has woven itself into almost every aspect of daily life...",
      icon: FaMicrochip,
      path: "/service/iot-service/"
    },
    {
      id: 7,
      title: "Cloud Operations Center",
      description:
        "TECHPAPPA’s Cloud Operation Center (COC) offers a dedicated, streamlined solution for businesses...",
      icon: FaCloud,
      path: "/service/cloud-operations-center/"
    },
    {
      id: 8,
      title: "Azure Managed Service",
      description:
        "It’s an incredibly competitive environment for enterprises, and they need every opportunity...",
      icon: FaTools,
      path: "/service/azure-management-service/"
    },
    {
      id: 9,
      title: "Managed IT Services in UAE",
      description:
        "Our Managed IT Service is based on modern digital solutions and services...",
      icon: FaBuilding,
      path: "/service/managed-it-service/"
    },
    {
      id: 10,
      title: "IT Infrastructure",
      description:
        "What is IT Infrastructure? IT Infrastructure is the backbone of any organization...",
      icon: FaNetworkWired,
      path: "/service/it-infrastructure/"
    },
    {
      id: 11,
      title: "24/7 Critical Support",
      description:
        "At TECHPAPPA, we provide exceptional IT Support Services that help businesses maintain seamless operations 24/7...",
      icon: FaLifeRing,
      path: "/service/it-support/"
    },
    {
      id: 12,
      title: "Microsoft 365 Suite",
      description:
        "As your trusted Microsoft 365 provider, leverage the possibilities and opportunities of...",
      icon: FaMicrosoft,
      path: "/service/microsoft-365-suite/"
    },
  ];
  

  export const companyLogos = [
    logo2,
    logo3,
    logo4,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11
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

import hcs1 from "../assets/images/hcsBenefits.webp"
import hcs2 from "../assets/images/hcsComprehensivesupport.jpg"
import hcs3 from "../assets/images/hcsFinancecontrol.jpg"
import hcs4 from "../assets/images/hcsManagedBilling.jpg"

export const hybridCloudServices = [
  {
  heroTitle : "Hybrid Cloud Solutions",
  contentSubTitle : " Microsoft Azure",
  contentTitle : "Modernize your IT with Microsoft Azure",
  content : "Tecpappa is a Microsoft Gold Cloud Platform Partner, recognized as a leading Azure provider with deep knowledge of cloud strategy, platform deployment, and ongoing management. Our provision includes migration assessments, deployment plans, and cloud optimization, ensuring the best performance from your infrastructure. We keep ahead of the latest Azure developments from Microsoft so that our customers can adopt best practices, enable innovation, and future-proof their businesses. TECHPAPPA offers tailored Azure solutions to align with your unique business goals, driving productivity and efficiency. Our team of certified experts provides end-to-end support, from planning to deployment, ensuring a smooth and secure cloud transition. TECHPAPPA’s managed Azure services allow your business to scale seamlessly while controlling costs and enhancing agility. Partnering with TECHPAPPA means reliable, scalable, and secure cloud infrastructure that empowers your business to thrive.",
  contentImg : "https://imageio.forbes.com/specials-images/imageserve/65adf497bd5d0347e5af3b8d/Data-is-a-strategic-asset-/960x0.jpg?format=jpg&width=960",
  serviceSubTitle : "Azure Managed Service",
  serviceTitle : "What Microsoft Azure services do we provide?",
  serviceContent : "Cloud adoption services: Consultancy, planning, and deployment services to ensure a smooth transition from on-premise IT systems to Microsoft Azure; Hybrid cloud solutions: Seamless integration of one or more Azure services into existing infrastructure; Fully managed Cloud services: Comprehensive management for organizations adopting the cloud without internal IT support.",
  services : [
    {
      title:"Delivered Business Benefits",
      description:"Our Cloud management solution services for Azure delivers a complete solution, providing you with one partner for all of your Azure needs. Our experts cater to all your Azure-related requirements by leveraging three core features that offer peace of mind and ensure your cloud investment will be optimized, managed and protected.",
      image: hcs1
    },
    {
      title:"Comprehensive Support",
      description:"Our technical support professionals are available around the clock to resolve issues quickly and effectively. No matter where you are in your journey with Azure, access to export- level assistance is critical to a successful cloud transformation. TECHPAPPA is your resource for azure assistance through incident support, spend analysis and advisory services. Our Managed Services provide comprehensive support coverage for all your cloud requirements.",
      image: hcs2
    },
    {
      title:"Financial Control & Governance",
      description:"If you want to be able to deliver on the promise that moving to the cloud will save your organization money, you need to have a good governance in place first. Gain control of your Azure usage with our industry expert cloud management services. Our advisory services, along with technical support, help you govern and maintain an optimized Azure environment to have better control and optimization on cloud spend.",
      image: hcs3
    },
    {
      title:"Managed Billing",
      description:"The first step in maximizing your experience within Cost Management is to investigate and decide which Azure offer is best for you. Stop wasting money paying for more resources than you need. An optimized cloud gives you the exact resources you need. Our cloud optimization features are powered by machine learning and designed around your actual usage. Optimize costs today and take actions toward ongoing efficiency and lower unit costs over time.",
      image: hcs4
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
      "Partnering with TECHPAPPA for 24/7 cloud administration provides high-quality, cost-effective IT support around the clock. Our dedicated system ensures availability 24/7, 365 days a year, offering reliable support whenever you need it.",
  },
  {
    title: "Azure Purchase",
    description:
      "Choose the flexibility of pay-as-you-go Azure purchases directly from TECHPAPPA, with bundled services and end-to-end support. Our expertise ensures a seamless experience, from subscription to ongoing support.",
  },
  {
    title: "Cloud Solutions Provider",
    description:
      "As a Microsoft Cloud Solutions Provider, TECHPAPPA provides Azure subscription support and exclusive access to our Cloud Management Portal. Our technical knowledge, commitment to customer success, and high standards ensure a dependable Azure experience throughout your cloud journey.",
  },
];

import managed1 from "../assets/images/managedCloudservice.webp"
import managed2 from "../assets/images/microsoft-azure-services.jpg"
import managed3 from "../assets/images/Microsoft-365-1.png"
import managed4 from "../assets/images/daas.jpg"
import managed6 from "../assets/images/managedItsecurity.jpg"
import managed7 from "../assets/images/managedNetwork.png"
import managed8 from "../assets/images/managedserver.jpg"
import managed9 from "../assets/images/managedDatabase.jpg"
import managed10 from "../assets/images/managedStorage.jpg"
import managed11 from "../assets/images/managedDesktop.jpeg"

export const managedItService = [
  {
  heroTitle : "Managed IT Service in UAE",
  contentSubTitle : " Managed IT Service",
  contentTitle : "A catalyst in business transformation",
  content : "Our Managed IT Service is based on modern digital solutions and services that use innovative technology solutions to solve business problems, delivering exceptional value. Specializing in digital transformation and cloud-based technologies, we imagine, build, and empower IT-enabled business solutions. From essential reactive monitoring to overall  IT infrastructure management, TECHPAPPA’s managed services ensure that all our customers delegate their routine maintenance tasks to us whilst investing their capital and resources on other mission-critical tasks requiring domain expertise.",
  contentImg : "https://imageio.forbes.com/specials-images/imageserve/65adf497bd5d0347e5af3b8d/Data-is-a-strategic-asset-/960x0.jpg?format=jpg&width=960",
  serviceSubTitle : "Managed IT Service",
  serviceTitle : "Power your business with TECHPAPPA's Managed IT Service in UAE",
  serviceContent : "",
  services : [
    {
      title:"Managed Cloud Services",
      description:"Work with us to deploy the most suitable cloud platform for your data, balancing high performance and reliable access with every security policy, regulatory requirement, and privacy obligation . As the industry’s leading next gen cloud service provider, TECHPAPPA serves as an experienced cloud partner for organizations around the Middle East, while working closely with customers to understand unique cloud requirements and challenges. As business needs change, TECHPAPPA capabilities grow and evolve to help guide and support customers throughout the entire cloud lifecycle.",
      image: managed1
    },
    {
      title:"Microsoft Azure Services",
      description:"The flexibility, reliability, and scale of an enterprise-ready cloud, coupled with the tailoring, transparency, and proactive management of our experienced team. TECHPAPPA offers extend in-house talent with our remote dedicated team of engineering professionals, architects, and account managers with proven experience in creating architecture, as well as building complete solutions, deploying to production, and performing operations management",
      image: managed2
    },
    {
      title:"Managed Microsoft 365 Services",
      description:"Support your employees' productivity and collaboration while keeping your data safe, through the industry-leading platform delivered by an experienced Microsoft Partner.TECHPAPPA’s Managed Microsoft 365 service helps you get the most out of your Microsoft 365 investment, with a choice of enterprise-class support and service management packages to fulfil a range of support level and budget requirements",
      image: managed3
    },
    {
      title:"Desktop as a Service",
      description:"Provide your users with full and secure VDI access to their data, applications and the company network anywhere and at any time. Quickly deployed with multiple connectivity options and scales to meet the changing size of your business or need for remote working. With Windows Virtual Desktop, you can deploy and scale your Windows desktops and apps on Azure in minutes and get built-in security and compliance features.",
      image: managed4
    },
    {
      title:"Managed IT Security",
      description:"Round the clock monitoring and protection from intrusions, malware along with regular security audits. 24 x 7 IT infrastructure monitoring and security. Through our effective and reliable 24x7 network monitoring, we are able to gain critical insight into your technology platform integrity and can more easily provide you with cost-effective managed support.",
      image: managed6
    },
    {
      title:"Managed Server",
      description:"Tech-Assured’s Managed Server Services ensure smooth and efficient servers across any hardware type and deployment. Rapid growth in business may require a more sophisticated server solution, and of course, it needs to be cost-effective and compatible with storage offerings. With TECHPAPPA, you are worry free. TECHPAPPA gives you a best in server solutions.",
      image: managed7
    },
    {
      title:"Managed Network",
      description:"Our managed network services are great to drive cost-effectiveness, reliability, and efficiency of enterprise networks. Report, manage and administer, WAN, LAN and Wireless infrastructure with proven Service Level Agreements. TECHPAPPA is responsible for delivering great managed network services and experiences to users.",
      image: managed8
    },
    {
      title:"Managed Database",
      description:"Database management services covering leading database systems like Microsoft SQL Server, Oracle and MySQL. Allow your developers to deliver more value by focusing on the features that matter to your customers. With this variety of database types available, we can find you the right managed database.",
      image: managed9
    },
    {
      title:"Managed Storage & Backup",
      description:"Round the clock data backups and storage ensuring full compliance. TECHPAPPA gives importance to the kind of organization and their highly sensitive data measures. With an all-round safety net for your data, we shield your mission-critical IT resources with our online application backup and restore facilities, besides enhancing performance and managing business risk.",
      image: managed10
    },
    {
      title:"Managed Desktop & Mobile",
      description:"Enjoy a 360-degree view of your IT assets and security with remote support for desktop and mobile setups. We keep business devices healthy with fresh installs of Desktop & Mobile devices. We have expertise to help you manage all of your company’s desktop and mobile hardware in an efficient and cost-effective manner",
      image: managed11
    },
  ],
  bottomTitle : "Move from technology-constrained to service-enabled managed IT!"
  }
]

import dw1 from "../assets/images/dwDesktop.jpg"
import dw2 from "../assets/images/dwSecurity.jpg"
import dw3 from "../assets/images/dwScaleup.jpg"
import dw4 from "../assets/images/dwCostcutting.jpeg"
import dw5 from "../assets/images/dwWorkshop.jpg"
import dw6 from "../assets/images/dwMigration.webp"
import dw7 from "../assets/images/dwImplementation.jpg"
import dw8 from "../assets/images/dwPrivacy.jpg"
import dw9 from "../assets/images/dwAdoption.webp"
import dw10 from "../assets/images/dwManagement.webp"
import dw11 from "../assets/images/dwTeams.png"
import dw12 from "../assets/images/dwCollaboration.jpeg"
import dw13 from "../assets/images/dwTeamwork.jpg"
export const digitalWorkplace = [
  {
  heroTitle : "The digital workplace - Think, share, do",
  contentSubTitle : "",
  contentTitle : "A catalyst in business transformation",
  content : "Our Managed IT Service is based on modern digital solutions and services that use innovative technology solutions to solve business problems, delivering exceptional value. Specializing in digital transformation and cloud-based technologies, we imagine, build, and empower IT-enabled business solutions. From essential reactive monitoring to overall  IT infrastructure management, TECHPAPPA’s managed services ensure that all our customers delegate their routine maintenance tasks to us whilst investing their capital and resources on other mission-critical tasks requiring domain expertise.",
  contentImg : "https://imageio.forbes.com/specials-images/imageserve/65adf497bd5d0347e5af3b8d/Data-is-a-strategic-asset-/960x0.jpg?format=jpg&width=960",
  serviceSubTitle : "Digital workplace solutions",
  serviceTitle : "Empower your users with the building blocks of Digital Workplace",
  serviceContent : "",
  services : [
    {
      title:"Deliver Windows 10 desktops on any device, anywhere",
      description:"Provide employees the best virtualized experience with the only solution fully optimized for Windows 10 and Office 365. Regardless of your device type bring-your-own-device (BYOD) and remote connect to your enterprise experience with Windows Virtual Desktop. ITs can pick whatever Azure VM will meet their teams needs and leverage the Windows 10 multi-session advantage that only Azure offers.",
      image: dw1
    },
    {
      title:"Built-in intelligent security",
      description:"Keep your applications and data secure and compliant with security capabilities that can proactively detect threats and take remedial action. Securely store all your employee and company data in Azure instead of local desktops. Take the advantage of Azure security offering such as Azure Firewall, Azure Security Center, Azure Sentinel and Microsoft Defender ATP for end-to-end security from the endpoint to the applications.",
      image: dw2
    },
    {
      title:"Deploy and scale in minutes",
      description:"Simplify deployment and management of your infrastructure and quickly scale based on your business needs. The Azure portal is your management hub for Windows Virtual Desktop. Configure network, deploy desktop, and enable security with a few clicks. Setup automated scaling with Logic Apps and manage your images efficiently with Azure image gallery.",
      image: dw3
    },
    {
      title:"Reduce cost using existing licenses",
      description:"Use existing licenses to save cost with a modern cloud-based virtual desktop infrastructure (VDI) and pay only for what you use. Reduce infrastructure costs by right sizing VMs and shutting down VMs in use. Increase utilization of VMs with Windows 10 multi-session. Reduce management overhead by moving all your VDI into a managed service in the cloud.",
      image: dw4
    },
    {
      title:"Assessments & Workshops",
      description:"Discover ways to work better together and create a modern workplace effectively. Confidently make your next move. An IT envisioning session, assessment, workshop, or JumpStart with our experienced team will give you deep understanding and a clear path forward. TECHPAPPA evaluates your current collaboration and communication tools and directs you on how to transform teamwork across your organization.",
      image: dw5
    },
    {
      title:"Migration Services",
      description:"We support migrations from on-premises to M365 as well as SharePoint Classic to SharePoint Modern. We help you modernize your employee’s remote work experience, and we help you create a plan to optimize your cost savings. We make the transition easy for you by following best practices in implementation, and ensuring your team is informed every step of the way, including planning, setting up, migrating, and managing.",
      image: dw6
    },
    {
      title:"Implementation",
      description:"Establish a secure modern digital workplace. With a variety of security and privacy capabilities, TECHPAPPA can help you secure your data, establish company governance, and help you comply with specific standards. When implementing any new system across your organization, TECHPAPPA identifies how you’ll protect all the data you hold. With this idea we design your entire infrastructure.",
      image: dw7
    },
    {
      title:"Privacy & Security",
      description:"Database management services covering leading database systems like Microsoft SQL Server, Oracle and MySQL. Allow your developers to deliver more value by focusing on the features that matter to your customers. With this variety of database types available, we can find you the right managed database.",
      image: dw8
    },
    {
      title:"Adoption & Change Management",
      description:"We assist in creating a user adoption and change management strategy that will ensure your program is implemented successfully and your team adapts to the transition. We help you create a customized road map and set actionable steps that guide you to an effective modern workplace.",
      image: dw9
    },
    {
      title:"Management & Monitoring",
      description:"With TECHPAPPA’s continuous management and monitoring of your environment you will be able to concentrate in the things that matter. Peak employee experience with a connected modern workplace. Our Consulting practitioners can help you design and implement your digital workplace, as well as help drive your innovation agenda through the effective implementation of your digital workplace.",
      image: dw10
    },
    {
      title:"Microsoft Teams",
      description:"The hub for communication and collaboration. No matter where your employees are located, they can communicate in real time with Microsoft Teams. Chat, video calling and screen sharing all boost real-time communication in the workplace and reduce the amount of clutter that goes unnoticed in email.",
      image: dw11
    },
    {
      title:"Collaboration",
      description:"Teams is the go-to secure, reliable, scalable and cost-effective collaboration tool that meets the needs of today’s mobile and global workforce. From chatting to online meetings to co-authoring sharing files. Teams enables employees to communicate and collaborate anytime, anywhere.",
      image: dw12
    },
    {
      title:"Teamwork is How Work Gets Done",
      description:"When you have a place to create and make decisions as a team, there’s no limit to what you can achieve. Teams brings everything together in a shared workspace where you can chat, meet, share files and work with business apps. With Teams, you can have built-in access to everything you need right in Office 365. With the latest communication technology from Microsoft you can connect the tools and services that employees use every day in a single hub. With mobile apps designed to help you work on the go, your employees can work better together.",
      image: dw13
    },
  ],
  bottomTitle : "Experience the power of a truly digital workplace with us!"
  }
]

import dl1 from "../assets/images/dlElearningdevelopment.jpeg"
import dl2 from "../assets/images/dlMicroLearning.jpg"
import dl3 from "../assets/images/dlSimulation.jpg"
import dl4 from "../assets/images/dlVideolearning.jpeg"
import dl5 from "../assets/images/dlGamebasedLearning.jpg"
import dl6 from "../assets/images/dlEbook.jpg"
import dl7 from "../assets/images/dlImmersiveLearning.webp"
import dl8 from "../assets/images/dlLMS.jpg"
import dl9 from "../assets/images/dlMobileLearning.jpeg"
import dl10 from "../assets/images/dlBlendedLearning.jpg"
import dl11 from "../assets/images/dlChange Management.jpeg"
import dl12 from "../assets/images/dlConsultancy.webp"
export const digitalLearning = [
  {
  heroTitle : "DIGITAL LEARNING SOLUTIONS",
  contentSubTitle : "",
  contentTitle : "Digital Learning Solutions",
  content : "Our Managed IT Service is based on modern digital solutions and services that use innovative technology solutions to solve business problems, delivering exceptional value. Specializing in digital transformation and cloud-based technologies, we imagine, build, and empower IT-enabled business solutions. From essential reactive monitoring to overall  IT infrastructure management, TECHPAPPA’s managed services ensure that all our customers delegate their routine maintenance tasks to us whilst investing their capital and resources on other mission-critical tasks requiring domain expertise.",
  contentImg : "https://imageio.forbes.com/specials-images/imageserve/65adf497bd5d0347e5af3b8d/Data-is-a-strategic-asset-/960x0.jpg?format=jpg&width=960",
  serviceSubTitle : "Learning technology services",
  serviceTitle : "Adapt Digital Learning To Empower Your Employees",
  serviceContent : "",
  services : [
    {
      title:"Custom eLearning Development",
      description:"Custom-made eLearning courses to meet your organization’s training needs on compliance, business processes, soft skills topics etc. We design highly interactive eLearning courses using high-end graphics and animations to enable effective learning. Our development team consisting of instructional designers, eLearning developers and media developers with many years of eLearning development experience always ensures high quality eLearning course delivery.",
      image: dl1
    },
    {
      title:"Micro Learning",
      description:"Micro eLearning course delivers short bursts of content for learners to study at their convenience and apply the knowledge immediately. Researches have shown that we learn more (and retain it better) when we study in short focused bursts than when we are forced to sit through hour long classes. We help your organization to adapt digital learning through micro learning modules.",
      image: dl2
    },
    {
      title:"Simulation based software training",
      description:"Business software learning using simulation-based courses. A simulation-based learning offers a safe, cost effective and realistic experience for organizations to help their employees learn vital skills needed to use business software solutions.",
      image: dl3
    },
    {
      title:"Learning Videos",
      description:"Video learning merges audio and visual cues and context in a way that makes it exceptionally good as a teaching method. According to researches, employees are 75 percent more likely to watch a video than to read documents, emails or web articles.",
      image: dl4
    },
    {
      title:"Game based learning",
      description:"Game based learning for more effective learning. When you participate in mental activity in a gamified way , the body relaxes and alleviates stress and improves learning. Through gamification, a similar effect can be achieved in eLearning by challenging learners or motivating them to achieve a learning objective.",
      image: dl5
    },
    {
      title:"eBook",
      description:"Transform your documents into interactive eBooks for engaging reading experience with knowledge check, notes, tracking, reporting etc. The documents can be made available for reference and reading through any device, transforming traditional reading experience into digital form.",
      image: dl6
    },
    {
      title:"Immersive Learning",
      description:"Learning through Virtual Reality to enable experiential learning involving different senses. Immersive learning provides realistic training simulations using innovative technologies such as 3D and 360-degree views.",
      image: dl7
    },
    {
      title:"Learning Management Systems",
      description:"Use Learning Management System for administration, documentation, tracking, reporting, learning analytics, automation, and delivery of eLearning courses, or learning and development programs.",
      image: dl8
    },
    {
      title:"Mobile Learning",
      description:"Make learning on the go possible by making contents available through mobile devices. Mobile learning is also known as mLearning and it is a new way to get access to a variety of learning contents available online using mobile devices and make learning on the go possible.",
      image: dl9
    },
    {
      title:"Blended Learning Solutions",
      description:"Combining classroom-based approach with online learning. Blended learning enables organizations to blend the best of the classroom, virtual and online learning for optimum learning outcomes.",
      image: dl10
    },
    {
      title:"Change Management",
      description:"We help organization's digital transformation journey by offering change management services including end user training on technology to adapt change. Transformations are difficult undertakings and come with a high likelihood of failure. But with a focused plan and right change management approach can help achieve the desired success.",
      image: dl11
    },
    {
      title:"Solution Consultancy",
      description:"We offer organization with strategy, platforms & tools to help you accelerate your digital learning transformation plans by providing consultancy services to achieve your goals faster.",
      image: dl12
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


export const aboutUs = [
  {
    heroTitle : "About Us",
    contentSubTitle : "",
    contentTitle : "Digital Learning Solutions",
    content : "Serving your technology needs for more than three decades in the U.A.E",
  }
]

export const aboutSolutions = [
  {
    title: "Infrastructure Solutions",
    description: "We help our clients design, implement, and manage best-in-class, highly secure, and scalable enterprise IT infrastructure solutions.",
    image: "https://cdn-lloaj.nitrocdn.com/ZZYluWSojHiVGvdfeOPfFCBERbKVDvPk/assets/images/optimized/rev-886f8dd/i0.wp.com/pegasustechnologies.com/wp-content/uploads/2022/02/3bf9e20f0ffcb5955e0b814d75b96c67.content.jpg",
    path: "/it-infrastructure"
  },
  {
    title: "Cloud Solutions",
    description: "Take the full advantage of cloud innovation and accelerate your business by relying on effective hybrid and multi cloud approach from us.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqDeReMyKOCEAXLbTnCMy5eLBHQmO59RPoA&s",
    path: "/cloud-service"
  },
  {
    title: "Cyber Security Solutions",
    description: "It is our mission to ensure Data security in many different forms it takes. We provide cyber security solutions to protect digital assets of your organization.",
    image: "https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg",
    path: "/cyber-security"
  },
  {
    title: "Managed IT Service",
    description: "Achieve highest level of efficiency of your business with all levels of IT Support to cover all your technology needs.",
    image: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg",
    path: "/it-managed-service"
  },
  {
    title: "Digital Solutions",
    description: "Creating digital solutions to solve conventional business challenges by using latest in Web, AI, and Blockchain technologies.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdWEPaAKsKmUw8bMSmFurZbf2vSWZh9NGzw&s",
    path: "/digital-solutions"
  },
]



export const digitalSolutions = [
  {
  heroTitle : "Digital Solutions",
  contentSubTitle : " Digital Solutions. Digital Results",
  contentTitle : "The Complete Digital Transformation Experience",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://imageio.forbes.com/specials-images/imageserve/65adf497bd5d0347e5af3b8d/Data-is-a-strategic-asset-/960x0.jpg?format=jpg&width=960",
  serviceSubTitle : "Digital Solutions. Digital Results",
  serviceTitle : "A Complete Set Of Digital Services To Help You Ride The Digital Wave",
  serviceContent : "",
  services : [
    {
      title:"Digital Commerce Ecosystem",
      description:"Make your business future-ready on a highly scalable Enterprise eCommerce Platform. oOrjit is a highly flexible & customizable customer-merchant engagement platform adaptable to any business model.",
      image: "https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
    },
    {
      title:"Automotive Digital Ecosystem",
      description:"An innovative digital ecosystem for automotive. Digital showroom, Parts digitalization, Dealership Management, 360 Customer interaction platform, aftermarket and services.",
      image: "https://media.istockphoto.com/id/1259149536/photo/driverless-car-interior-with-futuristic-dashboard-for-autonomous-control-system.jpg?s=612x612&w=0&k=20&c=t6C2-1zTJw1s0girSu6h9lPIeQ7NF_PatZYGDqoQRPs="
    },
    {
      title:"Digital Solution for Driving School",
      description:"Fully automate your driving school operations and reclaim time to focus on running your business. We help driving schools to simplify and automate the driving school management process with complete software solutions for your driving school.",
      image: "https://www.mishainfotech.com/images/drive.jpg"
    },
    {
      title:"Digital Learning Solutions",
      description:"We provide innovative learning technology solutions and eLearning content development services to support the organization’s digital transformation of training. We develop eLearning courses that learners will enjoy learning from, helping to meet the learning objective. View the complete service and solutions details to learn about our digital learning solutions.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj6q26edHKoPFPUoJvX_V8-KpqZnIDx5d30A&s"
    },
    {
      title:"Digital Collaboration Solutions",
      description:"The modern experience in Microsoft SharePoint is designed to be compelling, flexible, and more performant. TECHPAPPA specializes in helping you develop and implement modern SharePoint experience and digital workforce collaboration.",
      image: "https://blog.mindmanager.com/wp-content/uploads/2022/03/shutterstock_1836258856.jpg"
    },

  ],
  bottomTitle : "Get The Transformational Technologies And Expertise To Guide Your Organization Through Digital Business Changes"
  }
]

export const cloudServices = [
  {
  heroTitle : "Cloud Service",
  contentSubTitle : " go Cloud",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://imageio.forbes.com/specials-images/imageserve/65adf497bd5d0347e5af3b8d/Data-is-a-strategic-asset-/960x0.jpg?format=jpg&width=960",
  serviceSubTitle : "Cloud Solutions for You",
  serviceTitle : "More Efficiency, Innovation, And Scalability.",
  serviceContent : "",
  services : [
    {
      title:"Azure Design & Deployment Services",
      description:"Consult, Design, Implement and Optimize cloud solutions for enterprises. Working closely with Microsoft we help organizations with seamless cloud adaption and seamless migration services.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJ4AUyJmzRlg14IYzIx8-XAb3zr0lCIFpTg&s"
    },
    {
      title:"Optimize And Manage Cloud Spend",
      description:"Assess maturity and efficiency to manage cloud costs with financial accountability, budgets, and forecasts through a unified and seamless experience. Automatic recommendations for cost optimization opportunities.",
      image: "https://www.parallels.com/blogs/ras/app/uploads/2019/08/multi-cloud-management.jpg"
    },
    {
      title:"Configuration & Operations Management",
      description:"Efficiently govern cloud operations with improved productivity and assured repeatability through a rule-based orchestration and seamless experience. Integrated enterprise workflows for efficient cloud operations.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYA_gsUzmWYurFIWsjYdifOtxkEgX4uvMMyA&s"
    },
    {
      title:"Security & Compliance",
      description:"Proactively govern security operations autonomously. Streamline operations with real-time, unified visibility into security threats, attacks, and vulnerability data, and enable remediation for assured security.",
      image: "https://bridgepointconsulting.com/wp-content/uploads/2023/01/it-security-compliance-consultants-skills-job-duties-hiring-benefits.jpg"
    },
    {
      title:"Continuous Governance",
      description:"Actualize cloud governance best practices for cloud operations, security, compliance, access, and resource by implementing a well-architected framework. Achieve integrated and continuous governance across cost, security and operations.",
      image: "https://www.cio.com/wp-content/uploads/2025/01/3626614-0-65645800-1736868150-shutterstock_2058800093_Summit-Art-Creations.jpg?quality=50&strip=all&w=1024"
    },

  ],
  bottomTitle : "Delivering Innovative Cloud Solutions With World-Class Expertise",
  }
]

export const itInfrastructure = [
  {
  heroTitle : "IT Infrastructure Services",
  contentSubTitle : " go Cloud",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "Free Active Consultation",
  serviceTitle : "Tailor-Made Solutions To Suit Your Business Needs",
  serviceContent : "",
  services : [
    {
      title:"Campus Wi-Fi Solutions",
      description:"Get up to speed with our WiFi solutions that work for your community’s education, residential, and business needs. We offer a range of WiFi solutions that can be tailored to meet your specific needs. From high-speed internet access to corporate networks, we have the right solution for every application.",
      image: "https://www.sentia.ca/Portals/0/EasyDNNNews/222/600600p1133EDNmainimg-Wireless-Network1.png"
    },
    {
      title:"CCTV Solutions",
      description:"Our expertise covers security planning, CCTV Installations, and maintenance in Dubai. We help in formulating solutions for an effective surveillance system that can be customized to your needs. We provide a complete solution that includes equipment selection, installation, maintenance, and training.",
      image: "https://takyon.co.in/uploads/blog/why-cctv-security-systems-are-critical-for-today-businesses.jpeg"
    },
    {
      title:"Switching Solutions",
      description:"We provide a comprehensive portfolio of switching solutions for Enterprise Networks, data centers, and smaller businesses. These solutions are optimized for a wide range of industries, including service providers, financial services, and the public sector.",
      image: "https://edspl.net/uploads/netswitch_1.webp"
    },
    {
      title:"IP Telephony Solution",
      description:"IP Telephone Systems are a great way to improve the quality of your business communication. TECHPAPPA is an IP telephony solution provider in UAE, we offer a wide range of solutions for small to large businesses. Our experts assist you to choose the best possible solution for your business needs.",
      image: "https://www.researchdive.com/blogImages/R2PZbHjor4.jpeg"
    },
    {
      title:"Next Generation Firewall",
      description:"Our services are designed to keep your network safe, secure, and reliable. We provide the best security solutions for small, mid-sized and large enterprise businesses to protect their network infrastructure from sophisticated cyber threats.",
      image: "https://fedscoop.com/wp-content/uploads/sites/5/2023/06/SNG-Cisco_Header_v01-3.jpg"
    },
    {
      title:"Server Solutions",
      description:"With years of experience in providing server solutions, we have gained extensive knowledge of various applications used by businesses today. We offer both physical and virtual servers to our clients with various configurations to choose from.",
      image: "https://www.cybershoppe.in/wp-content/uploads/2020/08/servers.jpg"
    },
  ],
  bottomTitle : "Build A Strong Backbone Infrastructure To Power Your Next Generation Digital Services",
  }
]

export const cyberSecurity = [
  {
  heroTitle : "Cyber Security",
  contentSubTitle : " go Cloud",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "Protecting Assets, Revitalizing Business",
  serviceTitle : "Enterprise Security And Advanced Threat Protection Solutions",
  serviceContent : "",
  services : [
    {
      title:"EDR, MDR & XDR Solutions",
      description:"Central to every security strategy is a detection and response capability which catches threats that have circumvented traditional security measures. EDR , MDR, XDR are three main detection and response solutions",
      image: "https://media.licdn.com/dms/image/D5612AQGX6glFlEArJg/article-cover_image-shrink_600_2000/0/1681234403630?e=2147483647&v=beta&t=gq0NvcEzPoNO-p7cbbaFg0gABEkeq8PCWvGujAB7KH4"
    },
    {
      title:"Network Security & WAF Solutions",
      description:"Architects to protect your network from the latest threats while accelerating your important SaaS, SD-WAN, and cloud application traffic. Consulting, designing, implementation and supporting enterprise network security and WAF solutions.",
      image: "https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/waf.png"
    },
    {
      title:"SIEM & SOC Solutions",
      description:"Multi-tenant cloud architecture fueled with integrated threat intelligence, a built-in app store with purpose-built threat detection apps. Proactively monitor your endpoint, network, and the cloud using our SOC As A Service.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqUZXkULGkiKfjuvRRneM40rCvxIPmDQ9AA&s"
    },
    {
      title:"Messaging Security, Dark web solutions",
      description:"Adapt the right technology solutions to protect your organization’s reputation in email fraud attacks by authenticating all your senders, without blocking legitimate emails. Analyze email with multi-layered content analysis, reputation analysis, and sandboxing within a single email security solution.",
      image: "https://www.happiestminds.com/wp-content/uploads/2024/07/What-is-Dark-Web.jpg"
    },
    {
      title:"PAM, MFA & ZTNA Solutions",
      description:"Prevent unauthorized access to applications and network resources. Monitor and log the activity. Enable Multi-Factor-Authentication to validate the access in realtime. ZTNA provides secure remote access to an organization’s applications, data, and services based on clearly defined access control policies.",
      image: "https://emudhra.com/hubfs/Imported_Blog_Media/EbIZzOaRRA2RnivK3X2C-1.png"
    },
    
  ],
  bottomTitle : "Strengthen Your Organization Cyber Defense Using Our Managed SOC Services",
  }
]

export const managedService = [
  {
  heroTitle : "Managed IT service in UAE",
  contentSubTitle : " go Cloud",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "MANAGED IT SERVICE",
  serviceTitle : "Power your business with TECHPAPPA’s Managed IT Service in UAE",
  serviceContent : "",
  services : [
    {
      title:"Managed IT Infrastructure",
      description:"Our Managed Infrastructure Services gives you comprehensive management and monitoring of your on-premises, cloud IT infrastructure to enhance operational agility, reduce risk and optimize cloud and technology infrastructure investments.",
      image: "https://blog.vectorusa.com/hubfs/GettyImages-1214111410.jpg"
    },
    {
      title:"SOC as a Service",
      description:"Take your security detection and response best practices to the cloud. Visualize and understand the malicious activity. Analyze, prioritize and respond to threats in rapid time. Safeguard your company data, people, and processes.",
      image: "https://contentsecurity.com.au/wp-content/uploads/2024/01/CS_Web_banners_Premium_SOC_Service-scaled.jpg"
    },
    {
      title:"Managed Cloud Service",
      description:"With our Managed Service you achieve continuous and autonomous cloud governance, and continuous cloud compliance, run highly available and lean operations, early identify and mitigate security threats and optimize cloud costs.",
      image: "https://www.msrcosmos.com/wp-content/uploads/2023/07/Cloud-Managed-Services.webp"
    },
    {
      title:"Managed Email Security",
      description:"Email threats evolve every day. Our team ensures that your defensive systems stay ahead of attackers. With our Managed Email Security services, you get regular health checks and gain peace of mind knowing that you’re protected with the latest updates.",
      image: "https://azureity.com/wp-content/uploads/2023/05/secure-email-company.jpg"
    },
    {
      title:"Managed Services Network & Security",
      description:"Reduce downtime and ensure maximum uptime with our Managed Network & Security service. We provide support in configuration management, security policy creation and rollout etc. Our online to onsite support can help you reduce the outages.",
      image: "https://suntechnologies.com/wp-content/uploads/2021/03/Network-security-support.jpg"
    },
    
  ],
  bottomTitle : "Strengthen Your Organization Cyber Defense Using Our Managed SOC Services",
  }
]

import vmImg1 from "../assets/images/vmimg1.jpeg"
import vmImg2 from "../assets/images/hyperV.png"

export const virtualizationSolution = [
  {
  heroTitle : "Virtualization Solutions",
  contentSubTitle : " go Cloud",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "Virtualization Solutions",
  serviceTitle : "Virtualization Offers Strong Business Benefits",
  serviceContent : "Many IT organizations deploy servers that are only running at a fraction of their capacity, often because they are dedicating their physical server to a specific application. This is usually an inefficient mechanism because there is an excess capacity that is not being consumed, which leads to higher operating costs. Our Virtualization solutions can benefit your organization in several ways, with a single server, you are able to create several virtual machines. Virtualization enables more efficient utilization of computer hardware and enables a greater return on an organization’s hardware investment. Virtualization uses software to create an abstraction layer over the physical hardware. In doing so, it creates a virtual compute system, known as virtual machines (VMs). This allows organizations to run multiple virtual computers, operating systems, and applications on a single physical server. Simply put, it is a more efficient use of the physical computer hardware; this, in turn, provides a greater return on a company’s investment.",
  services : [
    {
      title:"VMware Virtualization",
      description:"VMware virtualization enables efficient resource use by running multiple virtual machines (VMs) on one physical server, connected via a hypervisor. Benefits include improved flexibility, cost savings by reducing physical hardware, streamlined management with VMware tools, and increased reliability through features like live migration and backups—making it a robust, adaptable IT solution.",
      image: vmImg1
    },
    {
      title:"Microsoft Hyper-V Hypervisors",
      description:"A hypervisor is a lightweight software layer that allocates a host computer’s resources to guest operating systems. Microsoft’s Hyper-V enables hardware virtualization, allowing each virtual machine to run on virtual hardware, including virtual hard drives, switches, and other devices. This allows multiple operating systems to run on one server or client computer.",
      image: vmImg2
    },
    
  ],
  bottomTitle : "Virtualize your IT Infrastructure to reduce downtime and enhance resiliency!",
  }
]

export const amcSupport = [
  {
  heroTitle : "Premium IT AMC Support",
  contentSubTitle : " go Cloud",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "Premium AMC Support",
  serviceTitle : "AMC Onboarding with TECHPAPPA for the First Time",
  serviceContent : "When a client takes an AMC with us, we support them comprehensively throughout the years offering them with diverse types of help. After signing AMC with TECHPAPPA first time, we conduct a detailed study of customer complete IT infrastructure to fix all lingering issues once for all, apparently, we also recommend best practices. Preventive maintenance will be carried out every quarter and a detailed report will be shared with the customer regarding the details of issues and recommendations for them to look at the cases and action. Periodic review meeting will be conducted with Account manager to take support feedback from the customer as a part of continues improvement process.",
  services : [
    {
      title:"Primary IT Support",
      description:"When a client associates with TECHPAPPA for the first time, we carry out a full and comprehensive assessment of their IT and technical infrastructure to understand various issues, shortcomings and other lingering concerns that plague their technology infrastructure. Once we take care of all the issues of the client, we also provide them with effective practices and guidelines to ensure that their IT infrastructure performs and continues to perform as intended by the client.",
      image: "https://unity-connect.com/wp-content/uploads/2023/04/What-Is-IT-Support-A-Useful-Guide-Featured-Image_669226057-1024x683.jpg"
    },
    {
      title:"Preventive Maintenance",
      description:"As per the requirements, every quarter, we carry our preventive maintenance of the IT systems and infrastructure of the client to identify any issues. Once the same is done, we will also provide the clients with a detailed report of the findings, the analysis, and the guidelines to fix the issues that were identified, as well. This will support the client learn about the issues and the remedies they need to address not only the current concern but also the ones in the future.",
      image: "https://www.techdonut.co.uk/sites/default/files/regularitmaintenance_87023960_0.jpg"
    },
    {
      title:"Periodic Reviews",
      description:"TECHPAPPA looks to constantly improve the services and AMC support that we offer. Hence, we always try to learn about the experience that the clients have with us. Thus, we carry out periodic review meetings with the account manager to learn about the kind of experience and feedback from the client so as to improve our service support for our clients. This approach has greatly helped us render high value-adding AMC services to our clients, at all times.",
      image: "https://media.licdn.com/dms/image/v2/D5612AQHlXMimK6vlkg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1694193303284?e=2147483647&v=beta&t=CsMYZECGylboNWV0YutYrfUIKFH5yn5S5NAn5mua9bQ"
    },
    {
      title:"Scalable",
      description:"TECHPAPPA understands that every business wants to grow and they work incessantly for the same. As a result, we offer them with scalable IT AMC services that can respond proactively to the dynamic nature of the business and its growth objectives.",
      image: "https://mcim24x7.b-cdn.net/wp-content/uploads/2024/05/Standardization-and-scalability.png"
    },
    {
      title:"Flexible",
      description:"Unlike typical IT AMC providers in the UAE, TECHPAPPA offers flexible, dynamic support that adapts to clients' evolving needs and business goals. We deliver tailored, top-notch IT AMC services that others cannot match, making TECHPAPPA the most reliable and economical choice for exceptional IT support in the region.",
      image: "https://media.licdn.com/dms/image/v2/C4D0DAQHdcrIn7LGz9g/learning-public-crop_144_256/learning-public-crop_144_256/0/1567195925868?e=2147483647&v=beta&t=PkwbrT2fXinSl0j_zaB6j-Elf4K7OnuTO2HH4HqitCU"
    },
    
  ],
  bottomTitle : "Want Answers? Learn About Our IT AMC Solutions and Services Talking to Our Experts, Now",
  }
]

import aruba from "../assets/images/arubacloud.png"
import meraki from "../assets/images/ciscoMeraki.png"

export const cloudNetworking = [
  {
  heroTitle : "Cloud Managed Networking",
  contentSubTitle : " go Cloud",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "Cloud Managed Networking",
  serviceTitle : "Benefits of Cloud Managed Networking",
  serviceContent : "With cloud-managed networking, administrators can see their entire network, regardless of location, gather real-time data for planning and troubleshooting purposes, and make configuration changes all from a single pane of glass. No management hardware or travel needed. The main advantages of cloud-managed networking is that the product and product update process is managed by the vendor. New features and functionality are continuously developed and automatically delivered, allowing IT to focus on introducing new services, instead of planning for downtime.",
  services : [
    {
      title:"Cisco Meraki",
      description:"Cisco Meraki simplifies IT with centralized management for WLAN, switching, security, and more, reducing costs and complexity. Meraki MS Switches feature Layer 7 application and client analysis, allowing administrators to identify users, content, and applications on the network. This enables detailed monitoring, automatic reporting, and policy enforcement to optimize network performance.",
      image: meraki
    },
    {
      title:"Aruba",
      description:"Aruba’s Cloud-managed networking portfolio ensures reliable support for fast-paced, mobile-first environments. Key solutions include Aruba Central for unified network management, Aruba SD-Branch for secure SD-WAN and branch operations, and Aruba Device Insight for intelligent device discovery and visibility. These solutions work together to enhance Aruba’s comprehensive range of access points, switches, and gateways.",
      image: aruba
    },
  ],
  bottomTitle : "We can help you choose the right cloud network solution that suits for your current and growing business need!",
  }
]

export const enterprise = [
  {
  heroTitle : "Enterprise ICT",
  contentSubTitle : "",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "",
  serviceTitle : "",
  serviceContent : "With cloud-managed networking, administrators can see their entire network, regardless of location, gather real-time data for planning and troubleshooting purposes, and make configuration changes all from a single pane of glass. No management hardware or travel needed. The main advantages of cloud-managed networking is that the product and product update process is managed by the vendor. New features and functionality are continuously developed and automatically delivered, allowing IT to focus on introducing new services, instead of planning for downtime.",
  services : [
    {
      title:"Cisco Meraki",
      description:"Cisco Meraki simplifies IT with centralized management for WLAN, switching, security, and more, reducing costs and complexity. Meraki MS Switches feature Layer 7 application and client analysis, allowing administrators to identify users, content, and applications on the network. This enables detailed monitoring, automatic reporting, and policy enforcement to optimize network performance.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikAhoiiDUeYhrAeOWeg4DEHCH6JQYWzIJcw&s"
    },
    {
      title:"Aruba",
      description:"Aruba’s Cloud-managed networking portfolio ensures reliable support for fast-paced, mobile-first environments. Key solutions include Aruba Central for unified network management, Aruba SD-Branch for secure SD-WAN and branch operations, and Aruba Device Insight for intelligent device discovery and visibility. These solutions work together to enhance Aruba’s comprehensive range of access points, switches, and gateways.",
      image: "https://play-lh.googleusercontent.com/cvwWfyqF2uBtIAoVAcMRUBawvREHN1ZHIpDZ70pkseIiKoTY-BxbYAqG2sieG4KpC5I"
    },
  ],
  bottomTitle : "Stay ahead and stay relevant by joining hands with TECHPAPPA, one of the top IT companies in Dubai!",
  }
]

export const artificialIntelligence = [
  {
  heroTitle : "Artificial Intelligence",
  contentSubTitle : "",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "",
  serviceTitle : "",
  serviceContent : "With cloud-managed networking, administrators can see their entire network, regardless of location, gather real-time data for planning and troubleshooting purposes, and make configuration changes all from a single pane of glass. No management hardware or travel needed. The main advantages of cloud-managed networking is that the product and product update process is managed by the vendor. New features and functionality are continuously developed and automatically delivered, allowing IT to focus on introducing new services, instead of planning for downtime.",
  services : [
    {
      title:"Cisco Meraki",
      description:"Cisco Meraki simplifies IT with centralized management for WLAN, switching, security, and more, reducing costs and complexity. Meraki MS Switches feature Layer 7 application and client analysis, allowing administrators to identify users, content, and applications on the network. This enables detailed monitoring, automatic reporting, and policy enforcement to optimize network performance.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikAhoiiDUeYhrAeOWeg4DEHCH6JQYWzIJcw&s"
    },
    {
      title:"Aruba",
      description:"Aruba’s Cloud-managed networking portfolio ensures reliable support for fast-paced, mobile-first environments. Key solutions include Aruba Central for unified network management, Aruba SD-Branch for secure SD-WAN and branch operations, and Aruba Device Insight for intelligent device discovery and visibility. These solutions work together to enhance Aruba’s comprehensive range of access points, switches, and gateways.",
      image: "https://play-lh.googleusercontent.com/cvwWfyqF2uBtIAoVAcMRUBawvREHN1ZHIpDZ70pkseIiKoTY-BxbYAqG2sieG4KpC5I"
    },
  ],
  bottomTitle : "Talk to Our Engineers About Your Need and We Would Love to Help You",
  }
]

export const iot = [
  {
  heroTitle : "Internet of Things (IoT)",
  contentSubTitle : "",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "",
  serviceTitle : "",
  serviceContent : "With cloud-managed networking, administrators can see their entire network, regardless of location, gather real-time data for planning and troubleshooting purposes, and make configuration changes all from a single pane of glass. No management hardware or travel needed. The main advantages of cloud-managed networking is that the product and product update process is managed by the vendor. New features and functionality are continuously developed and automatically delivered, allowing IT to focus on introducing new services, instead of planning for downtime.",
  services : [
    {
      title:"Cisco Meraki",
      description:"Cisco Meraki simplifies IT with centralized management for WLAN, switching, security, and more, reducing costs and complexity. Meraki MS Switches feature Layer 7 application and client analysis, allowing administrators to identify users, content, and applications on the network. This enables detailed monitoring, automatic reporting, and policy enforcement to optimize network performance.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikAhoiiDUeYhrAeOWeg4DEHCH6JQYWzIJcw&s"
    },
    {
      title:"Aruba",
      description:"Aruba’s Cloud-managed networking portfolio ensures reliable support for fast-paced, mobile-first environments. Key solutions include Aruba Central for unified network management, Aruba SD-Branch for secure SD-WAN and branch operations, and Aruba Device Insight for intelligent device discovery and visibility. These solutions work together to enhance Aruba’s comprehensive range of access points, switches, and gateways.",
      image: "https://play-lh.googleusercontent.com/cvwWfyqF2uBtIAoVAcMRUBawvREHN1ZHIpDZ70pkseIiKoTY-BxbYAqG2sieG4KpC5I"
    },
  ],
  bottomTitle : "Whether you plan to launch a new IoT initiative or upscale an existing IoT application, TECHPAPPA will support you with a relevant service.",
  }
]

export const itStructure = [
  {
  heroTitle : "IT Infrastructure",
  contentSubTitle : "",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "",
  serviceTitle : "Why Opt for Infrastructure Solutions from TECHPAPPA?",
  serviceContent : "TECHPAPPA offers a range of IT infrastructure services. We provide free active consultation, we implement services by using latest technology solutions that deliver a differentiated value to your business, by enhancing operational efficiencies, boosting productivity and performance, accelerating time-to-market, and reducing costs. Our IT Infrastructure consulting services enable organizations to design, build, run and manage a scalable, flexible, and reliable IT infrastructure. Through our suite of services, we help our customers in reducing infrastructure costs and facilitate them to focus on strategic initiatives and business transformation. We are experts in pairing up the top IT infrastructure technologies to meet each client’s specific need. We have an extensive pool of infrastructure specialists who can help you create, run and manage the next-generation IT Infrastructure.",
  services : [
    {
      title:"",
      description:"",
      image: ""
    },
    {
      title:"",
      description:"",
      image: ""
    },
  ],
  bottomTitle : "From offering expert advice to solving complex problems, we've got you covered!",
  }
]

export const itSupport = [
  {
  heroTitle : "24 /7 Critical Support",
  contentSubTitle : "",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "24 /7 Critical Support",
  serviceTitle : "How Can Techpappa's IT Support Help You?",
  serviceContent : "While many businesses have certain support wings for their business, most of them cannot handle the stress and challenges that come with a ransomware attack or anything of that sort. That is exactly why you need a team of experts that you can rely on to put back frameworks and infrastructures that are attacked by malwares to be put back. Then you can call us, TECHPAPPA. With our team working round the clock monitoring your IT infrastructure and watching over it for any suspicious activities, you get access to the knowledge and expertise of savvy, insightful and experienced team round the clock. Not only can TECHPAPPA’s IT support can work to create an environment where your infrastructure is protected and secured from threats, it can also empower your own in-house security team to face any of the challenges that might come your way.",
  services : [
    {
      title:"Proactive Support Program",
      description:"As an experienced IT support team, we do not wait for things to happen. Instead, we work proactively to patch any security issues as and when they happen. We also run regular diagnostics to make certain that every security measure is active and running.",
      image: "https://www.marketing-logic.com/wp-content/uploads/2017/10/approaches-to-setting-up-customer-support.jpg"
    },
    {
      title:"IT Support Strategy",
      description:"The business will be given an inventive IT support strategy according to which the business will address any and all security threats when they happen to accelerate the process of identification of the damage and its mitigation.",
      image: "https://cdn.elearningindustry.com/wp-content/uploads/2019/02/4-overlooked-benefits-corporate-training-software-offers-your-customer-care-team-1024x574.jpg"
    },
    {
      title:"An Inventive Security Framework",
      description:"As per the requirements and demands of your business and its operational nature, we help you create an excellent and comprehensive IT protection strategy to ensure that every loophole for an attack is checked and sealed.",
      image: "https://img.freepik.com/premium-photo/cyber-security-data-protection-information-privacy-internet-technology-conceptbusinessman_660230-167587.jpg?w=360"
    },
    {
      title:"In-House Team Training",
      description:"Though we work as an extension of your in-house team, we also share our expertise, knowledge and insights with your in-house team and offer them with the required training to handle any eventualities.",
      image: "https://gyrus.com/wp-content/uploads/2024/03/training-in-teams.webp"
    },
  ],
  bottomTitle : "Want Answers for Your IT Support Requirements? Let’s Have a Fruitful Discussion for an Inventive IT Support Strategy",
  }
]

export const microsoft365 = [
  {
  heroTitle : "Do More with Less with Microsoft 365",
  contentSubTitle : "",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "Microsoft Office 365",
  serviceTitle : "Benefits of Having Microsoft Office 365",
  serviceContent : "What makes Microsoft 365 an exceptionally value-adding addition to businesses of al sizes and shapes is that it brings a plethora of versions of the same that will just fit your individual requirements aptly. With Microsoft 365, all of your documents are always on the cloud and can be accessed by the user from any device that supports Microsoft 365 from anywhere in the world. In addition, Microsoft 365 comes with a yearly/monthly subscription fee unlike the one-time perpetual license fee that was associated with the MS Office. Along with the changes in the pricing, Microsoft 365 also come with a variety of added focus on cloud services and online storage option, which makes is easier for businesses to access, edit and manage their documents from anywhere in the world without having to depend on a third-party cloud storage system.",
  services : [
    {
      title:"Microsoft Office 365",
      description:"Microsoft 365 Suite integrates chat, calls, online meetings, and collaboration tools like Teams, OneDrive, and Office apps, all with advanced security features. It offers a cost-effective solution for remote or onsite work, safeguarding business data and streamlining IT management. Choose from various plans tailored to your business needs, enhancing productivity and connectivity.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/10/352827027/VK/OM/YZ/187779313/80-500x500.jpeg"
    },
  ],
  bottomTitle : "Take Advantage of the All-New Office 365 for a Whole New Office Experience Talk to Our Engineers Now!",
  }
]

export const cloudOperations = [
  {
  heroTitle : "Cloud Operations Center",
  contentSubTitle : "",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "Cloud Operations Center",
  serviceTitle : "What do Techpappa’s Managed Cloud Services Include?",
  serviceContent : "Techpappa offers comprehensive and value-adding managed cloud services fitting the needs of the clients. We understand that each of the clients that come to us has unique needs and wants us to help them in the most suitable way to their business. As a result, we render highly bespoke services that get the work done. No matter how extensive and challenging your cloud infrastructure is and what management support you need from us, we are capable of delivering the most effective, tailored managed cloud services to all our clients.",
  services : [
    {
      title:"Our Managed Cloud Services Strategy for You",
      description:"Techpappa wants to cater to all the requirements of clients when it comes to managed cloud services no matter the size of their operations. Hence, we approach each of them with a unique strategy that fits their needs in order to help them manage their cloud services for maximum ROI and efficiency. Our managed cloud services strategy can help you realize three organization goals. In fact, our strategy has been developed to help business achieve them.",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQEEBJ-VlcDQyQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1671176551647?e=2147483647&v=beta&t=KzjmXwKTrZZ1jw4jfsgRPsuDKSOYWOIJJsvy_CSb2gs"
    },
    {
      title:"Self-Service Capabilities",
      description:"Being capable of leveraging the potency of cloud infrastructure all by themselves is an important aspect of managing cloud services for an organization. That’s the why Techpappa’s cloud management services provide the users with the capability to various cloud computing instances real time, monitor the costs involved in its operations and capably assess and allocate resources effectively.",
      image: "https://media.licdn.com/dms/image/v2/D5612AQFYaAQXdO4qCQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1704829841287?e=2147483647&v=beta&t=rfD3KGFiF33MmSZ3Q_B8Mv9R_LGxUKmKAsQcdx3hJ_o"
    },
    {
      title:"Managing Workflow",
      description:"Workflow management is one of the most crucial elements in taking full advantage of the capability of a cloud infrastructure. Techpappa’s team can support and empower you to effectively do away with any human interference while performing the needed methods in both creating and managing cloud instances.",
      image: "https://www.siav.com/wp-content/uploads/workflow-management-1.jpg"
    },
    {
      title:"Cloud Analysis",
      description:"With better analysis of a cloud infrastructure, a business can always effectively manage their cloud service with a breeze. Our support can offer you the platform and skills you need to proactively analyze important elements such as latency, workload, compliance requirements, downtime, and the like to bring your cloud infrastructure to help your business.",
      image: "https://www.liquidweb.com/wp-content/uploads/2024/03/cloud-workload.jpg"
    },
  ],
  bottomTitle : "Want Answers? Talk to Our Managed Cloud Service Experts Today",
  }
]

export const azureManage = [
  {
  heroTitle : "Azure Managed Service",
  contentSubTitle : "",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "Azure Cloud Service",
  serviceTitle : "Cloud Optimization and Strategy",
  serviceContent : "",
  services : [
    {
      title:"Comprehensive Support",
      description:"No matter where you are in your journey with Azure, access to export- level assistance is critical to a successful cloud transformation. Techpappa is your resource for azure assistance through incident support, spend analysis, education, and advisory services.",
      image: "https://www.riministreet.com/wp-content/uploads/2020/06/solution_need_comprehensiveresponsive_1-560x477.jpg"
    },
    {
      title:"Financial control & governance",
      description:"Gain control of your Azure usage with our industry expert cloud management services. Our advisory services, along with technical support, help you govern and maintain an optimized Azure environment.",
      image: "https://missouribusiness.net/wp-content/uploads/2022/07/what-are-financial-controls-1024x683.jpg"
    },
    {
      title:"Managed Billing",
      description:"We handle the back-end coordination of your Azure billing, bundling it into one invoice for simplicity. You can purchase Azure directly through us with no pre-paid, long-term commitments, providing you one partner for all your Azure purchase and support needs.",
      image: "https://hitconsultant.net/wp-content/uploads/2019/11/Kareo-Sells-Managed-Billing-Services-Business-to-Health-Prime-International.jpg"
    },
    {
      title:"Optimizing your Azure Environment",
      description:"Microsoft azure offers your business the best capabilities for cloud computing, but managing the environment requires expertise and strategic analysis. Techpappa’s Cloud management for Azure can provide you with operational support and maintenance throughout your journey to Azure Our experts offer guidance and analysis around your cloud operations, financial governance, and provide support for your questions and concerns.",
      image: "https://images.squarespace-cdn.com/content/v1/5877fcf8ebbd1a0e70bf993e/1604252543138-NS9NTDW8JDR16ACF0MOX/Two+coworkers+in+a+happy+and+productive+office+environment"
    },
    {
      title:"Azure Care Package",
      description:"As the key component of our cloud management of Azure , the Azure care package provides incident support for unexpected issues and managed escalation to Microsoft premier support. You also again access to the subject matter experts for advisory and administrative services.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3KUF2IUXno2o0rLQ0Cv9DAEY_xY7Th8TgBWAZ2RX7peZBluz2FgCoQl-asU2LaEYhR4&usqp=CAU"
    },
    {
      title:"24/7 critical support",
      description:"Joining hands with a 24/7 cloud administrations supplier like TECHPAPPA is a method for getting high caliber-Yet saavy-all day, every minute IT support. Techpappa works from a dedicated system which ensures that is accessible every minute of every day/365.",
      image: "https://unity-connect.com/wp-content/uploads/2023/04/What-Is-IT-Support-A-Useful-Guide-Featured-Image_669226057.jpg"
    },
    {
      title:"Azure Purchase",
      description:"Optionally, purchase Azure directly from us without a pre-paid long-term commitment and take advantage of our bundled services and end-to-end customer support. Our ability and wide knowledge to purchase Azure provides one seamless partner for all your needs.",
      image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/366021-pricing-img1-656x440?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=664&hei=498&qlt=100&fit=constrain"
    },
  ],
  bottomTitle : "Reduce your cloud spend up to 30% by optimizing your cloud workloads.!",
  }
]

export const contactUs = [
  {
  heroTitle : "CONTACT US",
  contentSubTitle : "",
  contentTitle : "Making The Cloud Sing To Your Business",
  content : "Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed. We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.",
  contentImg : "https://vareli.co.in/vareliCMS/public/images/235343867/IT_Infrastructure.jpg",
  serviceSubTitle : "Azure Cloud Service",
  serviceTitle : "Cloud Optimization and Strategy",
  serviceContent : "",
  services : [
    {
      title:"Comprehensive Support",
      description:"No matter where you are in your journey with Azure, access to export- level assistance is critical to a successful cloud transformation. Techpappa is your resource for azure assistance through incident support, spend analysis, education, and advisory services.",
      image: "https://www.riministreet.com/wp-content/uploads/2020/06/solution_need_comprehensiveresponsive_1-560x477.jpg"
    },
    {
      title:"Financial control & governance",
      description:"Gain control of your Azure usage with our industry expert cloud management services. Our advisory services, along with technical support, help you govern and maintain an optimized Azure environment.",
      image: "https://missouribusiness.net/wp-content/uploads/2022/07/what-are-financial-controls-1024x683.jpg"
    },
    {
      title:"Managed Billing",
      description:"We handle the back-end coordination of your Azure billing, bundling it into one invoice for simplicity. You can purchase Azure directly through us with no pre-paid, long-term commitments, providing you one partner for all your Azure purchase and support needs.",
      image: "https://hitconsultant.net/wp-content/uploads/2019/11/Kareo-Sells-Managed-Billing-Services-Business-to-Health-Prime-International.jpg"
    },
    {
      title:"Optimizing your Azure Environment",
      description:"Microsoft azure offers your business the best capabilities for cloud computing, but managing the environment requires expertise and strategic analysis. Techpappa’s Cloud management for Azure can provide you with operational support and maintenance throughout your journey to Azure Our experts offer guidance and analysis around your cloud operations, financial governance, and provide support for your questions and concerns.",
      image: "https://images.squarespace-cdn.com/content/v1/5877fcf8ebbd1a0e70bf993e/1604252543138-NS9NTDW8JDR16ACF0MOX/Two+coworkers+in+a+happy+and+productive+office+environment"
    },
    {
      title:"Azure Care Package",
      description:"As the key component of our cloud management of Azure , the Azure care package provides incident support for unexpected issues and managed escalation to Microsoft premier support. You also again access to the subject matter experts for advisory and administrative services.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3KUF2IUXno2o0rLQ0Cv9DAEY_xY7Th8TgBWAZ2RX7peZBluz2FgCoQl-asU2LaEYhR4&usqp=CAU"
    },
    {
      title:"24/7 critical support",
      description:"Joining hands with a 24/7 cloud administrations supplier like TECHPAPPA is a method for getting high caliber-Yet saavy-all day, every minute IT support. Techpappa works from a dedicated system which ensures that is accessible every minute of every day/365.",
      image: "https://unity-connect.com/wp-content/uploads/2023/04/What-Is-IT-Support-A-Useful-Guide-Featured-Image_669226057.jpg"
    },
    {
      title:"Azure Purchase",
      description:"Optionally, purchase Azure directly from us without a pre-paid long-term commitment and take advantage of our bundled services and end-to-end customer support. Our ability and wide knowledge to purchase Azure provides one seamless partner for all your needs.",
      image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/366021-pricing-img1-656x440?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=664&hei=498&qlt=100&fit=constrain"
    },
  ],
  bottomTitle : "Reduce your cloud spend up to 30% by optimizing your cloud workloads.!",
  }
]