import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Skill from './Skill'
import Project from './Project'
import Introduction from './Introduction'
import Qualification from './Qualification'
import Hobbies from './Hobbies'
import Experience from './Experience'
import Contact from './Contact'
import About from './About'



function App() {

    const skill = {
      HTML : " Proficient in HTML5 for creating structured and scalable web layouts.",
      CSS  : "Proficient in CSS3 and Tailwind CSS for building responsive UI designs.",
      JAVASCRIPT : "Strong understanding of JavaScript including DOM manipulation and ES6 features.",
      REACT : "Able to create simple UI using React and JSX."
    }
    const projects = [
      {
        name : "Tribute Page",
        description : "A simple tribute page created using HTML and CSS to showcase design and layout skills.",
        link : "/01/tribute.html"
      },
      {
        name : "Netflix Clone",
        description : "A responsive Netflix landing page clone built using HTML and CSS, replicating the UI design, layout, and styling of the original platform.",
        link : "/02/netflix.html"
      }
    ]

    const intro = {
      name : "Rohit Sisodiya",
      introduction : "a BCA graduate and a MERN Stack Developer. I specialize in building full-stack web applications using technologies like React.js, Node.js, Express.js, and MongoDB. Currently, I am working as a MERN Stack Developer Intern at Regex Software Services, where I am gaining hands-on experience in real-world projects. I am passionate about coding, problem-solving, and continuously improving my skills to become a better developer."
    };

    const qualification = [
  {
    level: "10th",
    courseName: "Secondary Education",
    institute: "Saraswati Shishu Niketan",
    year: "2020"
  },
  {
    level: "12th",
    courseName: "Senior Secondary Education",
    institute: "Jaipur Cambridge School",
    stream: "Science",
    year: "2022"
  },
  {
    level: "BCA",
    courseName: "Bachelor of Computer Applications",
    institute: "University Commerce College",
    extra: "University of Rajasthan",
    year: "2022 - 2025"
  }
]
  const hobbies = [ "💻 Coding & Building Web Projects", "🧠 Problem Solving & Debugging", "🌐 Exploring New Tech Tools", "🚀 Learning Through Real Projects", "🎨 UI/UX Experimentation"
  ]

  const experience = [{
    role : "MERN Stack Developer Intern",
    company : "Regex Software Services",
    duration : "Regex Software Services",
    points: [
      "Built responsive UI using React and Tailwind CSS",
      "Worked with Node.js, Express, and MongoDB",
      "Contributed to real-world projects and debugging"
    ]
  }]

  const about = {
  name: "Rohit Sisodiya",
  role: "Aspiring Full-Stack Developer",

  description: [
    "I am Rohit Sisodiya, an aspiring full-stack developer who enjoys turning ideas into real web applications. My journey in web development started with curiosity about how websites work, which gradually grew into a strong interest in building user-friendly and responsive applications.",

    "Through my academic background and hands-on internship experience, I have developed practical skills in modern web technologies. I enjoy working on projects, experimenting with UI designs, and solving real-world problems through code.",

    "I am always motivated to learn new technologies, improve my development skills, and grow as a professional in the tech industry."
  ],

  social: {
    github: "https://github.com/rohitsisodiya07",
    linkedin: "https://www.linkedin.com/in/rohit-sisodiya25/"
  }
}

  return (

      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Skill mySkill = {skill}/>}/>
        <Route path='/Project' element={<Project project = {projects}/>}/>
        <Route path='/Introduction' element={<Introduction intro = {intro}/>}/>
        <Route path='/Qualification' element={<Qualification qualification = {qualification}/>}/>
        <Route path='/Hobbies' element={<Hobbies hobbies = {hobbies}/>}/>
        <Route path='/Experience' element={<Experience experience = {experience}/>}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/About' element={<About about = {about}/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
