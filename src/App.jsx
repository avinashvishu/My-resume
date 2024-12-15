
import './App.css'

function App() {

  const skills = [
    "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    "RESTful API Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "State Management (Redux, Context API)",
    "Authentication & Authorization (JWT, OAuth)",
    "Component-Based Architecture",
    "Middleware Integration",
    "Node.js",
    "WebSockets",
    "Python",
    "API Documentation (Postman)",
    "Framer Motion",
    "JavaScript (ES6+)",
    "TypeScript",
    "Python (for Web Scraping or Backend Tasks)",
    "CSS Frameworks (Tailwind CSS, Bootstrap)",
    "HTML5/CSS3",
    "SCSS",
    "Express.js",
    "Next.js",
  ];
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        {/* Header Section */}
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">V Avinash</h1>
          <p className="text-lg text-gray-600">Full Stack Developer</p>
          <p className="text-gray-500"><a href="mailto:avinashvishu26@gmail.com">avinashvishu26@gmail.com</a>| +91 9113326801 | <a href="https://personal-portfolio-eight-kappa-64.vercel.app/" target='_blank'>https://personal-portfolio-eight-kappa-64.vercel.app/</a></p>
        </header>
    <hr />
        {/* Summary Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Professional Summary</h2>
          <p className="text-gray-600 text-justify">
            Detail-oriented Full Stack Web Developer with experience in building responsive, and user-focused web applications
            using React.js, Next.js, and Node.js. Successfully contributed to projects that improved application performance by
            20% and enhanced user engagement through responsive design and SEO best practices. Adept at optimizing web
            applications for performance and scalability, and proficient in modern web technologies including React.js and Node.js.
            Committed to leveraging cloud tools for streamlined deployment processes and improving user experiences through
            data-driven insights.
          </p>
        </section>
        <hr />
        {/* Education Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
          <div>
            <h3 className="text-xl font-bold text-gray-700">BTech: Electronics And Communications Engineering</h3>
            <p className="text-gray-500">University College of Engineering and Technology, Hazaribagh | Graduated: 2023</p>
          </div>
        </section>
        <hr />
        {/* Work Experience Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Work Experience</h2>

          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-700">Full Stack developer</h3>
            <p className="text-gray-500">mployee.me | Jun 2024 - Present</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 text-left w-full space-y-2 px-2">
              <li>
              Crafted engaging user interfaces utilizing Next.js, enhancing user experience by 60%.
              </li>
              <li>
              Developed and integrated a resume-matching feature that improved candidate-job matching accuracy by 30%,
              leading to a 15% increase in successful placements.
              </li>
              <li>
              Pioneered the adoption of cutting-edge technologies, streamlining development processes and reducing
              deployment time by 30%, while improving code maintainability and scalability.
              </li>
              <li>
              Collaborated with cross-functional teams to discuss, design, and implement website features, ensuring
              alignment with business goals and user needs.
              </li>
              <li>
              Ensured website freshness and relevance by routinely updating content, including text, images, and videos.
              </li>
              <li>
              Enhanced the company’s Landing page by implementing server-side rendering, resulting in a 40% decrease in
              load time and a significant boost in SEO rankings.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-700">Full Stack developer Intern</h3>
            <p className="text-gray-500">Cuvette | Jan 2024 - Apr 2024</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 text-left w-full space-y-2 px-2">
              <li>
              Enhanced proficiency in core web development skills like HTML, CSS, and JavaScript, leading to a 25%
improvement in coding efficiency and delivering responsive designs within tight deadlines.
              </li>
              <li>
              Studied the front-end framework React.js and built responsive user interfaces, improving component reusability
              by 40% and reducing development time by 60% for future projects.
              </li>
              <li>
              Explored API integration, enabling seamless data exchange and reducing integration time by 20%.
              </li>
              <li>
              Developed strong skills in backend development utilizing technologies like Node.js and Express.js.
              </li>
              <li>
              Designed and implemented an end-to-end solution with up-to-date web technologies.
              </li>
            </ul>
          </div>
        </section>
        <hr />

        {/* Skills Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
          <ul className="grid grid-cols-4 gap-4 text-gray-600 text-left pl-6 list-disc">
          {skills.map((skill, index) => (
      <li  key={index}>{skill}</li>
    ))}
          </ul>
        </section>
 
      </div>
    </>
  )
}

export default App
