import {Images} from '../../utlis/image'

const services = [
    {  
        title: "Full Stack Developer",
        icon: Images.fullstack,
    },
    {
        title: "Software Developer",
        icon: Images.frontend,
    },
    {
        title: "AI/ML Developer",
        icon: Images.frontend,
    },
    {
        title: "Frontend Developer",
        icon: Images.frontend,
    },
    {
        title: "Backend Developer",
        icon: Images.backend,
    },
    {
        title: "Mobile App Developer",
        icon: Images.mobileapp,
    },
    {
        title: "Social Media Marketing / SEO",
        icon: Images.digitalmarketing,
    },
    {
        title: "Web Design",
        icon: Images.uiuxdesign,
    },
     {
        title: "Penetration Testing / Cyber Security",
        icon: Images.digitalmarketing,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: Images.html,
    },
    {
        name: "CSS 3",
        icon: Images.css,
    },
    {   
        name : 'JQuery',
        icon : Images.jquery
    },
    {   
        name:'Boostrap',
        icon:Images.boostrap
    },
    {   name:'Tailwind CSS',
        icon:Images.tailwindcss
    }, 
    {
        name: "Wordpress",
        icon: Images.wordpress,
    },  
    {
        name: "JavaScript",
        icon: Images.javascript,
    },
    {
        name: "React JS",
        icon: Images.react,
    },
    {
        name: "Angular",
        icon: Images.angular,
    },
    {
        name: "TypeScript",
        icon: Images.typescript,
    },
    {
        name: "Vue",
        icon: Images.vue,
    },
    {
        name: "Laravel",
        icon: Images.laravel,
    },
    {
        name: "Node JS",
        icon: Images.node,
    },
    {
        name: "Mysql",
        icon: Images.mysql,
    },
    {
        name: "MongoDB",
        icon: Images.mongodb,
    },
    {
        name: "Git",
        icon: Images.git
    },
    { 
        name: 'Ionic',
        icon: Images.ionic
    },
    { name: 'React Native',
        icon: Images.reactnative
    },
    { name: 'Flutter',
        icon: Images.flutter
    }, 
    {
        name: "Python",
        icon: Images.python
    },
    {
        name: "AWS",
        icon: Images.aws,
    },
    {
        name: "Docker",
        icon: Images.docker,
    },
    {
        name: "figma",
        icon: Images.figma,
    },
];

const experiences = [
  {
      title: "Industry Software Project ",
      company_name: "SAIT Polytechnic and Launchcode",
    //   icon: sait,
      iconBg: "#383E56",
      date: "April 2022 - December 2022",
      points: [
          "Led the development of a quote-to-cash system for commercial clients in the Oil & Gas industry as team leader.",
          "Utilized technologies such as React, Typescript, Node.js, PostgreSQL, Git, Docker, and AWS.",
          "Gained experience in project management, client relations, and technical skills including object-oriented programming, web development, software analysis, and database design and programming.",
          "Provided support for front-end and back-end development, gathering client requirements, and designing workflows, functionalities, and reporting structures.",
          "Conducted code reviews, testing, and bug tracking, and prepared technical documents.",
      ],
  },
  {
      title: "Hockey Referee",
      company_name: "Central Zone Referees",
    //   icon: central,
      iconBg: "#E6DEDD",
      date: "2016 - Feb 2022",
      points: [
          "Experienced Hockey Referee with over 6 years of experience officiating Junior A, B, Midget, and Bantam Hockey Teams in Canada.",
          "Demonstrated leadership skills and the ability to work as part of a dynamic team, enforcing all rules and regulations of Hockey Canada and communicating professionally with players, coaches, and parents.",
          "Managed conflicts and difficult situations effectively, making quick and hard decisions to maintain a safe and fair playing environment.",
      ],
  },
  {
      title: "Sales Consultant",
      company_name: "Banana Republic",
    //   icon: banana,
      iconBg: "#383E56",
      date: "2020 - Jan 2021",
      points: [
          "Skilled Retail Sales Associate with a demonstrated ability to provide outstanding customer service and promote loyalty in a fast-paced retail environment.",
          "Acknowledged and assisted customers, locating merchandise effectively using various methods and promoting loyalty by educating customers about products and loyalty programs.",
          "Supported sales floor, fitting room, check out, and back-of-house processes, contributing to the overall success of the store."
      ],
  },
  {
      title: "Concierge",
      company_name: "Precision Hyundai,",
    //   icon: hyundia,
      iconBg: "#E6DEDD",
      date: "2020 - 2020",
      points: [
          "Detailed the interior and exterior of vehicles, using advanced techniques and products to restore the appearance and protect the value of customers' cars.",
          "Shuttled customers from their homes to the dealership safely and professionally, ensuring that their experience was positive and stress-free.",
          "Processed and cashiered payments in the service and parts departments, handling transactions accurately and efficiently and providing customers with clear and concise invoices and receipts.",
          "Scheduled appointments for customer services over the phone, ensuring that customers received the services they needed at a time that was convenient for them.",
      ],
  },
];

