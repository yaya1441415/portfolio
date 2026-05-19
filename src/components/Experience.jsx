import './Experience.css';

const experiences = [
  {
    role: 'Founder & Full-Stack Engineer',
    company: 'VigorNode',
    period: 'Jan 2025 – Present',
    desc: 'Building an AI-powered trainer platform where coaches register, build custom AI models trained on their coaching style, and deploy agents to handle client coaching at scale. Architected a cross-platform mobile/web app with Expo Router, Supabase auth & PostgreSQL, and a NestJS REST API backend validated with JWT tokens. Auth layer, dashboard UI, and client list are production-ready; AI model training pipeline and chat engine are actively in development.',
    tags: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'Supabase', 'PostgreSQL', 'Node.js'],
    color: 'purple',
  },
  {
    role: 'Freelance Backend Engineer',
    company: 'DAFE Transportation & Enterprise Clients',
    period: 'Jan 2025 – Present',
    desc: 'Designed distributed workflows with cloud-native architecture using Python and Node.js for real-time data processing at scale. Built and deployed scalable microservices with REST APIs, MongoDB, AWS/GCP, and Docker. Increased client adoption by 56%, automated payroll calculations, and reduced manual labour by 13+ hours/week across 4+ enterprise clients.',
    tags: ['Python', 'Node.js', 'AWS', 'GCP', 'Docker', 'MongoDB', 'Microservices'],
    color: 'cyan',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Freelancer',
    period: 'Jan 2025 – Present',
    desc: 'Built a gamified recycling web app (Express, MongoDB, OpenCV) that increased campus recycling by 56%. Developed an Amazon reviews analytics platform (Flask, Selenium, React) processing 10,000+ reviews, reducing manual work by 13 hrs/week.',
    tags: ['React', 'Express', 'Flask', 'MongoDB', 'OpenCV', 'Selenium', 'Python'],
    color: 'coral',
  },
  {
    role: 'Scrum Master & AI Engineer — Team Capstone',
    company: 'Evaid — Legal Case Management Platform',
    period: '2025 – 2026',
    desc: 'Team capstone project: AI-powered legal/investigative case management system. Served as Scrum Master — facilitated sprint planning, standups, retrospectives, and backlog grooming across the team. Owned the entire AI layer: integrated Azure AI Document Intelligence, Azure Vision API, and OpenAI to automatically extract structured signals (key facts & entities) from uploaded PDFs and images.',
    tags: ['Azure AI', 'OpenAI', 'FastAPI', 'Python', 'React 19', 'TypeScript', 'Scrum', 'SQL Server', 'Docker'],
    color: 'coral',
  },
  {
    role: 'CS & Math Tutor',
    company: 'Edmonds College',
    period: 'Jan 2023 – Nov 2023',
    desc: 'Taught 47+ students per quarter in data structures, algorithms, OOP, and system design. Debugged 4,000+ lines of student code per quarter and earned a 4.7/5 satisfaction score.',
    tags: ['Algorithms', 'Data Structures', 'OOP', 'Python', 'Java'],
    color: 'green',
  },
];

const education = {
  degree: 'B.S. Computer Science & Data Analytics',
  school: 'Seattle, WA',
  period: 'Graduating 2026',
  gpa: '3.6 / 4.0',
  honors: "Dean's List",
  extra: 'CS Team — SPU BAJA 2025',
};

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'linear-gradient(to bottom, var(--bg), var(--bg2), var(--bg))' }}>
      <div className="container">
        <p className="section-label">My Journey</p>
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-sub">
          From tutoring classrooms to founding a startup — building real things at every step.
        </p>
        <div className="exp-layout">
          <div className="exp-timeline">
            <h3 className="exp-section-title">Work Experience</h3>
            {experiences.map((e, i) => (
              <div key={i} className={`exp-item exp-item--${e.color}`}>
                <div className="exp-dot"></div>
                <div className="exp-card">
                  <div className="exp-header">
                    <div>
                      <h4 className="exp-role">{e.role}</h4>
                      <div className="exp-company">{e.company}</div>
                    </div>
                    <span className="exp-period">{e.period}</span>
                  </div>
                  <p className="exp-desc">{e.desc}</p>
                  <div className="exp-tags">
                    {e.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="edu-panel">
            <h3 className="exp-section-title">Education</h3>
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <h4 className="edu-degree">{education.degree}</h4>
              <div className="edu-school">{education.school}</div>
              <div className="edu-meta">
                <span className="edu-period">{education.period}</span>
                <span className="edu-gpa">GPA {education.gpa}</span>
              </div>
              <div className="edu-badges">
                <span className="edu-badge-item edu-badge-gold">🏅 {education.honors}</span>
                <span className="edu-badge-item edu-badge-blue">🤖 {education.extra}</span>
              </div>
              <div className="cert-block">
                <p className="edu-courses-title">Internship Alternative — Certification</p>
                <div className="cert-card">
                  <div className="cert-icon">☁️</div>
                  <div>
                    <div className="cert-name">AWS Certified Developer – Associate</div>
                    <div className="cert-code">DVA-C02</div>
                    <div className="cert-desc">
                      Validates expertise in developing, deploying, and debugging cloud-based applications on AWS — including Lambda, DynamoDB, API Gateway, S3, IAM, and CI/CD pipelines.
                    </div>
                    <div className="cert-status">🔄 In progress · 2025</div>
                  </div>
                </div>
              </div>

              <div className="edu-courses">
                <p className="edu-courses-title">Key Courses</p>
                {[
                  'Data Structures & Algorithms',
                  'System Design',
                  'Machine Learning',
                  'Distributed Systems',
                  'Database Systems',
                  'Object-Oriented Programming',
                ].map(c => (
                  <div key={c} className="edu-course-item">
                    <span className="edu-check">✓</span> {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
