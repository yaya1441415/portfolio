import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>YO<span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-copy">
          Yahya Ouchchen · Built with React &amp; Vite · {new Date().getFullYear()}
        </p>
        <div className="footer-links">
          <a href="https://github.com/yaya1441415" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/yahya-ouchchen-4aaa58221/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:yahayr42442@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