const testimonials = [
    {
        id: 1,
        testimonial: "Vivek is a hardworking and detail-oriented software developer who consistently delivers high-quality work. His ability to collaborate effectively with team members and communicate technical concepts clearly is a valuable asset.",
        name: "Harshad Patel",
        designation: "Project Manager",
        company: "Appinitial technologies",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
        id:2,
        testimonial: "I had the pleasure of working with Vivek on a complex web development project, and I was impressed with their ability to handle multiple tasks while maintaining the highest level of quality.",
        name: "Chris",
        designation: "Project Manager",
        company: "Full Stack Resources",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
        id:3,
        testimonial: "I had the pleasure of working with Vivek on a complex web development project, and I was impressed with their ability to handle multiple tasks while maintaining the highest level of quality.",
        name: "Mike Yoo",
        designation: "Project Manager",
        company: "RBC",
        image: "https://randomuser.me/api/portraits/men/90.jpg",
    },
    {
        id:4,
        testimonial:"Vivek is an exceptional developer and a joy to work with. His passion for programming and problem-solving is unmatched.",
        name: "Seema",
        designation: "Project Manager",
        company: "Auroramarine",
        image: "https://randomuser.me/api/portraits/women/11.jpg",
    }
];

const projects =  [
                  {
                    "id": 1,
                    "name": "WordPress Travel & eCommerce Platform",
                    "description": "A custom WordPress travel and eCommerce solution with WooCommerce and advanced booking capabilities.",
                    "tags": [
                      { "name": "WordPress", "color": "blue-text-gradient" },
                      { "name": "WooCommerce", "color": "green-text-gradient" },
                      { "name": "Elementor", "color": "pink-text-gradient" }
                    ],
                    "image": "Images.wordpress1",
                    "source_code_link": "https://citysightseeingtoronto.com/"
                  },
                  {
                    "id": 2,
                    "name": "WordPress AI Product Platform",
                    "description": "A WordPress-based Ai Service Base website with a custom theme and plugins.",
                    "tags": [
                      { "name": "WordPress", "color": "blue-text-gradient" },
                      { "name": "AI Service Base", "color": "orange-text-gradient" },
                      { "name": "Custom Plugins", "color": "green-text-gradient" }
                    ],
                    "image": "Images.wordpress2",
                    "source_code_link": "https://vosyn.ai/"
                  },
                  {
                    "id": 3,
                    "name": "WordPress Education & LMS Platform",
                    "description": "An online learning management system (LMS) using WordPress, LearnDash, and custom integrations.",
                    "tags": [
                      { "name": "WordPress", "color": "blue-text-gradient" },
                      { "name": "LMS", "color": "green-text-gradient" },
                      { "name": "LearnDash", "color": "pink-text-gradient" }
                    ],
                    "image": "Images.wordpress3",
                    "source_code_link": "https://www.embark.ca/"
                  },
                  {
                    "id": 4,
                    "name": "Shopify Beauty & Cosmetics Store",
                    "description": "A Shopify-based eCommerce store for beauty and cosmetics, featuring custom themes and apps.",
                    "tags": [
                      { "name": "Shopify", "color": "purple-text-gradient" },
                      { "name": "Liquid", "color": "blue-text-gradient" },
                      { "name": "eCommerce", "color": "orange-text-gradient" }
                    ],
                    "image": "Images.shopify",
                    "source_code_link": "https://www.momilash.ca/"
                  },
                  {
                    "id": 5,
                    "name": "PHP & Vue Travel & Healthcare Platform",
                    "description": "A travel and healthcare management system built with PHP and Vue.js, featuring real-time booking and patient management.",
                    "tags": [
                      { "name": "PHP", "color": "blue-text-gradient" },
                      { "name": "Vue.js", "color": "green-text-gradient" },
                      { "name": "MySQL", "color": "orange-text-gradient" }
                    ],
                    "image": "Images.php_vue",
                    "source_code_link": "https://shakaguide.com"
                  },
                  {
                    "id": 6,
                    "name": "Node.js & Angular Finance & Retail Dashboard",
                    "description": "A real-time finance and retail analytics dashboard built with Node.js, Angular, and MongoDB.",
                    "tags": [
                      { "name": "Node.js", "color": "blue-text-gradient" },
                      { "name": "Angular", "color": "red-text-gradient" },
                      { "name": "MongoDB", "color": "green-text-gradient" }
                    ],
                    "image": "Images.node_angular",
                    "source_code_link": ""
                  },
                  {
                    "id": 7,
                    "name": "Python Django Finance & Healthcare App",
                    "description": "A web application for finance and healthcare data processing using Python, Django, and React.",
                    "tags": [
                      { "name": "Python", "color": "blue-text-gradient" },
                      { "name": "Django", "color": "green-text-gradient" },
                      { "name": "React", "color": "orange-text-gradient" }
                    ],
                    "image": "Images.python_django",
                    "source_code_link": ""
                  },
                  {
                    "id": 8,
                    "name": "Python Flask E-commerce & Retail App",
                    "description": "A lightweight and scalable eCommerce and retail management system built using Python Flask and PostgreSQL.",
                    "tags": [
                      { "name": "Python", "color": "blue-text-gradient" },
                      { "name": "Flask", "color": "green-text-gradient" },
                      { "name": "PostgreSQL", "color": "orange-text-gradient" }
                    ],
                    "image": "Images.python_flask",
                    "source_code_link": ""
                  }
];

export {services,technologies, experiences,testimonials, projects};
