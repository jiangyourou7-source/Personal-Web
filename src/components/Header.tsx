import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data';

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(255,255,255,0.94)] backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between py-5 md:grid md:grid-cols-[1fr_auto_1fr]">
        <div className="hidden md:block" />
        <nav className="hidden items-center justify-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[15px] font-semibold ${
                  active
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                }`}
              >
                {item.name}
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
          onClick={() => setMenuOpen((v) => !v)}
          className="justify-self-end text-[var(--color-primary)] md:hidden"
          title="打开菜单"
        >
          <span className="material-symbols-outlined text-[26px]">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--color-border)] bg-white md:hidden">
          <div className="page-shell flex flex-col gap-5 py-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-base font-semibold text-[var(--color-text-muted)]"
              >
                {item.name}
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
}
