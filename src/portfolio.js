/* Change this file to get your personal Porfolio */
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaGooglePlus,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNode,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BsGoogle } from "react-icons/bs";

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ruturaj Salunkhe",
  description:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
  contactMe: "https://www.linkedin.com/in/ruturaj-salunkhe",
  resume:
    "https://raw.githubusercontent.com/Ruturajwork/resume/main/RuturajSalunkheResume.pdf",
};

//Home Page
const greeting = {
  title: "Ruturaj Salunkhe",
  subTitle:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
};

const socialMediaLinks = [
  {
    name: "GitHub",
    link: "https://github.com/ruturajwork",
    icon: <FaGithub />,
    backgroundColor: "#333",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ruturajsalunkhe",
    icon: <FaLinkedin />,
    backgroundColor: "#0077B5",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/RuturajSalunkh6",
    icon: <FaTwitter />,
    backgroundColor: "#1DA1F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_mr_.salunkhe._/",
    icon: <FaInstagram />,
    backgroundColor: "#E1306C",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCTaUnjKNamn1tx_-blt14rA",
    icon: <FaYoutube />,
    backgroundColor: "#fa0a1e",
  },
  {
    name: "Google",
    link: "mailto:ruturajsalunkhework@gmail.com",
    icon: <BsGoogle />,
    backgroundColor: "#fa560a",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100004345366132&mibextid=2JQ9oc",
    icon: <FaFacebook />,
    backgroundColor: "#0a42fa",
  },
];

const degree = [
  {
    title: "University Of Mumbai",
    subtitle: "B.Sc. in Information Technology",
    logo_path: "mum.png",
    alt_name: "Mumbai University",
    duration: "2018 - 2021",
    descriptions: [
      "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
      "⚡ Apart from this, I have done courses on Php, Cloud Computing and Full Stack Development.",
    ],
    website_link: "https://mu.ac.in/",
  },
];
const degrees = {
  degrees: [
    {
      title: "University Of Mumbai",
      subtitle: "B.Sc. in Information Technology",
      logo_path: "mum.png`",
      alt_name: "Mumbai University",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Php, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://mu.ac.in/",
    },
  ],
};

