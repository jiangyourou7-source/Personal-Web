import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--color-border)] bg-white">
      <div className="page-shell py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-end">
          <div className="flex flex-wrap gap-6 text-sm text-[var(--color-text-muted)] md:ml-auto">
            <Link to="/" className="hover:text-[var(--color-primary)]">
              首页
            </Link>
            <Link to="/cases" className="hover:text-[var(--color-primary)]">
              项目案例
            </Link>
            <Link to="/insights" className="hover:text-[var(--color-primary)]">
              我的项目
            </Link>
            <Link to="/about" className="hover:text-[var(--color-primary)]">
              关于我
            </Link>
          </div>
        </div>
        <div className="mt-6 border-t border-[var(--color-border)] pt-5 text-sm text-[var(--color-text-soft)]">
          <p>&copy; 2026</p>
        </div>
      </div>
    </footer>
  );
}
