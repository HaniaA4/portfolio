import { useEffect, useState } from "react";
import './App.css';
import Particles from './components/Particles'; 
import FlowingSkills from './components/FlowingSkills'; 
import { ChevronDown } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import emailjs from '@emailjs/browser'; 
import { FaGithub, FaLinkedin } from "react-icons/fa";



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-none"
      >
        {darkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>

      <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50 top-0">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          
          {/* Left section: Logo + Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-2xl font-bold dark:text-white">Hania</a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-colors duration-300 focus:outline-none"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <Sun className="h-6 w-6 text-yellow-200" />
              ) : (
                <Moon className="h-6 w-6 text-blue-600" />
              )}
            </button>
          </div>

          {/* Right section: Navigation links + Mobile toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-8">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#experience', label: 'Experience' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle menu"
              >
                {menuOpen ? '✖️' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`${
            menuOpen
              ? 'flex flex-col absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md z-40'
              : 'hidden'
          } md:hidden`}
        >
          {[
            { href: '#about', label: 'About' },
            { href: '#skills', label: 'Skills' },
            { href: '#projects', label: 'Projects' },
            { href: '#experience', label: 'Experience' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors px-4 py-2"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark:bg-gray-900' : 'bg-white'}`}>
        <main>
          <Hero darkMode={darkMode} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
}

// Hero section

const Hero = ({ darkMode }) => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center pt-24 relative overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-transparent"></div>
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Particles
          particleColors={darkMode ? ['#ffffff'] : ['#4B5563', '#3B82F6']}
          particleCount={200}
          particleSpread={5}
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
          Full Stack Developer & Designer
        </h2>
        <a
          href="#contact"
          className="inline-block bg-blue-500 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all"
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
            I'm a frontend developer and designer passionate about crafting visually striking and user-focused web experiences. With a strong foundation in modern technologies like React, Tailwind CSS, and JavaScript, I bring both structure and storytelling into every interface I build. Driven by curiosity and a love for clean design, I approach development as both an art and a science. From turning wireframes into living, responsive layouts to optimizing usability across devices, my goal is to create digital spaces that feel intuitive and inspiring. Whether I’m collaborating on a team project or building independently, I value clarity, creativity, and code that speaks with purpose. Every line I write is part of a bigger vision – to connect, engage, elevate and ignite the web.
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
  { link: '#', text: 'Tailwind' },
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
  { link: '#', text: 'Canva' },
  { link: '#', text: 'UX/UI' },
  { link: '#', text: 'Design Systems' },
  { link: '#', text: 'Wireframing' },
  { link: '#', text: 'Prototyping' }
];

const toolsSkills = [
  { link: '#', text: 'Git' },
  { link: '#', text: 'GitHub' },
  { link: '#', text: 'VS Code' },
  { link: '#', text: 'Dev-C++' },
  { link: '#', text: 'Notion' },
  { link: '#', text: 'Jira' },
  { link: '#', text: 'Sublime'}
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
        'A platform for families to donate, trade, or sell gently used toys and books—making decluttering easy, sustainable, and filled with childhood magic.',
      github: 'https://github.com/HaniaA4/ToyTale'
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
        'A collaborative front-end Spotify analytics platform designed to provide personalized musical insights and statistics through engaging visuals that reveal unique listening habits.',
      github: 'https://github.com/HaniaA4/GettingOutOfTheHood'
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
              <div className="absolute inset-0 h-full w-full rounded-xl z-0 bg-gradient-to-br from-blue-300 to-blue-400 dark:from-blue-700/30 dark:to-purple-700/30 blur-lg"></div>

              {/* Card content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6 rounded-xl border border-[#1A29FF]/20 shadow-lg bg-[#141F7C]/30 dark:bg-gray-800/50 backdrop-blur-lg">
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
                    className="px-4 py-2 text-sm font-semibold border-2 text-white dark:border-blue-200 rounded-full hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                  >
                    CODE
                  </a>
                  <a
                    href={project.vercel || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 ml-2 text-sm font-semibold border-2 text-white dark:border-blue-200 rounded-full hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
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
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await emailjs.send(
        'service_jupv1wu', //  EmailJS service ID
        'template_ddv3etj', //  EmailJS template ID
        {
          name: form.name,      
          email: form.email,      
          message: form.message 
        },
        'dJZqrxD7rQpMp1oQ-' //  EmailJS public key
      );
      setStatus('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Failed to send. Try again.');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-2xl mx-auto flex flex-col gap-12 items-stretch">
        {/* 👋 Contact Intro (no box) */}
        <div>
          <h2 className="text-4xl text-center font-bold mb-12">Let's Connect</h2>
          <p className="text-lg text-center leading-relaxed mb-2">
            Have a spark of an idea or just curious about my work? Let’s turn that spark into something real — send me a note!
          </p>
          <p className="text-sm text-center">
           
  <div className="flex items-center justify-center space-x-2 whitespace-nowrap text-sm">
              Reach out anytime
              <a
              href="mailto:haniaaziz095@gmail.com"
              className="text-blue-400 hover:text-blue-500 transition-colors duration-200 ml-2 "
              >
                haniaaziz095@gmail.com
              </a>
                <span className="mx-2">|</span>
                <a
                href="https://github.com/HaniaA4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition-colors duration-200"
                >
                  <FaGithub size={20} />
                </a>
                  <span className="mx-2">|</span>
                  <a
                  href="https://www.linkedin.com/in/haniaaziz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    <FaLinkedin size={20} />
                </a>
              
              </div>
            </p>
        </div>

        {/* 📝 Contact Form with Glow */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-xl z-0 bg-gradient-to-br from-blue-700/30 to-purple-700/30 blur-lg"></div>
          <form
            className="relative z-10 space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="dev@email.com"
                className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea
                id="message"
                rows="3"
                value={form.message}
                onChange={handleChange}
                placeholder="Say hello..."
                className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
            >
              Send Message
            </button>
            {status && <p className="text-center mt-2 text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};
export default App;