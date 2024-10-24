import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('experience')
  const [typedText, setTypedText] = useState('')
  const fullText = "Software Engineer"

  useEffect(() => {
    let i = 0
    let isDeleting = false
    let isHolding = false
    const holdDuration = 1000 // 1 second in milliseconds

    const typingInterval = setInterval(() => {
      if (!isDeleting && !isHolding && i <= fullText.length) {
        setTypedText(fullText.slice(0, i))
        i++
        if (i > fullText.length) {
          isHolding = true
          setTimeout(() => {
            isHolding = false
            isDeleting = true
          }, holdDuration)
        }
      } else if (isDeleting && i >= 0) {
        setTypedText(fullText.slice(0, i))
        i--
      }

      if (i === 0 && isDeleting) {
        isDeleting = false
        i = 1
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 animate-fadeIn">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Kushagra Bhardwaj</h1>
            <p className="mt-2 text-xl">
              <span className="typing-cursor">{typedText}</span>
              <span className="animate-blink">|</span>
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="mailto:kushagrabhardwaj.126@gmail.com" className="flex items-center hover:text-blue-200 transition-colors duration-300">
                <Mail className="w-5 h-5 mr-2" />
                kushagrabhardwaj.126@gmail.com
              </a>
              <a href="tel:+919650106081" className="flex items-center hover:text-blue-200 transition-colors duration-300">
                <Phone className="w-5 h-5 mr-2" />
                +91 9650106081
              </a>
            </div>
            <div className="mt-4 flex space-x-4">
              <a href="https://github.com/kushagra-bhardwaj2004" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200 transition-colors duration-300">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a href="https://linkedin.com/in/damnitkush" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200 transition-colors duration-300">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="https://media.licdn.com/dms/image/D4D03AQHXnXZXXXXXXX/profile-displayphoto-shrink_800_800/0/1708000000000?e=1715212800&v=beta&t=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
              alt="Kushagra Bhardwaj"
              width={200}
              height={200}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </header>

      <nav className="bg-white shadow">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4 py-4">
            {['experience', 'education', 'projects', 'skills', 'achievements'].map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 rounded-md transition-all duration-300 ease-in-out ${
                    activeTab === tab 
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                      : 'text-gray-600 hover:bg-gray-200 hover:shadow'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'experience' && (
          <section className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
                <p className="text-gray-600">National Informatics Centre (NIC) | Mar 2024 – Apr 2024</p>
                <ul className="mt-2 list-disc list-inside">
                  <li>Created a user-centric portal managing over 1,000 orders for the High Court of Delhi.</li>
                  <li>Designed and implemented an adaptive user interface using React.Js, achieving a 35% increase in user experience.</li>
                  <li>Engineered backend functionalities using Node.Js and Express.Js, created 15+ API endpoints, and integrated MongoDB, resulting in a 40% improvement in data retrieval times.</li>
                </ul>
                <p className="mt-2 text-sm text-gray-500">Tech Stack: JavaScript, React.Js, Node.Js, Express.Js, MongoDB, Mongoose, JWT, Tailwind CSS</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
                <p className="text-gray-600">FastCurve Services Pvt. Ltd. | Dec 2023 – Feb 2024</p>
                <ul className="mt-2 list-disc list-inside">
                  <li>Worked on a Web Product managing the end-to-end lifecycle of event lead, management, and invoicing.</li>
                  <li>Collaborated with Angular.Js to enhance product scalability and implement various components.</li>
                  <li>Enhanced backend functionality with Spring Boot, improving API response times by 10%.</li>
                  <li>Leveraged DBeaver for data management, reducing maintenance time by 15%.</li>
                </ul>
                <p className="mt-2 text-sm text-gray-500">Tech Stack: HTML, CSS, Angular.Js, Spring Boot, DBeaver</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'education' && (
          <section className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Delhi Technological University</h3>
                <p className="text-gray-600">B.Tech in Electronics and Communication Engineering | Dec 2021 - Jun 2025</p>
                <p className="mt-2">CGPA - 8.29</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">Arwachin Bharti Bhawan School</h3>
                <p className="text-gray-600">New Delhi, India | Mar 2021</p>
                <p className="mt-2">Class 12th - 90.8% | Class 10th - 91.2%</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'projects' && (
          <section className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold">StudyNotion</h3>
                <p className="text-gray-600">Dec 2023 – Jan 2024</p>
                <ul className="mt-2 list-disc list-inside">
                  <li>Developed an advanced Ed-Tech platform using MERN stack.</li>
                  <li>Built responsive frontend using React.Js and Tailwind, integrating Redux Toolkit, reducing latency by 25%.</li>
                  <li>Leveraged Cloudinary for efficient video and image storage and integrated Nodemailer for automated notifications.</li>
                </ul>
                <div className="mt-2 flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" /> Link
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                    <Github className="w-4 h-4 mr-1" /> GitHub
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold">Mindmate</h3>
                <p className="text-gray-600">Nov 2023</p>
                <ul className="mt-2 list-disc list-inside">
                  <li>Facilitated a comprehensive mental well-being prototype for overall mental health support.</li>
                  <li>Utilized React.Js for client interface and implemented real-time anonymous chat sessions with Socket.io.</li>
                  <li>Scraped and processed a dataset of 35,685 facial expressions to recognize emotions.</li>
                </ul>
                <div className="mt-2 flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" /> Demo
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                    <Github className="w-4 h-4 mr-1" /> GitHub
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold">CryptoKaro</h3>
                <p className="text-gray-600">Jun 2023 – Jul 2023</p>
                <ul className="mt-2 list-disc list-inside">
                  <li>Deployed a web application providing rankings and information on 100+ diverse digital assets.</li>
                  <li>Composed a responsive user interface using React.Js and Chakra UI along with 10+ REST API integration.</li>
                </ul>
                <div className="mt-2 flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" /> Link
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                    <Github className="w-4 h-4 mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'skills' && (
          <section className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="transition-all duration-300 hover:bg-gray-100 p-2 rounded">
                  <h3 className="font-semibold">Languages</h3>
                  <p>C, C++, Java, HTML/CSS, JavaScript, TypeScript, SQL, Python</p>
                </div>
                <div className="transition-all duration-300 hover:bg-gray-100 p-2 rounded">
                  <h3 className="font-semibold">Libraries/Frameworks</h3>
                  <p>React.Js, Node.Js, Express.Js, Angular.Js, Next.Js, Tailwind CSS, Spring Boot</p>
                </div>
                <div className="transition-all duration-300 hover:bg-gray-100 p-2 rounded">
                  <h3 className="font-semibold">Developer Tools</h3>
                  <p>Git, GitHub, VS Code, Sublime Text, IntelliJ, Postman, DBeaver, MongoDB, Firebase, MySQL</p>
                </div>
                <div className="transition-all duration-300 hover:bg-gray-100 p-2 rounded">
                  <h3 className="font-semibold">Operating Systems and Software</h3>
                  <p>MacOS, Windows, Google Search Engine, ChatGPT</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'achievements' && (
          <section className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">Academic Achievements</h2>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <ul className="list-disc list-inside space-y-2">
                <li className="transition-all duration-300 hover:translate-x-2">
                  Solved 1400+ DSA problems across{' '}
                  <a href="https://leetcode.com/u/kushagra_bhardwaj_2004" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    LeetCode
                  </a>{' '}
                  and{' '}
                  <a href="https://www.geeksforgeeks.org/user/kushagra_bhardwaj2004/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    GeeksforGeeks
                  </a>
                  , ranking 9102 on LeetCode.
                </li>
                <li className="transition-all duration-300 hover:translate-x-2">Achieved Global Rank 1473 in Leetcode Biweekly Contest 123 out of 27,608 participants.</li>
                <li className="transition-all  duration-300 hover:translate-x-2">Ranked 220 in GeeksforGeeks Institute Rankings out of 12135 candidates.</li>
                <li className="transition-all duration-300 hover:translate-x-2">Led a team of three members to secure Rank 1 in Coding Decryption Contest organized by Round Table DTU.</li>
                <li className="transition-all duration-300 hover:translate-x-2">Achieved a Top 10 finish in Hack-Out 2023, organized by Head Out.</li>
                <li className="transition-all duration-300 hover:translate-x-2">Ranked in the top 0.5% of teams across India in Flipkart's Grid 5.0 hackathon.</li>
                <li className="transition-all duration-300 hover:translate-x-2">Secured AIR-19801 in JEE MAIN 2021.</li>
              </ul>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Kushagra Bhardwaj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
