import Header from '../components/Header';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Phong trào Sống Xanh',
      description: 'Giới trẻ Việt Nam và xu hướng bảo vệ môi trường',
      image: '🌱',
      factors: {
        'Tồn tại xã hội': [
          'Ô nhiễm môi trường ngày càng nghiêm trọng',
          'Phát triển công nghệ xanh và tái chế',
          'Biến đổi khí hậu ảnh hưởng trực tiếp'
        ],
        'Tâm lý xã hội': [
          'Trào lưu #ChallengeForChange trên mạng xã hội',
          'Tâm lý lo lắng về tương lai môi trường',
          'Nhu cầu được công nhận là người có trách nhiệm'
        ],
        'Hệ tư tưởng': [
          'Giáo dục môi trường trong trường học',
          'Truyền thông về phát triển bền vững',
          'Giá trị \"sống xanh\" trở thành chuẩn mực mới'
        ]
      },
      analysis: 'Phong trào sống xanh cho thấy sự tương tác phức tạp giữa các yếu tố tồn tại xã hội (ô nhiễm), tâm lý xã hội (trào lưu) và hệ tư tưởng (giáo dục) trong việc hình thành ý thức môi trường.'
    },
    {
      title: 'Văn hóa Khởi nghiệp',
      description: 'Sự bùng nổ của tinh thần startup trong giới trẻ',
      image: '🚀',
      factors: {
        'Tồn tại xã hội': [
          'Nền kinh tế số phát triển mạnh',
          'Cơ hội từ cuộc cách mạng 4.0',
          'Hệ thống hỗ trợ khởi nghiệp từ nhà nước'
        ],
        'Tâm lý xã hội': [
          'Tâm lý muốn làm chủ và tự do tài chính',
          'Áp lực thành công từ các hình mẫu startup',
          'Tâm lý bắt kịp xu hướng toàn cầu'
        ],
        'Hệ tư tưởng': [
          'Giáo dục khởi nghiệp trong đại học',
          'Truyền thông ca ngợi các nhà sáng lập trẻ',
          'Văn hóa \"dám nghĩ dám làm\" được đề cao'
        ]
      },
      analysis: 'Hiện tượng khởi nghiệp phản ánh mối quan hệ biện chứng giữa điều kiện kinh tế-xã hội (tồn tại xã hội) với tâm lý và hệ giá trị mới (ý thức xã hội) của giới trẻ.'
    },
    {
      title: 'Xu hướng Content Creator',
      description: 'Sự trỗi dậy của nghề sáng tạo nội dung số',
      image: '🎬',
      factors: {
        'Tồn tại xã hội': [
          'Phát triển của nền tảng mạng xã hội',
          'Kinh tế số tạo ra thị trường mới',
          'Công nghệ sản xuất nội dung dễ tiếp cận'
        ],
        'Tâm lý xã hội': [
          'Mong muốn được nổi tiếng và công nhận',
          'Tâm lý thoát khỏi công việc truyền thống',
          'Xu hướng theo đuổi đam mê cá nhân'
        ],
        'Hệ tư tưởng': [
          'Quan niệm mới về thành công và nghề nghiệp',
          'Giá trị tự do sáng tạo được đề cao',
          'Truyền thông tôn vinh các content creator'
        ]
      },
      analysis: 'Nghề sáng tạo nội dung minh chứng cho sự thay đổi ý thức xã hội về nghề nghiệp, phản ánh sự phát triển của lực lượng sản xuất mới trong xã hội số.'
    }
  ];

  const getInfluenceColor = (influence) => {
    return influence === 'Tồn tại xã hội' ? '#3b82f6' :
           influence === 'Tâm lý xã hội' ? '#10b981' : '#8b5cf6';
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <Header />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          color: '#1e3a8a',
          marginBottom: '1rem'
        }}>
          Case Studies: Xu hướng Giới trẻ
        </h1>
        
        <p style={{ 
          textAlign: 'center', 
          color: '#6b7280', 
          fontSize: '1.1rem',
          maxWidth: '800px',
          margin: '0 auto 3rem auto',
          lineHeight: '1.6'
        }}>
          Phân tích các hiện tượng xã hội nổi bật trong giới trẻ Việt Nam 
          dưới góc nhìn của chủ nghĩa duy vật lịch sử
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {caseStudies.map((study, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}>
              {/* Header */}
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '2rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '2rem' }}>{study.image}</span>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: 0 }}>
                    {study.title}
                  </h2>
                </div>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: '#e0e7ff',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  {study.description}
                </p>
              </div>
              
              {/* Content */}
              <div style={{ padding: '2rem' }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  color: '#374151',
                  marginBottom: '1.5rem'
                }}>
                  Phân tích theo Cấu trúc Ý thức Xã hội:
                </h3>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  {Object.entries(study.factors).map(([influence, examples]) => (
                    <div key={influence} style={{
                      border: '2px solid ' + getInfluenceColor(influence),
                      borderRadius: '0.75rem',
                      padding: '1.5rem',
                      background: getInfluenceColor(influence) + '10'
                    }}>
                      <h4 style={{ 
                        color: getInfluenceColor(influence),
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                      }}>
                        {influence}
                      </h4>
                      <ul style={{ 
                        listStyle: 'none', 
                        padding: 0, 
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                      }}>
                        {examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontSize: '0.9rem',
                            color: '#4b5563',
                            lineHeight: '1.4'
                          }}>
                            <div style={{
                              width: '6px',
                              height: '6px',
                              background: getInfluenceColor(influence),
                              borderRadius: '50%',
                              marginTop: '0.4rem',
                              flexShrink: 0
                            }}></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div style={{
                  background: '#f8fafc',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #6b7280'
                }}>
                  <h4 style={{ 
                    color: '#374151',
                    marginBottom: '0.75rem',
                    fontSize: '1.1rem'
                  }}>
                    Phân tích Triết học:
                  </h4>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.6',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    {study.analysis}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
