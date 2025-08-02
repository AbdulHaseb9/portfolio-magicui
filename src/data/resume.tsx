import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Haseeb Sheikh",
  initials: "HS",
  url: "https://haseebshaikh.vercel.app",
  location: "Karachi, PK",
  locationLink: "https://www.google.com/maps/place/karachi",
  description:
    "Full Stack Software Engineer with Expertise in Building Modern, Scalable Web Applications. Committed to Delivering high-performance App.",
  summary:
    "I'm a results-driven MERN Stack Developer with a focus on building fast, scalable web apps using React.js, Next.js, and Node.js. From responsive UI to robust backend systems, I deliver clean, high-performing code tailored to client needs. With hands-on experience in real-world projects and team environments, I bring both speed and quality to the table. Let’s connect—I’m ready to bring your ideas to life.",
  // "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "Next.js",
    "React.js",
    "Typescript",
    "Javascript",
    "Python",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firestore",
    "Firebase",
    "Vercel",
    "Netlify",
    "TailwindCSS",
    "Shadcn UI",
    "Ant Design",
    "Magic UI",
    "Stripe",
    "Wordpress",
    "Shopify",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abdulhaseeb22143@gmail.com",
    tel: "+92 329 0994620",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AbdulHaseb9",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/haseebsheikhofficials/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "abdulhaseeb22143@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Ecom Marketers",
      href: "https://ecommarketers.pk/",
      badges: [],
      location: "korangi, Karachi",
      title: "Junior Frontend Developer",
      logoUrl: "/ecommarketers.png",
      start: "Oct 2024",
      end: "Dec 2024",
      description:
        "Designing and delivering comprehensive lessons on web application development, covering front-end and back-end technologies. Providing hands-on coding exercises, projects, and real-world examples to enhance practical skills",
    },
    {
      company: "Learnify Academy",
      href: "https://learnifyacademy.pk/",
      badges: [],
      location: "Landhi, Karachi",
      title: "Web App Development Instructor",
      logoUrl: "/learnify.png",
      start: "Mar 2024",
      end: "Dec 2024",
      description:
        "Designing and delivering comprehensive lessons on web application development, covering front-end and back-end technologies. Providing hands-on coding exercises, projects, and real-world examples to enhance practical skills",
    },
    {
      company: "Smash Code",
      href: "https://learnifyacademy.pk/",
      badges: [],
      location: "Landhi, Karachi",
      title: "Internship Frontend Developer",
      logoUrl: "/smashcode.png",
      start: "Feb 2024",
      end: "Jun 2024",
      description:
        "Designing and delivering comprehensive lessons on web application development, covering front-end and back-end technologies. Providing hands-on coding exercises, projects, and real-world examples to enhance practical skills",
    },
  ],
  education: [
    {
      school: "Ilma University",
      href: "https://ilmauniversity.edu.pk/",
      degree: "Bachelors of Science in Cyber Security",
      logoUrl: "/ilmaunilogo.jpg",
      start: "2024",
      end: "Present",
    },
    {
      school: "Govt Polytechnic Institute Boys, Landhi",
      href: "https://gpilandhi.com/",
      degree: "DAE in Software Engineering",
      logoUrl: "/gpilandhi.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "LimeLight Digitizing",
      href: "https://limelightdigitizing.net",
      active: true,
      description:
        "I developed a full stack web application for LimeLight Digitizing, a company offering embroidery digitizing, vector art, and custom patch services. The platform allows customers to register, log in, and place orders directly through the website.",
      // description: "LimeLight Digitizing is a platform that provides high-quality embroidery digitizing services for businesses and individuals. With a focus on precision and creativity, we transform your designs into stunning embroidery files ready for production.",
      // "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "React.js",
        "Javascript",
        "Express.js",
        "Mongoose",
        "TailwindCSS",
        "Redux Toolkit",
        "Cloudinary",
        "cors",
        "bcrypt",
      ],
      links: [
        {
          type: "Website",
          href: "https://limelightdigitizing.net/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/limelightdigitizing.png",
      video: "",
    },
  ],
  certificate: [
    {
      title: "Advanced React",
      dates: "July 15th, 2025",
      location: "Meta",
      image: "/meta.png",
      links: "https://coursera.org/share/fd7bf4970da1e36aae6af59ff1d69033",
    },
    {
      title: "Learning Next.js",
      dates: "Feb 24th, 2025",
      location: "Linkedin",
      image: "/linkedin.jpg",
      links:
        "https://www.linkedin.com/learning/certificates/2b324cccc742011113b9c8c2cb7ac1112bc5d31b045781d0cfb2678953edbcdc?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BuCH6LlmhRSy5lSOw9JfkMQ%3D%3D",
    },
    {
      title: "Mern Stack Development",
      dates: "July 15th, 2025",
      location: "Learnify Academy",
      image: "/learnify.png",
      links: "",
    },
    {
      title: "Frontend Development Libraries",
      dates: "Jan 27th, 2025",
      location: "FreeCodeCamp",
      image: "/freecodecamp.png",
      links:
        "https://freecodecamp.org/certification/abdulhaseebsheikh/front-end-development-libraries",
    },
    {
      title: "Javascript Algorithms and Data Structures",
      dates: "Jan 26th, 2025",
      location: "FreeCodeCamp",
      image: "/freecodecamp.png",
      links:
        "https://freecodecamp.org/certification/abdulhaseebsheikh/javascript-algorithms-and-data-structures-v8",
    },
    // {
    //   title: "Responsive Web Design",
    //   dates: "Aug 30th, 2023",
    //   location: "FreeCodeCamp",
    //   image: "/freecodecamp.png",
    //   links:
    //     "https://freecodecamp.org/certification/abdulhaseebsheikh/responsive-web-design",
    // },
  ],
} as const;
