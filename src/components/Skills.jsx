import './Skills.css';

const categories = [
  {
    title: 'Languages',
    icon: '💻',
    color: 'purple',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    icon: '⚙️',
    color: 'cyan',
    skills: ['React', 'React Native', 'Node.js', 'Express', 'Django', '.NET', 'Flask', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: 'coral',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQL Server', 'Redis'],
  },
  {
    title: 'Tools & Cloud',
    icon: '☁️',
    color: 'green',
    skills: ['AWS', 'Google Cloud', 'Docker', 'Git', 'Linux', 'CI/CD', 'Microservices', 'Agile'],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'linear-gradient(to bottom, var(--bg), var(--bg2), var(--bg))' }}>
      <div className="container">
        <p className="section-label">What I Work With</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-sub">
          A full-stack toolkit sharpened through real production deployments, enterprise clients, and research-grade AI projects.
        </p>
        <div className="skills-grid">
          {categories.map(cat => (
            <div key={cat.title} className={`skill-card skill-card--${cat.color}`}>
              <div className="skill-card-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
