export default function SocialConsciousnessMap() {
  const elements = [
    { 
      id: 1, 
      name: 'Tồn tại xã hội', 
      description: 'Điều kiện kinh tế, công nghệ, cơ sở vật chất',
      examples: ['Kinh tế phát triển', 'Công nghệ số', 'Toàn cầu hóa', 'Cơ sở hạ tầng'],
      color: '#dbeafe',
      borderColor: '#3b82f6'
    },
    { 
      id: 2, 
      name: 'Tâm lý xã hội', 
      description: 'Cảm xúc, tâm trạng, xu hướng tập thể',
      examples: ['Trào lưu mạng xã hội', 'Tâm lý đám đông', 'Cảm xúc cộng đồng', 'Thói quen tập thể'],
      color: '#dcfce7',
      borderColor: '#10b981'
    },
    { 
      id: 3, 
      name: 'Hệ tư tưởng', 
      description: 'Giáo dục, truyền thông, văn hóa, tôn giáo',
      examples: ['Giáo dục nhà trường', 'Truyền thông đại chúng', 'Giá trị truyền thống', 'Đạo đức xã hội'],
      color: '#f3e8ff',
      borderColor: '#8b5cf6'
    }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        textAlign: 'center', 
        color: '#1e3a8a',
        marginBottom: '3rem'
      }}>
        Cấu trúc Ý thức Xã hội
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {elements.map(element => (
          <div key={element.id} style={{
            background: element.color,
            border: '2px solid ' + element.borderColor,
            borderRadius: '1rem',
            padding: '1.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: element.borderColor,
              marginBottom: '1rem'
            }}>
              {element.name}
            </h3>
            
            <p style={{
              color: '#6b7280',
              marginBottom: '1.5rem',
              lineHeight: '1.5'
            }}>
              {element.description}
            </p>
            
            <div style={{ background: 'rgba(255,255,255,0.7)', borderRadius: '0.5rem', padding: '1rem' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                Ví dụ thực tế:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {element.examples.map((example, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: '#4b5563'
                  }}>
                    <div style={{
                      width: '4px',
                      height: '4px',
                      background: element.borderColor,
                      borderRadius: '50%'
                    }}></div>
                    {example}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{
        textAlign: 'center',
        padding: '1.5rem',
        background: 'white',
        borderRadius: '0.75rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <p style={{ color: '#6b7280', fontStyle: 'italic', margin: 0 }}>
          "Các yếu tố tương tác và ảnh hưởng lẫn nhau trong việc hình thành ý thức xã hội. 
          Tồn tại xã hội quyết định ý thức xã hội, nhưng ý thức xã hội có tính độc lập tương đối 
          và tác động trở lại tồn tại xã hội."
        </p>
      </div>
    </div>
  );
}
