import project1 from "../assets/projects/shoppingcart.png";
import project2 from "../assets/projects/blog.png";
import project3 from "../assets/projects/portfolio.png";
import project4 from "../assets/projects/discord.png";

export const HERO_CONTENT = `I am a passionate front-end developer with hands-on experience in building web applications using technologies like React, JavaScript, HTML, CSS, Tailwind. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, JavaScript, HTML, CSS, and Tailwind. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [

  {
    year: "July, 2017 - Sept, 2018",
    role: "Software Engineer",
    company: "Samsung R&D Institute, Noida",
    description: `Worked on various components of Samsung Smart TVs for the ATSC, DVB, and ISDB regions. Worked on Cleaner, Remote Management, Settings, Channel List components in which processed data in JSON format.`,
    technologies: ["Python", "React", "JavaScript", "HTML", "CSS", "Linux", "C++"],
  },
  {
    year: "Dec, 2016 - June, 2017",
    role: "Software Engineer Trainee",
    company: "Samsung R&D Institute, Noida",
    description: `Acquired knowledge about various components of Samsung Smart TVs, worked on resolving software image bugs for production, and developed a frontend UI to display daily results.`,
    technologies: ["Python", "HTML", "CSS", "Linux", "C++"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "Frontend of e-commerce website with features like product listing, shopping cart,total rate of added items, add and remove items from cart along with toaster notification",
    technologies: ["React","HTML", "CSS", "Redux", "Router"],
  },
  {
    title: "Blogging Platform",
    image: project2,
    description:
      "A platform for showing blog posts, with features like next page, filter blogs when clicked on particular category or hash tag.",
    technologies: ["React","HTML", "CSS", "contextAPI", "Router", "custom Hook"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Discord Clone",
    image: project4,
    description:
      "An application for clonning Discord website using Tailwind CSS.",
    technologies: ["HTML", "CSS", "Tailwind"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9311354886",
  email: "lokesh1992p@gmail.com",
};
