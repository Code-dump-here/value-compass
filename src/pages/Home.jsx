import Header from '../components/Header';
import CompassVisualization from '../components/CompassVisualization';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #f0f9ff, #f0fdf4)' }}>
      <Header />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1e3a8a',
            marginBottom: '1rem'
          }}>
            La bàn Giá trị
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Khám phá cách ý thức xã hội định hình giá trị và hành vi của giới trẻ Việt Nam
          </p>
        </div>

        {/* Main content with compass */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '3rem'
        }}>
          <div>
            <h2 style={{ 
              fontSize: '2rem', 
              color: '#1e40af', 
              marginBottom: '1.5rem' 
            }}>
              Ý thức Xã hội là gì?
            </h2>
            
            <div style={{ 
              background: 'white', 
              borderRadius: '1rem', 
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <p style={{ 
                color: '#6b7280', 
                lineHeight: '1.7', 
                marginBottom: '1.5rem',
                fontSize: '1.1rem'
              }}>
                Theo triết học Mác-Lênin, <strong>ý thức xã hội</strong> là mặt tinh thần của đời sống xã hội, 
                bao gồm toàn bộ quan điểm, tư tưởng, tình cảm, tâm trạng của xã hội được 
                nảy sinh từ <strong>tồn tại xã hội</strong> và phản ánh tồn tại xã hội.
              </p>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ 
                    width: '8px', 
                    height: '8px', 
                    background: '#3b82f6', 
                    borderRadius: '50%',
                    marginTop: '0.5rem'
                  }}></div>
                  <span style={{ color: '#374151' }}>
                    <strong>Tâm lý xã hội:</strong> Tình cảm, tâm trạng, thói quen tập thể
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ 
                    width: '8px', 
                    height: '8px', 
                    background: '#10b981', 
                    borderRadius: '50%',
                    marginTop: '0.5rem'
                  }}></div>
                  <span style={{ color: '#374151' }}>
                    <strong>Hệ tư tưởng:</strong> Quan điểm chính trị, triết học, đạo đức
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ 
                    width: '8px', 
                    height: '8px', 
                    background: '#8b5cf6', 
                    borderRadius: '50%',
                    marginTop: '0.5rem'
                  }}></div>
                  <span style={{ color: '#374151' }}>
                    <strong>Mối quan hệ:</strong> Phản ánh tồn tại xã hội và có tính độc lập tương đối
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CompassVisualization />
          </div>
        </div>

        {/* Call to action buttons */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            color: '#374151', 
            marginBottom: '2rem' 
          }}>
            Bắt đầu hành trình khám phá
          </h3>
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap' 
          }}>
            <Link to='/explorer' style={{
              background: '#3b82f6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1rem'
            }}>
              Khám phá Cấu trúc
            </Link>
            <Link to='/quiz' style={{
              background: '#10b981',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1rem'
            }}>
              Bài trắc nghiệm
            </Link>
            <Link to='/case-studies' style={{
              background: '#8b5cf6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1rem'
            }}>
              Case Studies
            </Link>
            <Link to='/timeline' style={{
              background: '#f59e0b',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1rem'
            }}>
              Dòng thời gian
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
