import { lazy, Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Header, Footer, ScrollToTop, TitleManager } from './components';

const Home = lazy(() => import('./pages/Home'));
const Cases = lazy(() => import('./pages/Cases'));
const CaseDetail = lazy(() => import('./pages/CaseDetail'));
const About = lazy(() => import('./pages/About'));
const Insights = lazy(() => import('./pages/Insights'));
const InsightDetail = lazy(() => import('./pages/InsightDetail'));
const RFQ = lazy(() => import('./pages/RFQ'));
const NotFound = lazy(() => import('./pages/NotFound'));

function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-sm text-[var(--color-text-muted)]">加载中...</div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
        <ScrollToTop />
        <TitleManager />
        <Header />
        <main>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/about" element={<About />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insight/:id" element={<InsightDetail />} />
              <Route path="/rfq" element={<RFQ />} />
              <Route path="/case/:id" element={<CaseDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
