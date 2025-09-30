import Header from '../components/Header';
import SocialConsciousnessMap from '../components/SocialConsciousnessMap';

export default function Explorer() {
  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <Header />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SocialConsciousnessMap />
        
        <div style={{
          background: 'white',
          borderRadius: '1rem',
          padding: '2rem',
          margin: '2rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ 
            fontSize: '1.75rem', 
            fontWeight: 'bold', 
            color: '#1e3a8a',
            marginBottom: '1.5rem'
          }}>
            Phân tích Triết học
          </h2>
          
          <div style={{ lineHeight: '1.7', color: '#4b5563' }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Ý thức xã hội</strong> là sự phản ánh <strong>tồn tại xã hội</strong>, 
              nhưng có tính độc lập tương đối và tác động trở lại tồn tại xã hội thông qua 
              các hình thái ý thức khác nhau.
            </p>
            
            <h3 style={{ 
              fontSize: '1.25rem', 
              color: '#374151',
              margin: '1.5rem 0 1rem 0'
            }}>
              Các hình thái ý thức xã hội:
            </h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
                <strong>Ý thức chính trị:</strong> Quan điểm về quyền lực nhà nước
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
                <strong>Ý thức pháp quyền:</strong> Quan điểm về pháp luật và công lý
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
                <strong>Ý thức đạo đức:</strong> Chuẩn mực hành vi và giá trị
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
                <strong>Ý thức thẩm mỹ:</strong> Quan điểm về cái đẹp và nghệ thuật
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
                <strong>Ý thức tôn giáo:</strong> Niềm tin tâm linh và tín ngưỡng
              </div>
            </div>
            
            <p style={{ 
              fontSize: '0.9rem', 
              color: '#9ca3af', 
              fontStyle: 'italic',
              borderLeft: '3px solid #3b82f6',
              paddingLeft: '1rem'
            }}>
              *Nguồn: Giáo trình Triết học Mác-Lênin (2021), trang 419-447
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
