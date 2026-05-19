import { useState } from 'react';
import './Projects.css';

import imgRecycling   from '../assets/Screenshot 2025-03-29 040758.png';
import imgAzure       from '../assets/Screenshot 2025-05-16 112355.png';
import imgAmazon      from '../assets/Screenshot 2025-09-03 220745.png';
import imgMovie       from '../assets/Screenshot 2025-09-05 165909.png';
import imgDocSummary  from '../assets/Screenshot 2025-09-05 004537.png';
import imgEvaid       from '../assets/Screenshot 2026-05-05 145147.png';
import imgPair        from '../assets/WhatsApp Image 2026-05-05 at 2.03.57 PM.jpeg';

const projects = [
  {
    title: 'VigorNode — AI Trainer Platform',
    desc: 'B2B SaaS startup: trainers build custom AI models trained on their coaching style and deploy agents to handle client coaching at scale — replacing manual 1:1 messaging.',
    challenge: 'Designing a multi-tenant architecture where each trainer\'s AI model is isolated, versioned, and deployable on demand without cold-start latency.',
    tags: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'Supabase', 'PostgreSQL', 'Node.js'],
    color: 'purple',
    emoji: '💪',
    github: 'https://github.com/yaya1441415',
    live: null,
    highlight: true,
    label: 'Startup',
    teamLabel: 'Solo',
    role: 'Founder & Lead Engineer — architecture, frontend, backend',
    image: null,
    featured: true,
  },
  {
    title: 'Pair — B2B Workflow SaaS',
    desc: 'Production B2B SaaS for transportation & field-service companies. Replaces spreadsheets and paper with mobile-first digital timesheets, service reports, and mileage tracking. Serving real paying clients (DAFE Transportation).',
    challenge: 'Building a serverless architecture that scales per-company with strict data isolation, while remaining simple enough for non-technical field workers to use without training.',
    tags: ['React Native', 'TypeScript', 'Node.js', 'AWS Lambda', 'DynamoDB', 'GraphQL', 'AppSync'],
    color: 'cyan',
    emoji: '🚛',
    github: 'https://github.com/yaya1441415',
    live: null,
    highlight: true,
    label: 'Production · Freelance',
    teamLabel: 'Solo',
    role: 'Sole developer — full stack, cloud infrastructure, client delivery',
    image: imgPair,
    featured: true,
  },
  {
    title: 'Evaid — Legal Case Management Platform',
    desc: 'Team capstone: AI-powered legal/investigative case management system that ingests PDFs and images, runs Azure AI pipelines to extract structured signals, and maps evidence relationships in an interactive graph.',
    challenge: 'Coordinating an async evidence ingestion worker loop that reliably processes documents through multiple AI services (Document Intelligence → Vision → OpenAI) without data loss or race conditions.',
    tags: ['React 19', 'TypeScript', 'FastAPI', 'Azure AI', 'OpenAI', 'SQL Server', 'Docker', '@xyflow/react'],
    color: 'coral',
    emoji: '⚖️',
    github: 'https://github.com/yaya1441415',
    live: null,
    highlight: true,
    label: 'Capstone',
    teamLabel: 'Team',
    role: 'Scrum Master & AI Engineer — led sprints, owned Azure AI Document Intelligence, Azure Vision, OpenAI signal extraction pipeline',
    image: imgEvaid,
    featured: true,
  },
  {
    title: 'Local RAG Pipeline',
    desc: 'Fully local, zero-cost RAG system — upload PDFs and chat with them. No OpenAI, no API keys. Uses Ollama (llama3.2 + nomic-embed-text) for embeddings and generation, Qdrant as the vector store, and Inngest for background job orchestration.',
    challenge: 'Achieving acceptable response latency with a fully local LLM stack on consumer hardware by tuning chunk size, top-k retrieval, and model quantization.',
    tags: ['FastAPI', 'Python', 'Qdrant', 'Ollama', 'Streamlit', 'LlamaIndex', 'Inngest'],
    color: 'green',
    emoji: '🧠',
    github: 'https://github.com/yaya1441415',
    live: null,
    teamLabel: 'Solo',
    role: 'Sole developer — pipeline design, backend, frontend',
    image: null,
    featured: true,
  },
  {
    title: 'AI Movie Recommendation Engine',
    desc: 'Low-latency semantic recommendation engine using Sentence-BERT embeddings and FAISS ANN indexing across 40k+ movies. MiniBatch K-Means clustering organises embeddings into topic groups for improved retrieval accuracy.',
    tags: ['React', 'Python', 'MongoDB', 'FAISS', 'Sentence-BERT', 'ML'],
    color: 'coral',
    emoji: '🎬',
    github: 'https://github.com/yaya1441415',
    live: null,
    teamLabel: 'Solo',
    role: 'Sole developer — ML pipeline, backend API, React frontend',
    image: imgMovie,
    featured: false,
  },
  {
    title: 'Azure Optimizer',
    desc: 'Web platform connecting to Azure accounts to surface real-time usage insights and automatically allocate and scale cloud resources — maximising performance while minimising costs.',
    tags: ['React', 'TypeScript', 'Azure', 'Node.js'],
    color: 'cyan',
    emoji: '☁️',
    github: 'https://github.com/yaya1441415',
    live: null,
    teamLabel: 'Solo',
    role: 'Sole developer — Azure integration, dashboard, resource scheduling',
    image: imgAzure,
    featured: false,
  },
  {
    title: 'Document Summarization Platform',
    desc: 'Polyglot microservices system — React frontend, Node.js API gateway, Python NLP service — for low-latency document ingestion and AI summarisation at scale. DOCX parsing via Multer + Mammoth.js.',
    tags: ['React', 'Node.js', 'Python', 'MongoDB', 'NLP', 'Microservices'],
    color: 'purple',
    emoji: '📄',
    github: 'https://github.com/yaya1441415',
    live: null,
    teamLabel: 'Solo',
    role: 'Sole developer — microservices architecture, NLP integration',
    image: imgDocSummary,
    featured: false,
  },
  {
    title: 'Amazon Reviews Analytics Platform',
    desc: 'Full-stack analytics dashboard scraping and processing 10,000+ Amazon reviews via Selenium, running sentiment analysis, and visualising insights — reducing manual research by 13 hrs/week.',
    tags: ['Flask', 'Selenium', 'React', 'Python', 'NLP'],
    color: 'cyan',
    emoji: '📊',
    github: 'https://github.com/yaya1441415',
    live: null,
    teamLabel: 'Solo',
    role: 'Sole developer — scraping engine, NLP pipeline, dashboard',
    image: imgAmazon,
    featured: false,
  },
  {
    title: 'Gamified Recycling Web App',
    desc: 'Campus recycling platform using OpenCV to detect and classify recyclable items in real time, with a score-based gamification layer that increased campus recycling participation by 56%.',
    tags: ['Express', 'MongoDB', 'OpenCV', 'Python', 'JavaScript'],
    color: 'green',
    emoji: '♻️',
    github: 'https://github.com/yaya1441415',
    live: null,
    teamLabel: 'Solo',
    role: 'Sole developer — computer vision pipeline, backend, gamification',
    image: imgRecycling,
    featured: false,
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">
          Production-grade work spanning AI, SaaS, and cloud systems — all individually built unless noted.
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
          {visible.map((p, i) => (
            <div
              key={p.title}
              className={`project-card project-card--${p.color} ${hovered === i ? 'hovered' : ''} ${p.highlight ? 'project-card--featured' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {p.image ? (
                <div className="project-img-wrap">
                  <img src={p.image} alt={`${p.title} screenshot`} className="project-img" loading="lazy" decoding="async" />
                </div>
              ) : (
                <div className="project-img-placeholder">
                  <span className="project-img-emoji">{p.emoji}</span>
                  <span className="project-img-hint">Screenshot coming soon</span>
                </div>
              )}

              {p.highlight && <div className="project-featured-badge">{p.label}</div>}

              <div className="project-top">
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
                <span className={`team-badge team-badge--${p.teamLabel === 'Solo' ? 'solo' : 'team'}`}>
                  {p.teamLabel === 'Solo' ? '👤 Solo' : `👥 ${p.teamLabel}`}
                </span>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              {p.challenge && (
                <div className="project-challenge">
                  <span className="challenge-label">⚡ Key challenge:</span> {p.challenge}
                </div>
              )}
              {p.role && (
                <p className="project-role"><strong>My role:</strong> {p.role}</p>
              )}
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <p className="img-attribution">
          📸 All project screenshots are original work created by Yahya Ouchchen from personal and freelance projects.
        </p>

        <div className="projects-footer">
          <button className="toggle-btn" onClick={() => setShowAll(v => !v)}>
            {showAll ? (
              <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6"/></svg> Show less</>
            ) : (
              <>Show all {projects.length} projects <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg></>
            )}
          </button>
          <a href="https://github.com/yaya1441415" target="_blank" rel="noreferrer" className="view-more-btn">
            View all on GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
