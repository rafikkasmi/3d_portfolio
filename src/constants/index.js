import {
    mobile,
    backend,
    creator,
    web,
    keeper,
    firebase,
    javascript,
    boot,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
   malrika,
   malriklogo,
   ennaa,
   tindog,
    threejs,
  portosimpa,
  admin,
  design,
  blog,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: " mern stack Developer",
      icon: mobile,
    },
    {
      title: "frontend Developer",
      icon: backend,
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "bootstrap",
      icon: boot,
    },
    {
      name: "git",
      icon: git,
    },
   
    {
      name: "firebase",
      icon: firebase,
    },
   
  ];
  
  const experiences = [
    {
      title: "mern stack Developer",
      company_name: "malrik",
     icon: malriklogo,
      iconBg: "#383E56",
      date: "Apr 2023 - may 2023",
      points: [
        "Developing and e-commerce web applications using React.js and other related technologies.",
        "like node.js and his framework express.js and using noSql database moongo.db",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "logo",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "internship at the airport",
    //   company_name: "ENNA",
    //   icon: ennaa,
    //   iconBg: "#383E56",
    //   date: "Aug 2023 - Sep 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "internship in sonatrach",
    //   company_name: "Meta",
    //  // icon:sonatrach,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "malrik store",
      description:
" an intuitive online shopping website with a user-friendly interface. Discover a curated selection of men's and women's clothing, as well as stylish lighting decor and high-quality headphones, all available for hassle-free online purchases with Visa card payment. Explore fashion, elevate your space, and enhance your audio experience, all on one convenient platform.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },
      ],
      image:malrika,
      source_code_link: "https://github.com/Aloui-Ikram/malrikecommerce",
    },
    {
      name: "tindog website",
      description:
"The frontend of the web application allows users to search for dogs, view estimated prices, and also display testimonials",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tindog,
      source_code_link: "https://github.com/Aloui-Ikram/tindog",
    },
    {
      name: "dashboard admin (malrik store)",
      description:
      "This is a web application designed for administrators to manage various aspects of their online business. It provides valuable statistics on sales, a graphical representation of monthly website traffic, tracks new member sign-ups in sets of five, and displays the most recent transactions. In the product management section, administrators can add new products, update existing ones, list all products, and view detailed information for each product. Additionally, administrators have the capability to remove products from the list. On the orders management side, the application displays order details and their respective statuses, allowing administrators to update them to 'pending,' 'on the way,' or 'delivered' as needed.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "express.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: admin,
      source_code_link: "https://github.com/Aloui-Ikram/e-commerce/tree/master/Admin/malrikadmin",
    },
    {
      name: "keeper",
      description:
      " website (front-end) that you can take notes in it by writing the title of the note and the details of the note you can add an new note and you can also remove it ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: keeper,
      source_code_link: "https://github.com/Aloui-Ikram/keeper",
    },
    
    {
      name: "blog",
      description:
        "A website where you can input your journal entries directly through the front-end interface.",
      tags: [
      
        {
          name: "ejs",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
  image: blog,
      source_code_link: "https://github.com/Aloui-Ikram/blog",
    },
    {
      name: "simple portofolio",
      description:
      "A basic portfolio website created using HTML, CSS, and Bootstrap for a static presentation." ,
           tags: [
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
  image: portosimpa,
      source_code_link: "https://github.com/Aloui-Ikram/portofolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };