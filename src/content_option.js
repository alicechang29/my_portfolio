const logotext = "ALICE";
const meta = {
    title: "Alice Chang",
    description: "I’m a software engineer in Seattle, WA",
};

const introdata = {
    title: "I’m Alice Chang",
    animated: {
        first: "A Software Engineer in Seattle.",
        second: "I turn ideas into software.",
        third: "Let's work together.",
    },
    your_img_url: require("./assets/images/me.jpg"),
};

const dataabout = {
    title: "Hello!",
    aboutme: `Thanks for visiting my website! I'm Alice and I'm based in Seattle, WA. \n I've been in the tech industry for almost a decade, making my way from technical project manager to product management, and now I am a Software Engineer. I've always been passionate about how building software products, mastering both the business and technical aspects to bring ideas to life. \n In my spare time, I enjoy the outdoors, whether it be bike-packing through Olympic National Park, trekking across Patagonia in Chile, or playing tennis locally!`,
};
const worktimeline = [{
    jobtitle: "Software Engineer Intern",
    where: "Dabima",
    date: "July 2024 - Present",
},
{
    jobtitle: "Software Engineer Intern",
    where: "Rithm School",
    date: "June 2024 - July 2024",
},
{
    jobtitle: "Product Manager",
    where: "Whip Media Group",
    date: "May 2019 - July 2023",
},
{
    jobtitle: "Technical Project Manager",
    where: "Whip Media Group",
    date: "Aug 2017 - May 2019",
},
{
    jobtitle: "Product Manager",
    where: "Digital Social Retail",
    date: "June 2016 - Aug 2017",
},
];

const languages = [
    {
        name: "Javascript"
    },
    {
        name: "Python"
    },
    {
        name: "Typescript"
    },
    {
        name: "SQL"
    },
    {
        name: "GraphQL"
    },
    {
        name: "HTML/CSS"
    },
];

const skills = [
    {
        name: "React"
    },
    {
        name: "PostgreSQL"
    },
    {
        name: "Node.JS"
    },
    {
        name: "Express"
    },
    {
        name: "Flask"
    },
    {
        name: "Django"
    },
];

const education = [{
    title: "Rithm School",
    description: "Full Stack Web Development",
},
{
    title: "Binghamton University, State University of New York",
    description: "B.S Economics, with specialization in Financial Anlaysis & Minor in Health and Wellness",
},
{
    title: "New York University",
    description: "Agile Project Management Certification",
},
];

const dataportfolio = [
    {
        img: require("./assets/images/warbler.png"),
        title: "Warbler",
        description: "Social network modeled after Twitter",
        tech: "Python, Flask, Jinja, SQLAlchemy, PostgreSQL",
        link: "https://github.com/alicechang29/flask-warbler",
    },
    {
        img: require("./assets/images/sharebnb.png"),
        title: "ShareBnB",
        description: "Rental listings platform modeled after Airbnb",
        tech: "Python, Flask, PostgreSQL, React, Tailwind, AWS S3 ",
        link: "https://github.com/alicechang29/sharebnb",
    },
    {
        img: require("./assets/images/jobly.png"),
        title: "Jobly",
        description: "Job listings platform modeled after Linkedin",
        tech: "Node.js, Express, PostgreSQL, React",
        link: "https://github.com/alicechang29/jobly-react",
    },
    {
        img: require("./assets/images/react-cafe.png"),
        title: "Alice's Cafe",
        description: "A cafe menu app",
        tech: "Javascript, React, JSON-Server",
        link: "https://github.com/alicechang29/react-cafe",
    },
    {
        img: require("./assets/images/memory.png"),
        title: "Memory Game",
        description: "A silly, time wasting, memory game",
        tech: "HTML, CSS",
        link: "https://alicechang29.github.io/memoryGame/",
    },
];

const contactConfig = {
    serviceId: "service_cwvep3q",
    templateId: "template_sgnhvbh",
    publicKey: "3vleCku10Np-Ar0SV",
};

const socialprofiles = {
    github: "https://github.com/alicechang29",
    linkedin: "https://www.linkedin.com/in/achang9",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    languages,
    skills,
    education,
    introdata,
    contactConfig,
    socialprofiles as socialprofils,
    logotext,
};