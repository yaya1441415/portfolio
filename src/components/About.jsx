import './About.css';

const stats = [
  { value: '3.6', label: 'GPA · Dean\'s List' },
  { value: '6+', label: 'Projects Shipped' },
  { value: '56%', label: 'Adoption Increase' },
  { value: '2025', label: 'CS Graduate' },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <div className="about-img-wrap">
              <div className="about-img-bg"></div>
              <div className="about-img-inner">
                <span>👨‍💻</span>
              </div>
              <div className="about-img-badge">
                <span>📍</span> Seattle, WA
              </div>
            </div>
          </div>
          <div className="about-right">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Engineer. Founder.<br/>Problem Solver.</h2>
            <p className="about-text">
              I'm a Computer Science &amp; Data Analytics graduate with hands-on
              experience building production-grade systems — from AI-powered recommendation engines to
              a live B2B SaaS platform. I care about writing software that actually ships.
            </p>
            <p className="about-text">
              As the founder of VigorNode and a freelance engineer for enterprise clients, I've designed
              distributed architectures, deployed on AWS/GCP, contributed to open source (LangChain), and
              delivered measurable results. I thrive where code meets real-world impact.
            </p>
            <div className="about-stats">
              {stats.map(s => (
                <div key={s.label} className="stat-card">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
