import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import AboutMe from './pages/AboutMe';
import CaseDetail from './pages/CaseDetail';
import CaseStudies from './pages/CaseStudies';
import ExpertProfile from './pages/ExpertProfile';
import InsightDetail from './pages/InsightDetail';
import Insights from './pages/Insights';
import NotFound from './pages/NotFound';
import RFQ from './pages/RFQ';

const navLinks = [
  { name: '首页', path: '/' },
  { name: '项目案例', path: '/cases' },
  { name: '我的项目', path: '/insights' },
  { name: '关于我', path: '/about' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(255,255,255,0.94)] backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between py-5 md:grid md:grid-cols-[1fr_auto_1fr]">
        <div className="hidden md:block" />

        <nav className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] font-semibold ${
                  active ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden justify-self-end md:block">
          <Link
            to="/rfq"
            className="rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-5 py-3 text-sm font-bold text-white hover:bg-[var(--color-primary-strong)]"
          >
            预约沟通
          </Link>
        </div>

        <div className="md:hidden" />
        <button
          onClick={() => setMobileOpen((value) => !value)}
          className="justify-self-end text-[var(--color-primary)] md:hidden"
          title="打开菜单"
        >
          <span className="material-symbols-outlined text-[26px]">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-white md:hidden">
          <div className="page-shell flex flex-col gap-5 py-6">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-base font-semibold text-[var(--color-text-muted)]">
                {link.name}
              </Link>
            ))}
            <Link
              to="/rfq"
              className="rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-bold text-white"
            >
              预约沟通
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="mt-20 border-t border-[var(--color-border)] bg-white">
    <div className="page-shell py-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-end">
        <div className="flex flex-wrap gap-6 text-sm text-[var(--color-text-muted)] md:ml-auto">
          <Link to="/" className="hover:text-[var(--color-primary)]">首页</Link>
          <Link to="/cases" className="hover:text-[var(--color-primary)]">项目案例</Link>
          <Link to="/insights" className="hover:text-[var(--color-primary)]">我的项目</Link>
          <Link to="/about" className="hover:text-[var(--color-primary)]">关于我</Link>
        </div>
      </div>
      <div className="mt-6 border-t border-[var(--color-border)] pt-5 text-sm text-[var(--color-text-soft)]">
        <p>© 2026</p>
      </div>
    </div>
  </footer>
);

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  useDocumentTitle();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<ExpertProfile />} />
          <Route path="/cases" element={<CaseStudies />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insight/:id" element={<InsightDetail />} />
          <Route path="/rfq" element={<RFQ />} />
          <Route path="/case/:id" element={<CaseDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