// ITS IMPORTANT FOR ME
const certifications = {
  certifications: [
    {
      title: "Full Stack Development",
      subtitle: "- Rst Forum",
      logo_path: "rstForum.png",
      certificate_link:
        "https://www.linkedin.com/posts/ruturaj-salunkhe_activity-6922451222159372288-dgA4?utm_source=share&utm_medium=member_desktop",
      alt_name: "Full Stack Development",
      color_code: "#8C151599",
    },
    {
      title: "HTML5 and CSS3",
      subtitle: "- Pirple.com",
      logo_path: "piriple.png",
      certificate_link: "https://www.pirple.com/certificates/0jclj3byrg",
      alt_name: "piriple",
      color_code: "#00000099",
    },
    {
      title: "Introduction to Web Development with HTML, CSS,JavaScript",
      subtitle: "- Upkar Lidder",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/PWDEFNQ6B5KA",
      alt_name: "Coursera IBM Certificate",
      color_code: "#0C9D5899",
    },
    {
      title: "Hotstar Clone using HTML, CSS and Bootstrap",
      subtitle: "- Ashish Modi",
      logo_path: "devtown.svg",
      certificate_link: "https://cert.devtown.in/verify/Z1qjAhq",
      alt_name: "devtown",
      color_code: "#1F70C199",
    },
    {
      title: "WordPress Master Class",
      subtitle: "- Delta Ltd",
      logo_path: "wordpress.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-be3e4d26-1781-4ab0-94fe-172a1d057351/",
      alt_name: "Wordpress",
      color_code: "#D83B0199",
    },
    {
      title: "Bjorn App android publicitaria en Xamarin forms y Firebase",
      subtitle: "- Academia Apps, Codigo 369",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-632b6752-b848-4f4b-b1bf-5bce2d9d9906/",
      alt_name: "udemy",
      color_code: "#1F70C199",
    },
    {
      title: "Shopify guide: The complete shopify store creation course",
      subtitle: "-  Yassin Marco",
      logo_path: "shopify.png",
      certificate_link: " ",
      alt_name: "udemy",
      color_code: "#0C9D5899",
    },
    {
      title: "React Bootcamp",
      subtitle: "- Anshuman Singh",
      logo_path: "scaler.png",
      certificate_link: "https://moonshot.scaler.com/s/sl/EzkZ2c4Tq1",
      alt_name: "scaler",
      color_code: "#00000099",
    },
    {
      title: "Node.JS Bootcamp",
      subtitle: "- Scaler",
      logo_path: "scaler.png",
      certificate_link: "https://moonshot.scaler.com/s/sl/VcXNrA1Yzi",
      alt_name: "scaler",
      color_code: "#2A73CC",
    },
    {
      title: "Docker",
      subtitle: "- Scaler",
      logo_path: "scaler.png",
      certificate_link:
        "https://www.linkedin.com/posts/ruturaj-salunkhe_learneveryday-docker-bootcamp-activity-7019023320452870148-g1DK?utm_source=share&utm_medium=member_desktop",
      alt_name: "node",
      color_code: "#4285F499",
    },
    {
      title: "QR Code Generator Using JavaScript",
      subtitle: "- Narendra Dwivedi",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-f25e9697-f6a9-4f5a-88f9-713f1d492df0/",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Artificial Intelligence in Digital Marketing",
      subtitle: "- Srinidhi Ranganathan",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-ca32393a-8025-49cc-9142-e2881e1822ea/",
      alt_name: "udemy",
      color_code: "#4285F499",
    },
    {
      title: "Code Envienment",
      subtitle: "- Great Learning",
      logo_path: "greatlearning.png",
      certificate_link: "https://verify.mygreatlearning.com/ISDGYTBF",
      alt_name: "greatLearning",
      color_code: "#8C151599",
    },
    {
      title: "Frontend Development HTML",
      subtitle: "- Great Learning",
      logo_path: "greatlearning.png",
      certificate_link: "https://verify.mygreatlearning.com/XKTFBQYA",
      alt_name: "greatLearning",
      color_code: "#00000099",
    },
    {
      title: "JavaScript",
      subtitle: "- Great Learning",
      logo_path: "greatlearning.png",
      certificate_link: "https://verify.mygreatlearning.com/VGNMEJYN",
      alt_name: "Coursera IBM Certificate",
      color_code: "#0C9D5899",
    },
    {
      title: "Node JS",
      subtitle: "- Great Learning",
      logo_path: "greatlearning.png",
      certificate_link: "https://verify.mygreatlearning.com/DZKIUBIK",
      alt_name: "Coursera IBM Certificate",
      color_code: "#1F70C199",
    },
    {
      title: "React JS",
      subtitle: "- Great Learning",
      logo_path: "greatlearning.png",
      certificate_link: "https://verify.mygreatlearning.com/IKMLBEFA",
      alt_name: "Coursera IBM Certificate",
      color_code: "#D83B0199",
    },
    {
      title: "Frontend Development CSS",
      subtitle: "- Great Learning",
      logo_path: "greatlearning.png",
      certificate_link: "https://verify.mygreatlearning.com/QJMOFBZI",
      alt_name: "Coursera IBM Certificate",
      color_code: "#1F70C199",
    },
    {
      title: "TCS DataPlus Overview Course",
      subtitle: "- Susan Mannarapyayil",
      logo_path: "tcs.png",
      certificate_link:
        "https://drive.google.com/file/d/1Cp-hDBksXpZM63-ihKfQTYL3swk6M0V-/view?usp=sharing",
      alt_name: "tcs",
      color_code: "#0C9D5899",
    },
    // {
    //   title: "React Bootcamp",
    //   subtitle: "- Anshuman Singh",
    //   logo_path: "scaler.png",
    //   certificate_link: "https://moonshot.scaler.com/s/sl/EzkZ2c4Tq1",
    //   alt_name: "scaler",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Node.JS Bootcamp",
    //   subtitle: "- Scaler",
    //   logo_path: "scaler.png",
    //   certificate_link: "https://moonshot.scaler.com/s/sl/VcXNrA1Yzi",
    //   alt_name: "scaler",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Docker",
    //   subtitle: "- Scaler",
    //   logo_path: "scaler.png",
    //   certificate_link:
    //     "https://www.linkedin.com/posts/ruturaj-salunkhe_learneveryday-docker-bootcamp-activity-7019023320452870148-g1DK?utm_source=share&utm_medium=member_desktop",
    //   alt_name: "node",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  subtitle: "Work, Internship",
  description:
    "I have worked with Two evolving startups as Full Stack Developer, Designer and Software Architect.I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Freelancer",
          company_url: "https://www.linkedin.com/in/shubham-s-000140129/",
          logo_path: "Freelancer.png",
          duration: "Feb 2022 - Aug 2022",
          location: "Work From Home",
          description:
            "Developed and maintained web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js).Collaborated with cross-functional teams to gather and analyze requirements, design solutions, and implement features. Maintained a user satisfaction rating of 100% year over year by providing responsive tech support to clients.",
          color: "rgb(8, 121, 191)",
        },
        {
          title: "Full Stack Developer",
          company: "Audix Technologies",
          company_url: "https://www.audixindia.in/",
          logo_path: "AUDIX_LOGO.svg",
          duration: "June 2022 - Present",
          location: "Thane, Maharastra",
          description:
            "Developed and maintained web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js).Collaborated with cross-functional teams to gather and analyze requirements, design solutions, and implement features. Maintained a user satisfaction rating of 100% year over year by providing responsive tech support to clients.",
          color: "rgb(155, 21, 120)",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [],
    },
    {
      title: "Volunteerships",
      experiences: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const Projects = [
  {
    id: "1",
    name: "Portfolio2.0",
    createdAt: "2023-10-03T16:10:54Z",
    url: "https://github.com/",
    imgPath: "portfolio2.0.png",
    projectUrl: "#",
    description:
      "🔥 The Complete Customizable Software Developer Portfolio Template which lets you showcase your work and provides each and every detail about you as Software Developer.",
    isFork: false,
    backgroundColor: "#333",
    features: "Portfolio Template",
    languages: [
      {
        name: "HTML",
        iconifyClass: <FaHtml5 />,
      },
      {
        name: "CSS",
        iconifyClass: <FaCss3 />,
      },
      {
        name: "JavaScript",
        iconifyClass: <SiJavascript />,
      },
      {
        name: "React",
        iconifyClass: <FaReact />,
      },
    ],
  },
  {
    id: "2",
    name: "Ecommerce Store",
    imgPath: "shopsite2.png",
    createdAt: "2022-05-31T20:41:33Z",
    url: "https://github.com/Ruturajwork/ecommerce-website",
    projectUrl: "https://rshopstore.vercel.app/",
    backgroundColor: "#0077B5",
    description:
      "🛒 Full stack E-commerce web application made with latest tranding technologies that comes with many Features.",
    isFork: false,
    features:
      "Authorization using JWT, Rest Api, Login, Logout, Payment option selection, Payment(Paypal), View Profile and Update, Admin Access , View Orders,Make it Delivered",
    languages: [
      {
        name: "HTML",
        iconifyClass: <FaHtml5 />,
      },
      {
        name: "CSS",
        iconifyClass: <FaCss3 />,
      },
      {
        name: "JavaScript",
        iconifyClass: <SiJavascript />,
      },
      {
        name: "React",
        iconifyClass: <FaReact />,
      },
    ],
  },
  {
    id: "3",
    name: "Invoice Generator",
    createdAt: "2022-02-11T14:50:20Z",
    imgPath: "invoicegenerator.png",
    url: "https://github.com/Ruturajwork",
    projectUrl: "https://invoicegenerator1.vercel.app/",
    backgroundColor: "#E1306C",
    description:
      "📑 Generate Invoice And Download your Invoice at many currency",
    isFork: false,
    features: "Generate Invoice And Download your Invoice at many currency",
    languages: [
      {
        name: "HTML",
        iconifyClass: <FaHtml5 />,
      },
      {
        name: "CSS",
        iconifyClass: <FaCss3 />,
      },
      {
        name: "JavaScript",
        iconifyClass: <SiJavascript />,
      },
      {
        name: "React",
        iconifyClass: <FaReact />,
      },
    ],
  },
  {
    id: "4",
    name: "Or-Code Generator",
    imgPath: "qrcodegenerator.png",
    createdAt: "2021-11-26T17:56:07Z",
    backgroundColor: "#1DA1F2",
    url: "https://github.com/Ruturajwork/Qrcode",
    projectUrl: "https://qrcode-ruturajwork.vercel.app/",
    description: "🏿 Generate & Scan Qr-Code Its Link to Another QrGenerator.",
    isFork: false,
    features:
      "Generate & Scan Qr-Code Its Link to Another QrGenerator At Different Sizes",
    languages: [
      {
        name: "HTML",
        iconifyClass: <FaHtml5 />,
      },
      {
        name: "CSS",
        iconifyClass: <FaCss3 />,
      },
      {
        name: "JavaScript",
        iconifyClass: <SiJavascript />,
      },
      {
        name: "React",
        iconifyClass: <FaReact />,
      },
    ],
  },
  {
    id: "5",
    name: "Spotify Clone",
    imgPath: "spotifyClone.png",
    createdAt: "2022-08-10T06:36:41Z",
    url: "https://github.com/Ruturajwork/spotify-task",
    backgroundColor: "rgb(10 250 30)",
    description:
      "🟢⏯ Spotify Clone with React JS and Styled Components using Spotify API and Context API",
    features:
      " Spotify Clone with React JS and Styled Components using Spotify API and Context API",
    projectUrl: "https://spotifytask.vercel.app/",
    isFork: false,
    languages: [
      {
        name: "HTML",
        iconifyClass: <FaHtml5 />,
      },
      {
        name: "CSS",
        iconifyClass: <FaCss3 />,
      },
      {
        name: "JavaScript",
        iconifyClass: <SiJavascript />,
      },
      {
        name: "React",
        iconifyClass: <FaReact />,
      },
    ],
  },
  {
    id: "6",
    name: "Portfolio1.0",
    imgPath: "portfolio1.0.png",
    createdAt: "2023-10-03T16:10:54Z",
    url: "https://github.com/Ruturajwork/portfolio/",
    backgroundColor: "#198754",
    projectUrl: "https://ruturajportfolio.vercel.app/",
    description:
      "🤵🏻 The Complete Customizable Software Developer Portfolio Template",
    isFork: false,
    features: `Portfolio Template which lets you showcase your work and provides each and every detail about you as Software Developer.`,
    languages: [
      {
        name: "HTML",
        iconifyClass: <FaHtml5 />,
      },
      {
        name: "CSS",
        iconifyClass: <FaCss3 />,
      },
      {
        name: "JavaScript",
        iconifyClass: <SiJavascript />,
      },
      {
        name: "React",
        iconifyClass: <FaReact />,
      },
    ],
  },{
    id: "7",
    name: "Ecommerce Store",
    imgPath: "blog.png",
    createdAt: "2022-05-31T20:41:33Z",
    url: "https://github.com/Ruturajwork/BlogWebsite",
    projectUrl: "https://ruturajblogs.vercel.app/",
    backgroundColor: "#0077B5",
    description:
      "🛒 Full stack Blogs application made with latest tranding technologies that comes with many Features.",
    isFork: false,
    features:
      "Authorization using JWT, Rest Api, Login, Logout, View Profile and Update, Admin Access , Add Blogs,View Your Blogs",
    languages: [
      {
        name: "HTML",
        iconifyClass: <FaHtml5 />,
      },
      {
        name: "CSS",
        iconifyClass: <FaCss3 />,
      },
      {
        name: "JavaScript",
        iconifyClass: <SiJavascript />,
      },
      {
        name: "React",
        iconifyClass: <FaReact />,
      },
    ],
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  degrees,
  degree,
  certifications,
  Projects,
  experience,
  projectsHeader,
};
