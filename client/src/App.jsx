// App.jsx

import { useState, useEffect } from 'react';
import './App.css';
import Particles from './components/Particles'; // Adjust the path as necessary
import FlowingSkills from './components/FlowingSkills'; // Place after other imports
import { ChevronDown } from "lucide-react";




function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved preference or use system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply dark mode class and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark:bg-gray-900' : 'bg-white'}`}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />


      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

// NavBar section

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold dark:text-white">Hania</a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">About</a>
          <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Skills</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Projects</a>
          <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Experience</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Contact</a>
        </div>
        
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

// Hero section

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center pt-24 relative overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10"></div>
<div style={{ width: '100%', height: '100%', position: 'absolute' }}>


        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Hero Content */}
      <div className="text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold dark:text-white mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Hania</span>
        </h1>
        <h2 className="text-2xl md:text-3xl dark:text-gray-300 mb-8">
          Frontend Developer / Web Designer
        </h2>
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all"
        >
          Let's Build Together!
        </a>
      </div>
    </section>
  );
};

// About section

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold dark:text-white text-center mb-8">About Me</h2>
      <div className="flex justify-center">
        <div className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed text-lg max-w-5xl">
          <p>
            I'm a frontend developer and designer passionate about crafting visually striking and user-focused web experiences. With a strong foundation in modern technologies like React, Tailwind CSS, and JavaScript, I bring both structure and storytelling into every interface I build. Driven by curiosity and a love for clean design, I approach development as both an art and a science. From turning wireframes into living, responsive layouts to optimizing usability across devices, my goal is to create digital spaces that feel intuitive and inspiring. Whether I’m collaborating on a team project or building independently, I value clarity, creativity, and code that speaks with purpose. Every line I write is part of a bigger vision!
          </p>
        </div>
      </div>
    </section>
  );
};

// Skills section

const frontendSkills = [
  { link: '#', text: 'HTML5' },
  { link: '#', text: 'CSS' },
  { link: '#', text: 'JavaScript' },
  { link: '#', text: 'React' },
  { link: '#', text: 'Tailwind CSS' },
  { link: '#', text: 'TypeScript' },
  { link: '#', text: 'Next.js' },
];
const backendSkills = [
  { link: '#', text: 'Node.js' },
  { link: '#', text: 'Express.js' },
  { link: '#', text: 'MongoDB'},
  { link: '#', text: 'SQL'},
  { link: '#', text: 'REST APIs' },
  { link: '#', text: 'SQLite' }
];

const designSkills = [
  { link: '#', text: 'Figma' },
  { link: '#', text: 'Canva' }
];

const toolsSkills = [
  { link: '#', text: 'Git' },
  { link: '#', text: 'GitHub' },
  { link: '#', text: 'VS Code' },
  { link: '#', text: 'Dev-C++' },
  { link: '#', text: 'Notion' },
  { link: '#', text: 'Jira' }
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold dark:text-white mb-8 text-center">My Skills</h2>

      {/* Frontend */}
      <div className="mb-1">
        <h3 className="text-2xl font-semibold dark:text-white ">Frontend Stack</h3>
        <div style={{ height: '70px', position: 'relative', mb: '20px' }}>
          <FlowingSkills items={frontendSkills} />
        </div>
      </div>

      {/* Backend */}
      <div className="mb-1">
        <h3 className="text-2xl font-semibold dark:text-white ">Backend Stack</h3>
        <div style={{ height: '70px', position: 'relative', mb: '20px' }}>
          <FlowingSkills items={backendSkills} />
        </div>
      </div>

      {/* Design */}
      <div> 
        <h3 className="text-2xl font-semibold dark:text-white ">Design</h3>
        <div style={{ height: '70px', position: 'relative', mb: '20px' }}>
          <FlowingSkills items={designSkills} />
        </div>
      </div>

      { /* Tools */}
      <div>
        <h3 className="text-2xl font-semibold dark:text-white ">Tools</h3>
        <div style={{ height: '70px', position: 'relative', mb: '20px' }}>
          <FlowingSkills items={toolsSkills} />
        </div>
      </div>
    </section>
  );
};

// Projects section

