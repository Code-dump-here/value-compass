import Header from '../components/Header';

export default function Timeline() {
  const periods = [
    {
      year: 'Trước 1986',
      title: 'Thời kỳ Bao cấp',
      values: ['Tập thể trên cá nhân', 'Ổn định và an toàn', 'Nghe lời cha mẹ', 'Lòng yêu nước'],
      consciousness: 'Ý thức tập thể mạnh mẽ, chịu ảnh hưởng của nền kinh tế kế hoạch hóa tập trung',
      color: '#ef4444'
    },
    {
      year: '1986-2000',
      title: 'Thời kỳ Đổi mới',
      values: ['Bắt đầu đề cao cá nhân', 'Kinh doanh và làm giàu', 'Học hỏi quốc tế', 'Đổi mới tư duy'],
      consciousness: 'Chuyển đổi từ tập thể sang cá nhân, ảnh hưởng của chính sách mở cửa và đổi mới kinh tế',
      color: '#f59e0b'
    },
    {
      year: '2000-2010',
      title: 'Hội nhập Quốc tế',
      values: ['Thành công cá nhân', 'Giáo dục và tri thức', 'Công nghệ thông tin', 'Toàn cầu hóa'],
      consciousness: 'Ảnh hưởng của internet và toàn cầu hóa, đề cao tri thức và hội nhập quốc tế',
      color: '#10b981'
    },
    {
      year: '2010-2020',
      title: 'Kỷ nguyên Số',
      values: ['Sáng tạo và cá tính', 'Cân bằng cuộc sống', 'Khởi nghiệp', 'Mạng xã hội'],
      consciousness: 'Mạng xã hội định hình xu hướng, sự trỗi dậy của nền kinh tế số và tinh thần khởi nghiệp',
      color: '#3b82f6'
    },
    {
      year: '2020-Nay',
      title: 'Thời đại Bình thường Mới',
      values: ['Sức khỏe tinh thần', 'Trách nhiệm xã hội', 'Môi trường', 'Linh hoạt và thích nghi'],
      consciousness: 'Ảnh hưởng hậu đại dịch, đề cao giá trị bền vững, sức khỏe và trách nhiệm cộng đồng',
      color: '#8b5cf6'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <Header />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          color: '#1e3a8a',
          marginBottom: '1rem'
        }}>
          Dòng thời gian Giá trị Việt Nam
        </h1>
        
        <p style={{ 
          textAlign: 'center', 
          color: '#6b7280', 
          fontSize: '1.1rem',
          maxWidth: '800px',
          margin: '0 auto 3rem auto',
          lineHeight: '1.6'
        }}>
          Hành trình chuyển đổi giá trị và ý thức xã hội của người Việt Nam 
          qua các giai đoạn lịch sử quan trọng
        </p>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '50px',
            top: '0',
            bottom: '0',
            width: '4px',
            background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6)',
            borderRadius: '2px'
          }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {periods.map((period, index) => (
              <div key={index} style={{ position: 'relative' }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '38px',
                  top: '0',
                  width: '24px',
                  height: '24px',
                  background: period.color,
                  borderRadius: '50%',
                  border: '4px solid white',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  zIndex: 2
                }}></div>
                
                {/* Content */}
                <div style={{ marginLeft: '80px' }}>
                  <div style={{
                    background: 'white',
                    borderRadius: '1rem',
                    padding: '2rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    borderLeft: '4px solid' 
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        background: period.color,
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '2rem',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}>
                        {period.year}
                      </div>
                      <h2 style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 'bold', 
                        color: '#1e3a8a',
                        margin: 0
                      }}>
                        {period.title}
                      </h2>
                    </div>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h3 style={{ 
                        fontSize: '1rem',
                        color: '#374151',
                        marginBottom: '0.75rem',
                        fontWeight: '600'
                      }}>
                        Giá trị nổi bật:
                      </h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {period.values.map((value, valueIndex) => (
                          <span key={valueIndex} style={{
                            background: period.color + '20',
                            color: period.color,
                            padding: '0.375rem 0.75rem',
                            borderRadius: '1rem',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            border: '1px solid ' + period.color
                          }}>
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 style={{ 
                        fontSize: '1rem',
                        color: '#374151',
                        marginBottom: '0.75rem',
                        fontWeight: '600'
                      }}>
                        Đặc điểm ý thức xã hội:
                      </h3>
                      <p style={{ 
                        color: '#6b7280', 
                        lineHeight: '1.6',
                        margin: 0,
                        fontSize: '0.95rem'
                      }}>
                        {period.consciousness}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '1rem',
          padding: '2rem',
          marginTop: '3rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>
            Nhận định Triết học
          </h3>
          <p style={{ color: '#6b7280', lineHeight: '1.6', fontStyle: 'italic' }}>
            "Sự chuyển đổi giá trị qua các thời kỳ phản ánh mối quan hệ biện chứng giữa 
            tồn tại xã hội (điều kiện kinh tế, chính sách, công nghệ) và ý thức xã hội 
            (giá trị, chuẩn mực, tư tưởng). Mỗi giai đoạn lịch sử tạo ra những giá trị 
            phù hợp với điều kiện tồn tại xã hội đương thời."
          </p>
        </div>
      </div>
    </div>
  );
}
