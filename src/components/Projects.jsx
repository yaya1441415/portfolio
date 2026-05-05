import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'VigorNode — AI Trainer Platform',
    desc: 'Startup: trainers build custom AI models trained on their coaching style and deploy agents to handle client coaching at scale. Cross-platform mobile/web app (iOS, Android, Web) with Expo Router, Supabase auth, PostgreSQL, and a NestJS REST API. Auth, dashboard, and client list are live — AI training pipeline actively in development.',
    tags: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'Supabase', 'PostgreSQL', 'Node.js'],
    color: 'purple',
    emoji: '💪',
    github: 'https://github.com/yaya1441415',
    live: null,
    highlight: true,
    label: 'Startup',
  },
  {
    title: 'Pair — B2B Workflow SaaS',
    desc: 'Production B2B SaaS platform for transportation & field-service companies. Replaces spreadsheets and paper with mobile-first digital timesheets, service reports, and admin dashboards. Serving real paying clients.',
    tags: ['React Native', 'TypeScript', 'Node.js', 'AWS Lambda', 'DynamoDB', 'GraphQL', 'AppSync'],
    color: 'purple',
    emoji: '🚛',
    github: 'https://github.com/yaya1441415',
    live: null,
    highlight: true,
    label: 'Production · Freelance',
  },
  {
    title: 'Local RAG Pipeline',
    desc: 'Fully local, zero-cost RAG system — upload PDFs and chat with them. No OpenAI, no API keys. Uses Ollama (llama3.2 + nomic-embed-text) for embeddings and generation, Qdrant as the vector store, and Inngest for background job orchestration.',
    tags: ['FastAPI', 'Python', 'Qdrant', 'Ollama', 'Streamlit', 'LlamaIndex', 'Inngest'],
    color: 'cyan',
    emoji: '🧠',
    github: 'https://github.com/yaya1441415',
    live: null,
  },
  {
    title: 'AI Movie Recommendation Engine',
    desc: 'Low-latency semantic recommendation engine using Sentence-BERT embeddings and FAISS ANN indexing across 40k+ movies. MiniBatch K-Means clustering organises embeddings into topic groups for improved retrieval accuracy.',
    tags: ['React', 'Python', 'MongoDB', 'FAISS', 'Sentence-BERT', 'ML'],
    color: 'coral',
    emoji: '🎬',
    github: 'https://github.com/yaya1441415',
    live: null,
  },
  {
    title: 'Document Summarization Platform',
    desc: 'Polyglot microservices system — React frontend, Node.js API gateway, Python NLP service — for low-latency document ingestion and AI summarisation at scale. DOCX parsing via Multer + Mammoth.js.',
    tags: ['React', 'Node.js', 'Python', 'MongoDB', 'NLP', 'Microservices'],
    color: 'green',
    emoji: '📄',
    github: 'https://github.com/yaya1441415',
    live: null,
  },
  {
    title: 'Amazon Reviews Analytics Platform',
    desc: 'Full-stack analytics dashboard scraping and processing 10,000+ Amazon reviews via Selenium, running sentiment analysis, and visualising insights — reducing manual research by 13 hrs/week.',
    tags: ['Flask', 'Selenium', 'React', 'Python', 'NLP', 'JavaScript'],
    color: 'purple',
    emoji: '📊',
    github: 'https://github.com/yaya1441415',
    live: null,
  },
  {
    title: 'Gamified Recycling Web App',
    desc: 'Campus recycling platform using OpenCV to detect and classify items with a gamification layer that increased campus recycling participation by 56%.',
    tags: ['Express', 'MongoDB', 'OpenCV', 'Python', 'JavaScript'],
    color: 'cyan',
    emoji: '♻️',
    github: 'https://github.com/yaya1441415',
    live: null,
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">
          From local AI pipelines to production B2B SaaS — each project ships real value.
        </p>

        <div className="oss-banner">
          <span className="oss-icon">🔗</span>
          <div>
            <span className="oss-title">Open Source Contribution</span>
            <span className="oss-desc"> — Active contributor to <strong>LangChain</strong>, currently merged into the main library.</span>
          </div>
          <a href="https://github.com/langchain-ai/langchain" target="_blank" rel="noreferrer" className="oss-link">
            View on GitHub →
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`project-card project-card--${p.color} ${hovered === i ? 'hovered' : ''} ${p.highlight ? 'project-card--featured' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {p.highlight && <div className="project-featured-badge">{p.label || 'Featured'}</div>}
              <div className="project-top">
                <div className="project-emoji">{p.emoji}</div>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <a href="https://github.com/yaya1441415" target="_blank" rel="noreferrer" className="view-more-btn">
            View all on GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
