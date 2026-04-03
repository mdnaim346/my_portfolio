import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "ERP Solution",
      desc: "Developed a professional Odoo-based ERP solution tailored for business automation and workflow optimization. Focused on scalability, clean architecture, and efficient data handling.",
      img: "/project1.jpg",
    },
    {
      title: "Ecommerce Website",
      desc: "Customized Odoo modules for garment workflow including cloth tracking and order processing. Improved business efficiency by automating manual operations.",
      img: "/project2.jpg",
    },
    {
      title: "Task Management System",
      desc: "Built a task management system with role-based access and workflow control. Helped teams manage tasks efficiently with clear visibility.",
      img: "/project3.jpg",
    },
    {
      title: "Project Management System",
      desc: "Designed a project tracking system with task assignment and progress monitoring. Ensured better team collaboration and productivity.",
      img: "/project4.jpg",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #eef2ff, #f8fafc)",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <motion.img
            src="/profile.jpg"
            alt="profile"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "15px",
              border: "4px solid white",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            }}
          />
          <h1 style={{ fontSize: "38px", fontWeight: "bold" }}>Naim Reza</h1>
          <p style={{ fontSize: "18px", color: "#555" }}>
            Odoo Full Stack Developer
          </p>
          <p style={{ fontSize: "14px", color: "#777" }}>
            8 Months Experience at IT Scholar | Odoo • OWL JS • .NET •
            PostgreSQL
          </p>
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "16px",
            marginBottom: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h2>About Me</h2>
          <p>
            I am a dedicated Odoo Full Stack Developer with real industry
            experience working on ERP systems at IT Scholar. I specialize in
            developing scalable and efficient business solutions using Odoo,
            focusing on both backend logic and modern OWL JS frontend.
          </p>
          <p style={{ marginTop: "10px" }}>
            I enjoy solving complex problems, optimizing workflows, and
            delivering clean, maintainable code. My goal is to help businesses
            automate processes and achieve higher productivity through
            technology.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "16px",
            marginBottom: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h2>Skills</h2>
          {[
            "Odoo Development",
            "OWL JS",
            "Python",
            "PostgreSQL",
            "REST API (.NET Core)",
            "JavaScript / Angular",
          ].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              style={{ marginTop: "8px" }}
            >
              ✔ {skill}
            </motion.div>
          ))}
        </motion.div>

        {/* Projects */}
        <div style={{ marginBottom: "20px" }}>
          <h2>Projects</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.03 }}
                style={{
                  background: "white",
                  padding: "15px",
                  borderRadius: "12px",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.05)",
                }}
              >
                <img
                  src={p.img}
                  alt="project"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <h3 style={{ marginTop: "10px" }}>{p.title}</h3>
                <p style={{ color: "#666" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "16px",
            marginBottom: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h2>Education</h2>
          <p>
            Secondary School Certificate (SSC) – Nachole Upazila School (2017){" "}
            <br />
            <span style={{ color: "#666" }}>GPA: 5.00</span>
          </p>

          <p style={{ marginTop: "10px" }}>
            Higher Secondary Certificate (HSC) – Nachole Govt College (2019){" "}
            <br />
            <span style={{ color: "#666" }}>GPA: 5.00</span>
          </p>

          <p style={{ marginTop: "10px" }}>
            Bachelor of Science in Computer Science and Engineering (CSE) <br />
            <span style={{ color: "#666" }}>CGPA: 3.62</span>
          </p>

          <p style={{ marginTop: "10px", color: "#666" }}>
            Strong foundation in software development, data structures, and
            system design.
          </p>
        </motion.div>

        {/* Contact */}
        {/* Contact */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "16px",
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h2>Contact Me</h2>
          <p>Available for freelance work</p>

          <p style={{ marginTop: "10px" }}>
            📧 Email:{" "}
            <a
              href="mailto:your-email@gmail.com"
              style={{ color: "#4f46e5", textDecoration: "none" }}
            >
              your-email@gmail.com
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a
              href="tel:+880123456789"
              style={{ color: "#4f46e5", textDecoration: "none" }}
            >
              +880123456789
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/naim-reza66/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4f46e5", textDecoration: "none" }}
            >
              Naim Reza
            </a>
          </p>
          <p>
            🔗 Facebook:{" "}
            <a
              href="https://www.facebook.com/NaimReza.CSE.PUST"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4f46e5", textDecoration: "none" }}
            >
              Naim Reza
            </a>
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              marginTop: "15px",
              padding: "12px 25px",
              borderRadius: "8px",
              border: "none",
              background: "#4f46e5",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Hire Me on Fiverr
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
