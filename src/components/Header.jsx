import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) => ({
    color: isActive(path) ? '#3b82f6' : '#6b7280',
    textDecoration: 'none',
    fontWeight: isActive(path) ? '600' : '500',
    padding: '0.5rem 0.75rem',
    borderRadius: '0.375rem',
    background: isActive(path) ? '#eff6ff' : 'transparent',
    transition: 'all 0.2s ease'
  });

  return (
    <header style={{
      background: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to='/' style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#2563eb',
          textDecoration: 'none'
        }}>
          La bàn Giá trị
        </Link>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Link to='/' style={linkStyle('/')}>
            Trang chủ
          </Link>
          <Link to='/explorer' style={linkStyle('/explorer')}>
            Khám phá
          </Link>
          <Link to='/quiz' style={linkStyle('/quiz')}>
            Bài trắc nghiệm
          </Link>
          <Link to='/case-studies' style={linkStyle('/case-studies')}>
            Case Studies
          </Link>
          <Link to='/timeline' style={linkStyle('/timeline')}>
            Dòng thời gian
          </Link>
        </div>
      </nav>
    </header>
  );
}