const Projects = () => {
  const projects = [
    {
      title: 'Toytale',
      image: '/toytale.jpg',
      description:
        'Developed an interactive peer-to-peer learning app where users trade skills and learn from each other.',
      code: 'https://github.com/HaniaA4/ToyTale'
    },
    {
      title: 'SkillSwap',
      image: '/skillswap.jpg',
      description:
        'Developed a mobile app that connects families to easily share, lend, and exchange childrens toys and books, fostering a sustainable and collaborative community.',
        github: 'https://github.com/HaniaA4/SkillSwap'
    },
    {
      title: 'Spotidados',
      image: '/spotidados.jpg',
      description:
        'A collaborative Figma-style editor built for seamless UI mockup sharing. Includes multi-user preview mode and SVG export.',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold dark:text-white text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 overflow-visible">
          {projects.map((project, index) => (
            <div key={index} className="relative h-[400px]">
              {/* Glow effect */}
              <div className="absolute inset-0 h-full w-full rounded-xl z-0 bg-gradient-to-br from-blue-700/30 to-purple-700/30 blur-lg"></div>

              {/* Card content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6 rounded-xl border border-[#1A29FF]/20 shadow-lg bg-[#141F7C]/30 dark:bg-gray-800/50 backdrop-blur-md">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm flex-grow">{project.description}</p>
                <div className="mt-4 flex justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    CODE
                  </a>
                  <a
                    href={project.vercel || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 ml-2 text-sm font-semibold border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    PREVIEW
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience section


const timelineData = [
{
    type: "Experience",
    title: "Junior Full Stack Developer",
    location: "Bytes4Future – Portugal",
    date: "2025",
    details: [
      "Developed scalable, full-stack web applications.",
      "Worked with web technologies like HTML, CSS, JavaScript, React, NodeJS, MongoDB, SQL.",
      "Won the Bytes4Future Hackathon with an incredible team, by creating an innovative app.",
    ],
  },
  {
    type: "Experience",
    title: "SOS Children's Villages",
    location: "Pakistan",
    date: "2023",
    details: [
      "Nurtured learning and well-being in child-focused environments.",
      "Empowered youth with leadership and responsibility.",
      "Designed academic and teamwork programs."
    ],
  },
  {
    type: "Education",
    title: "FSc (Pre-Medical)",
    location: "Punjab Group of Colleges – Pakistan",
    date: "2021 – 2023",
    details: [""],
  },
  {
    type: "Education",
    title: "Cambridge O-Levels",
    location: "Jinnah High School System – Pakistan",
    date: "2019 – 2021",
    details: [""],
  },
  {    
    type: "Experience",
    title: "Senior Guide ",
    location: "Aga Khan Youth and Sports Board – Pakistan",
    date: "2012 – 2023",
    details: [
      "Guided and mentored youth through leadership roles.",
      "Organized events and camps to promote team spirit.",
      "Led youth teams in collaborative activities and skill-building."
    ],
  }
  
];

export  function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold dark:text-white text-center mb-12">
        Experience & Education
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <div>
                <h3 className="text-lg font-semibold dark:text-white">
                  {item.title}{" "}
                  <span className="text-gray-500 dark:text-gray-400">
                    – {item.location}
                  </span>
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {item.date}
                </p>
                <p className="text-xs text-gray-400 uppercase">{item.type}</p>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Accordion Content */}
            {openIndex === index && (
              <div className="p-4 border-t dark:border-gray-700 animate-fadeIn">
                {item.details && item.details.filter(Boolean).length > 0 ? (
      <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-200">
        {item.details.map((point, i) =>
          point ? <li key={i}>{point}</li> : null
        )}
      </ul>
    ) : (
      <p className="text-gray-500 italic">No additional details.</p>
    )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact section
const Contact = () => (
  <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <div className="max-w-2xl mx-auto flex flex-col gap-12 items-stretch">
      {/* 👋 Contact Intro (no box) */}
      <div>
        <h2 className="text-4xl text-center font-bold mb-12">Let's Connect</h2>
        <p className="text-lg text-center leading-relaxed mb-2">
          Have a spark of an idea or just curious about my work? Let’s turn that spark into something real — send me a note!
        </p>
        <p className="text-sm text-center">
          Email me at{" "}
          <a
            href="mailto:haniaaziz095@gmail.com"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-200"
          >
            haniaaziz095@gmail.com
          </a>
        </p>
      </div>
      {/* 📝 Contact Form with Glow */}
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl z-0 bg-gradient-to-br from-blue-700/30 to-purple-700/30 blur-lg"></div>
        <form className="relative z-10 space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="dev@email.com"
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">Message</label>
            <textarea
              id="message"
              rows="3"
              placeholder="Say hello..."
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);
export default App;