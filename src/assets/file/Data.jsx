import {Images} from '../../utlis/image'

const services = [
    {  
        title: "Full Stack Developer",
        icon: Images.fullstack,
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
        title: "Digital Marketing",
        icon: Images.digitalmarketing,
    },
    {
        title: "UI/UX Design",
        icon: Images.uiuxdesign,
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
        name: "Mit Patel",
        designation: "Frontend Developer",
        company: "Siemens",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
        id:3,
        testimonial: "I had the pleasure of working with Vivek on a complex web development project, and I was impressed with their ability to handle multiple tasks while maintaining the highest level of quality.",
        name: "Jay Patel",
        designation: "Software Engineer",
        company: "ShowIT Technologies Inc",
        image: "https://randomuser.me/api/portraits/men/90.jpg",
    },
    {
        id:4,
        testimonial:"Vivek is an exceptional developer and a joy to work with. His passion for programming and problem-solving is unmatched.",
        name: "Vidhi Patel",
        designation: "digital Marketing",
        company: "Appinitial technologies",
        image: "https://randomuser.me/api/portraits/women/11.jpg",
    }
];

const projects = [
  {
    id: 1,
    name: "AI Image Generator",
    description:"Transform dreams into reality with AI-generated images using the MERN stack, Tailwind. This project provides a stunning user experience like no other, taking you on a magical journey into a world of wonders!",
      tags: [
          {
              name: "React",
              color: "blue-text-gradient",
          },
          {
              name: "Tailwind",
              color: "pink-text-gradient",
          },
          {
              name: "MERN",
              color: "orange-text-gradient",
          },


      ],
      image: Images.project2,
      source_code_link: "https://github.com/vcodementor",
  },
  {
    id: 2,
      name: "YouTube Clone",
      description:
          "Built a revolutionary YouTube clone using React.js and Material UI 5. This cutting-edge platform offers seamless video streaming and effortless RapidAPI integration, delivering the ultimate viewing experience.",
      tags: [
          {
              name: "React",
              color: "blue-text-gradient",
          },
          {
              name: "RapidAPI",
              color: "green-text-gradient",
          },
          {
              name: "Material UI 5",
              color: "pink-text-gradient",
          },
      ],
      image: Images.project3,
      source_code_link: "https://github.com/vcodementor",
  },
  {
    id: 3,
      name: "Data Management Sorting Algorithms",
      description:
      "Developed a high-performance Java multi-sorting algorithm that utilizes bubble, quick, insertion, selection, merge, and odd-even sorting algorithms. This solution offers lightning-fast sorting capabilities, enabling optimal efficiency.",
      tags: [
          {
              name: "Java",
              color: "blue-text-gradient",
          },
          {
              name: "Algorithms",
              color: "green-text-gradient",
          },
          {
              name: "Data management",
              color: "pink-text-gradient",
          },
      ],
      image: Images.project4,
      source_code_link: "https://github.com/vcodementor",
  },
  {
    id: 4,
    name: "One thread",
    description:"Transform dreams into reality with AI-generated images using the MERN stack, Tailwind. This project provides a stunning user experience like no other, taking you on a magical journey into a world of wonders!",
      tags: [
          {
              name: "React",
              color: "blue-text-gradient",
          },
          {
              name: "Tailwind",
              color: "pink-text-gradient",
          },
          {
              name: "MERN",
              color: "orange-text-gradient",
          },


      ],
      image: Images.project2,
      source_code_link: "https://github.com/vcodementor",
  },
];

export {services,technologies, experiences,testimonials, projects};
